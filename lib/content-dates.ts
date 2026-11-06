import { execFileSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

/**
 * Last significant change dates for the sitemap, taken from git history.
 *
 * Google only trusts <lastmod> when it is consistently accurate, and says a
 * wrong lastmod is worse than none. So a date is returned only when git can
 * prove it. A page gets no lastmod if git is missing, if one of its source
 * files has uncommitted changes, or if the clone is shallow and a source has
 * not changed inside the fetched history.
 *
 * History is followed along the first parent, so a change merged into main
 * is dated by the merge, the day it reached the live site, rather than by
 * the day it was written on a branch.
 */

/**
 * A whole file, or one passage inside a shared file (such as a suburb's note
 * in notes.ts), dated by the last commit that changed that exact text.
 */
export type DateSource = string | { file: string; text: string }

type Commit = { hash: string; date: Date }

const root = process.cwd()
const cache = new Map<string, Commit | undefined>()
const dirty = new Map<string, boolean>()

function git(args: string[]) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()
  } catch {
    return ""
  }
}

// Ask git where its shallow file is, so worktrees and subfolder projects work too.
const shallowBoundaries: Set<string> = (() => {
  const location = git(["rev-parse", "--git-path", "shallow"])
  if (!location) return new Set()
  const file = path.resolve(root, location)
  if (!existsSync(file)) return new Set()
  return new Set(readFileSync(file, "utf8").split(/\s+/).filter(Boolean))
})()

function lastCommit(file: string, text?: string): Commit | undefined {
  const key = text === undefined ? file : `${file}\n${text}`
  if (cache.has(key)) return cache.get(key)
  let commit: Commit | undefined
  // Uncommitted changes have no provable date yet.
  if (!dirty.has(file)) dirty.set(file, git(["status", "--porcelain", "--", file]) !== "")
  if (!dirty.get(file)) {
    const args = ["log", "-1", "--first-parent", "--format=%H %cI"]
    if (text !== undefined) args.push(`-S${text}`)
    const out = git([...args, "--", file])
    const [hash, iso] = out.split(" ")
    const date = new Date(iso)
    // In a shallow clone the boundary commit appears to "add" every file, so
    // its date says nothing about when this file really changed.
    if (hash && !shallowBoundaries.has(hash) && !Number.isNaN(date.getTime())) commit = { hash, date }
  }
  cache.set(key, commit)
  return commit
}

/** The most recent commit date across the given sources, or undefined. */
export function lastModifiedFor(sources: DateSource[]): Date | undefined {
  let latest: Date | undefined
  for (const source of sources) {
    const commit = typeof source === "string" ? lastCommit(source) : lastCommit(source.file, source.text)
    // One unknown source means we cannot vouch for the page date.
    if (!commit) return undefined
    if (!latest || commit.date > latest) latest = commit.date
  }
  return latest
}
