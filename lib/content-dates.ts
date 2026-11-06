import { execFileSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

/**
 * Last significant change dates for the sitemap, taken from git history.
 *
 * Google only trusts <lastmod> when it is consistently accurate, and says a
 * wrong lastmod is worse than none. So a date is returned only when git can
 * prove it: if git is missing, or the clone is shallow and the file has not
 * changed inside the fetched history, the page simply gets no lastmod.
 */
const root = process.cwd()
const cache = new Map<string, Date | undefined>()

function git(args: string[]) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim()
  } catch {
    return ""
  }
}

const shallowBoundaries: Set<string> = (() => {
  const file = path.join(root, ".git", "shallow")
  if (!existsSync(file)) return new Set()
  return new Set(readFileSync(file, "utf8").split(/\s+/).filter(Boolean))
})()

function lastCommit(file: string): { hash: string; date: Date } | undefined {
  const out = git(["log", "-1", "--format=%H %cI", "--", file])
  if (!out) return undefined
  const [hash, iso] = out.split(" ")
  // In a shallow clone the boundary commit appears to "add" every file, so its
  // date says nothing about when this file really changed.
  if (shallowBoundaries.has(hash)) return undefined
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? undefined : { hash, date }
}

/** The most recent commit date across the given source files, or undefined. */
export function lastModifiedFor(sources: string[]): Date | undefined {
  const key = sources.join("|")
  if (cache.has(key)) return cache.get(key)
  let latest: Date | undefined
  for (const source of sources) {
    const commit = lastCommit(source)
    if (!commit) {
      // One unknown source means we cannot vouch for the page date.
      latest = undefined
      break
    }
    if (!latest || commit.date > latest) latest = commit.date
  }
  cache.set(key, latest)
  return latest
}
