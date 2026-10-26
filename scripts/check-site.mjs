// Post-build checks on the static export in ./out: internal links resolve,
// every page has exactly one h1, a title, a description and a canonical, no
// forbidden strings slipped in, and the sitemap matches the built pages.
// Run after `pnpm build`: `node scripts/check-site.mjs`
import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const out = path.join(root, "out")
const siteUrl = "https://hararefridgerepairs.co.zw"
const forbidden = [/electro\s*appliance/i, /electroappliance/i, /0771\s?371\s?600/, /AW-18395132504/, /G-NC7MND1ZD1/, /lorem ipsum/i]

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

async function exists(file) {
  try {
    await stat(file)
    return true
  } catch {
    return false
  }
}

const files = await walk(out)
const htmlFiles = files.filter((f) => f.endsWith(".html") && !f.endsWith("404.html") && !f.endsWith("_not-found.html"))
const pages = new Set(
  htmlFiles.map((f) => {
    const rel = path.relative(out, f).replace(/\\/g, "/")
    if (rel === "index.html") return "/"
    return "/" + rel.replace(/\/index\.html$/, "").replace(/\.html$/, "")
  }),
)

const problems = []
let linkCount = 0

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8")
  const rel = "/" + path.relative(out, file).replace(/\\/g, "/")

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0
  if (h1s !== 1) problems.push(`${rel}: ${h1s} h1 elements`)

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ""
  if (!title) problems.push(`${rel}: missing title`)
  else if (title.length > 70) problems.push(`${rel}: title ${title.length} chars: ${title}`)

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""
  if (!desc) problems.push(`${rel}: missing description`)
  else if (desc.length > 160) problems.push(`${rel}: description ${desc.length} chars`)

  if (!html.includes('rel="canonical"')) problems.push(`${rel}: missing canonical`)

  for (const pattern of forbidden) {
    if (pattern.test(html)) problems.push(`${rel}: forbidden text ${pattern}`)
  }

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue
    if (href.startsWith("/_next/")) continue
    const clean = href.split("#")[0].split("?")[0]
    if (!clean) continue
    linkCount++
    if (pages.has(clean)) continue
    if (/\.[a-z0-9]+$/i.test(clean)) {
      if (!(await exists(path.join(out, clean)))) problems.push(`${rel}: missing file ${clean}`)
      continue
    }
    problems.push(`${rel}: broken link ${href}`)
  }

  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1])
  for (const src of srcs) {
    if (!src.startsWith("/") || src.startsWith("/_next/")) continue
    if (!(await exists(path.join(out, src.split("?")[0])))) problems.push(`${rel}: missing image ${src}`)
  }
}

const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8")
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(siteUrl, "") || "/")
for (const url of sitemapUrls) {
  if (!pages.has(url)) problems.push(`sitemap: ${url} not built`)
}
for (const page of pages) {
  if (!sitemapUrls.includes(page)) problems.push(`sitemap: missing ${page}`)
}

const unique = [...new Set(problems)]
console.log(`${pages.size} pages, ${linkCount} internal links checked, ${sitemapUrls.length} sitemap URLs`)
if (unique.length) {
  console.log(`${unique.length} problems:`)
  for (const problem of unique) console.log(" -", problem)
  process.exitCode = 1
} else {
  console.log("No problems found.")
}
