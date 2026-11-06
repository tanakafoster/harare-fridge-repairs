// Post-build checks on the static export in ./out: internal links resolve,
// every page has exactly one h1, a unique title and description, a canonical
// that points at itself, no noindex, valid JSON-LD whose FAQ answers are
// visible on the page, at least one inbound internal link, no forbidden
// strings, and the sitemap matches the built pages.
// Run after `pnpm build`: `node scripts/check-site.mjs`
import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const out = path.join(root, "out")
const siteUrl = "https://hararefridgerepairs.co.zw"
// Sister businesses we link to on purpose, from a handful of pages only.
const sisterHosts = {
  washing: "https://www.hararewashingmachinerepairs.co.zw",
  electro: "https://www.electroappliancerepairs.co.zw",
}
const maxSisterPages = 5
const sisterDomain = /^https?:\/\/(?:www\.)?(hararewashingmachinerepairs|electroappliancerepairs)\.co\.zw/i
const sisterBlock = /<section data-sister-sites[^>]*>[\s\S]*?<\/section>/g
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
let schemaCount = 0
const titles = new Map()
const descriptions = new Map()
const inbound = new Map([...pages].map((page) => [page, new Set()]))
const sisterPages = { washing: new Set(), electro: new Set() }

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
}

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim()
}

function collectTypes(node, out = []) {
  if (Array.isArray(node)) node.forEach((item) => collectTypes(item, out))
  else if (node && typeof node === "object") {
    if (node["@type"]) out.push(node)
    for (const value of Object.values(node)) collectTypes(value, out)
  }
  return out
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8")
  const rel = "/" + path.relative(out, file).replace(/\\/g, "/")

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0
  if (h1s !== 1) problems.push(`${rel}: ${h1s} h1 elements`)

  const pagePath = rel === "/index.html" ? "/" : rel.replace(/\/index\.html$/, "").replace(/\.html$/, "")

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "")
  if (!title) problems.push(`${rel}: missing title`)
  else if (title.length > 70) problems.push(`${rel}: title ${title.length} chars: ${title}`)
  if (title) titles.set(title, [...(titles.get(title) ?? []), pagePath])

  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "")
  if (!desc) problems.push(`${rel}: missing description`)
  else if (desc.length > 160) problems.push(`${rel}: description ${desc.length} chars`)
  if (desc) descriptions.set(desc, [...(descriptions.get(desc) ?? []), pagePath])

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonical) problems.push(`${rel}: missing canonical`)
  else if (canonical !== (pagePath === "/" ? siteUrl : siteUrl + pagePath)) problems.push(`${rel}: canonical points elsewhere: ${canonical}`)

  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) problems.push(`${rel}: noindex on a built page`)

  // Structured data: must parse, must not carry self-serving review markup,
  // and every FAQ answer in the markup must be visible on the page.
  const text = visibleText(html)
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  for (const raw of blocks) {
    let data
    try {
      data = JSON.parse(raw)
    } catch (error) {
      problems.push(`${rel}: JSON-LD does not parse (${error.message})`)
      continue
    }
    const nodes = collectTypes(data)
    schemaCount++
    for (const node of nodes) {
      const types = [].concat(node["@type"])
      if (node.aggregateRating || node.review || types.includes("Review") || types.includes("AggregateRating")) {
        problems.push(`${rel}: review or rating markup (not allowed for our own business)`)
      }
      if (types.includes("HowTo")) problems.push(`${rel}: HowTo markup is retired`)
      if (types.includes("Answer") && typeof node.text === "string" && !text.includes(decode(node.text).replace(/\s+/g, " ").trim())) {
        problems.push(`${rel}: FAQ answer in JSON-LD not visible on page: ${node.text.slice(0, 60)}…`)
      }
    }
    if (/\bundefined\b|\bNaN\b|\bTODO\b|lorem ipsum/.test(raw)) problems.push(`${rel}: placeholder text in JSON-LD`)
  }

  // Sister-site links: canonical www host, only inside the sister note, and
  // on no more than five pages per site. The note itself may name Electro;
  // everywhere else the forbidden list still applies.
  // React's flight data repeats the page props inside <script> tags, so the
  // copy check ignores it; the rendered HTML, JSON-LD and other scripts are
  // still checked in full.
  const outsideSister = html.replace(sisterBlock, " ").replace(/<script>self\.__next_f\.push\([\s\S]*?<\/script>/g, " ")
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const domain = match[1].match(sisterDomain)
    if (!domain) continue
    const site = domain[1].toLowerCase().startsWith("electro") ? "electro" : "washing"
    if (!match[1].startsWith(sisterHosts[site])) problems.push(`${rel}: sister link should use ${sisterHosts[site]}: ${match[1]}`)
    sisterPages[site].add(pagePath)
  }
  for (const match of outsideSister.matchAll(/href="([^"]+)"/g)) {
    if (sisterDomain.test(match[1])) problems.push(`${rel}: sister-site link outside the sister note: ${match[1]}`)
  }

  for (const pattern of forbidden) {
    if (pattern.test(outsideSister)) problems.push(`${rel}: forbidden text ${pattern}`)
  }

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue
    if (href.startsWith("/_next/")) continue
    const clean = href.split("#")[0].split("?")[0]
    if (!clean) continue
    linkCount++
    if (pages.has(clean)) {
      if (clean !== pagePath) inbound.get(clean)?.add(pagePath)
      continue
    }
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

for (const [value, paths] of titles) {
  if (paths.length > 1) problems.push(`duplicate title on ${paths.join(", ")}: ${value}`)
}
for (const [value, paths] of descriptions) {
  if (paths.length > 1) problems.push(`duplicate description on ${paths.join(", ")}: ${value.slice(0, 60)}…`)
}
for (const [page, sources] of inbound) {
  if (page !== "/" && sources.size === 0) problems.push(`${page}: no inbound internal links (orphan)`)
}

for (const [site, linked] of Object.entries(sisterPages)) {
  if (linked.size > maxSisterPages) {
    problems.push(`${sisterHosts[site]} is linked from ${linked.size} pages; keep it to ${maxSisterPages} or fewer`)
  }
}

const unique = [...new Set(problems)]
console.log(
  `${pages.size} pages, ${linkCount} internal links checked, ${schemaCount} JSON-LD blocks, ${sitemapUrls.length} sitemap URLs`,
)
console.log(
  `Sister-site links: ${Object.entries(sisterPages)
    .map(([site, linked]) => `${site} from ${linked.size} pages (${[...linked].sort().join(", ")})`)
    .join("; ")}`,
)
if (unique.length) {
  console.log(`${unique.length} problems:`)
  for (const problem of unique) console.log(" -", problem)
  process.exitCode = 1
} else {
  console.log("No problems found.")
}
