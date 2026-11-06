// Tells Bing and the other IndexNow search engines (Yandex, Seznam, Naver,
// Yep) about the site's pages after a deploy. Google does not use IndexNow;
// for Google, submit the sitemap in Search Console.
//
// Usage, after the new version is live on the domain:
//   pnpm build && pnpm indexnow                       # every URL in the sitemap
//   pnpm indexnow -- --changed-since 2026-11-06       # only pages changed since a date
//   pnpm indexnow -- --dry-run                        # list what would be sent
import { readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseArgs } from "node:util"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const host = "hararefridgerepairs.co.zw"
const key = "a1dc5ebc9cbc7802941906786d11e3c6"
const keyLocation = `https://${host}/${key}.txt`

// Strict, so a typo such as --dryrun stops the script instead of sending for real.
let options
try {
  options = parseArgs({
    args: process.argv.slice(2).filter((arg) => arg !== "--"),
    options: { "dry-run": { type: "boolean" }, "changed-since": { type: "string" } },
  }).values
} catch (error) {
  console.error(`${error.message}\nUsage: pnpm indexnow -- [--dry-run] [--changed-since 2026-11-06]`)
  process.exit(1)
}
const dryRun = Boolean(options["dry-run"])
const since = options["changed-since"] ? new Date(options["changed-since"]) : undefined
if (since && Number.isNaN(since.getTime())) {
  console.error("--changed-since needs a date such as 2026-11-06")
  process.exit(1)
}

const sitemap = await readFile(path.join(root, "out", "sitemap.xml"), "utf8").catch(() => "")
if (!sitemap) {
  console.error("out/sitemap.xml not found. Run pnpm build first.")
  process.exit(1)
}

const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1],
  lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
}))
// A page with no lastmod has an unknown date (shallow clone, uncommitted
// files or no git), not an old one, so it is sent rather than skipped.
const undated = entries.filter((entry) => entry.loc && !entry.lastmod).length
const urlList = entries
  .filter((entry) => entry.loc)
  .filter((entry) => !since || !entry.lastmod || new Date(entry.lastmod) >= since)
  .map((entry) => entry.loc)

console.log(`${urlList.length} URL(s) to submit${since ? ` changed since ${since.toISOString().slice(0, 10)}` : ""}.`)
if (since && undated) console.log(`${undated} of them have no lastmod in the sitemap and are included to be safe.`)
if (dryRun || urlList.length === 0) {
  for (const url of urlList) console.log(" ", url)
  process.exit(0)
}

// The key file must be live first, or the engines reject the submission.
const check = await fetch(keyLocation).catch(() => undefined)
const body = check?.ok ? (await check.text()).trim() : ""
if (body !== key) {
  console.error(`Key file not live at ${keyLocation}. Deploy the site first, then run this again.`)
  process.exit(1)
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
})
const meaning = {
  200: "accepted",
  202: "accepted, key validation pending",
  400: "bad request",
  403: "key not valid for this host",
  422: "URLs do not belong to the host",
  429: "too many requests, try later",
}
console.log(`IndexNow: ${response.status} ${meaning[response.status] ?? response.statusText}`)
if (response.status >= 400) process.exitCode = 1
