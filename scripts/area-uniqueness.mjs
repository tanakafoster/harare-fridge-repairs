// Report (never fails the build): how much of each suburb page's text is
// unique to that page once the suburb name is masked and the shared template
// is set aside. Pages at the bottom of the list are the best candidates for
// real local detail: job photos, notes from recent callouts, local landmarks.
// Run after `pnpm build`: `node scripts/area-uniqueness.mjs [--top 20]`
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dir = path.join(root, "out", "areas")
const topIndex = process.argv.indexOf("--top")
const top = topIndex > -1 ? Number(process.argv[topIndex + 1]) || 20 : 20
const SHINGLE = 6
const TEMPLATE_SHARE = 0.5

function mainText(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? html
  return main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&[a-z]+;/g, " ")
    .toLowerCase()
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const regionPages = new Set(["harare-north.html", "harare-south.html", "harare-east.html", "harare-west.html"])
const files = (await readdir(dir)).filter((f) => f.endsWith(".html") && !regionPages.has(f))
const pages = []
for (const file of files) {
  const html = await readFile(path.join(dir, file), "utf8")
  const name = (html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1] ?? "")
    .replace(/^Fridge Repairs (in )?/, "")
    .replace(/, Harare$/, "")
    .replace(/ Fridge Repairs$/, "")
    .trim()
    .toLowerCase()
  let text = mainText(html)
  if (name) text = text.replace(new RegExp(escapeRegExp(name), "g"), " suburb ")
  const words = text.match(/[a-z0-9']+/g) ?? []
  const shingles = new Set()
  for (let i = 0; i + SHINGLE <= words.length; i++) shingles.add(words.slice(i, i + SHINGLE).join(" "))
  pages.push({ slug: file.replace(/\.html$/, ""), words: words.length, shingles })
}

const seenOn = new Map()
for (const page of pages) for (const s of page.shingles) seenOn.set(s, (seenOn.get(s) ?? 0) + 1)
const templateLimit = Math.ceil(pages.length * TEMPLATE_SHARE)

for (const page of pages) {
  const local = [...page.shingles].filter((s) => seenOn.get(s) <= templateLimit)
  const own = local.filter((s) => seenOn.get(s) === 1)
  page.unique = local.length ? own.length / local.length : 0
  page.template = page.shingles.size ? 1 - local.length / page.shingles.size : 0
  page.ownShingles = own.length
}

pages.sort((a, b) => a.unique - b.unique)
const average = pages.reduce((sum, p) => sum + p.unique, 0) / pages.length
console.log(`${pages.length} suburb pages, average unique share ${(average * 100).toFixed(0)}% of non-template text`)
console.log("These thresholds are heuristics, not Google rules. Lowest first:")
console.log("slug".padEnd(26), "words".padStart(6), "unique".padStart(7), "own".padStart(5), "template".padStart(9))
for (const page of pages.slice(0, top)) {
  console.log(
    page.slug.padEnd(26),
    String(page.words).padStart(6),
    `${(page.unique * 100).toFixed(0)}%`.padStart(7),
    String(page.ownShingles).padStart(5),
    `${(page.template * 100).toFixed(0)}%`.padStart(9),
  )
}
