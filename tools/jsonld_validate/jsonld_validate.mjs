#!/usr/bin/env node
/**
 * jsonld_validate.mjs — validate JSON-LD blocks in built HTML (or live URLs).
 *
 * Usage:
 *   node jsonld_validate.mjs <dir|file|url> [...more] [--json] [--quiet] [--allow-deprecated]
 *
 * For every <script type="application/ld+json"> block in each HTML document it checks:
 *   1. the block parses as JSON (one object, an array, or an object with @graph);
 *   2. no placeholder values ("TODO", "example.com", "Lorem", "{{", "[Business Name]", empty strings, "REPLACE");
 *   3. every node has an @type;
 *   4. required properties for a small rule set:
 *        LocalBusiness (and subtypes): name + address (Google requires both; areaServed noted, not required)
 *        Service: name + provider
 *        FAQPage: mainEntity[] of Question with name + acceptedAnswer.text
 *        BreadcrumbList: itemListElement[] of ListItem with position + name (+ item except for the last)
 *   5. deprecated rich-result types (HowTo rich results retired 2023-09-14; FAQ rich results stopped
 *      2026-05-07 — FAQPage is reported as a warning, not an error, because the markup is harmless);
 *   6. FAQ answers and question names must appear in the visible text of the page (structured data
 *      must describe visible content).
 *
 * Exit codes: 0 = no errors (warnings allowed), 1 = at least one error (or an input could not be read).
 * `--json` prints machine-readable findings instead of a table. Zero dependencies (Node >= 18).
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const LOCAL_BUSINESS_TYPES = new Set([
  'LocalBusiness', 'Electrician', 'Plumber', 'HomeAndConstructionBusiness', 'ProfessionalService',
  'GeneralContractor', 'HVACBusiness', 'AutoRepair', 'Store', 'Restaurant', 'MedicalBusiness', 'Dentist',
])
const DEPRECATED = { HowTo: 'HowTo rich results were removed from Google Search (2023-09-14)', SpecialAnnouncement: 'SpecialAnnouncement rich result retired' }
const SOFT_DEPRECATED = { FAQPage: 'FAQ rich results stopped appearing in Google Search on 2026-05-07; markup is harmless but earns nothing' }
const PLACEHOLDER = /(^\s*$)|TODO|FIXME|example\.(com|org|net)|lorem ipsum|\{\{|\}\}|\[(business|company|city|suburb|phone|name)[^\]]*\]|xxx-xxx|\bN\/A\b|your[- ](business|company)[- ]name/i
// Case-sensitive so ordinary words such as "replace your fridge" are not flagged.
const PLACEHOLDER_TOKEN = /REPLACE_/

const args = process.argv.slice(2)
const flags = new Set(args.filter((a) => a.startsWith('--')))
const inputs = args.filter((a) => !a.startsWith('--'))

/** Collect .html files under a directory (recursively), skipping Next.js internals. */
function htmlFiles(path) {
  const st = statSync(path)
  if (st.isFile()) return [path]
  return readdirSync(path).flatMap((name) => {
    if (name.startsWith('_') || name === 'api') return []
    const p = join(path, name)
    return statSync(p).isDirectory() ? htmlFiles(p) : /\.(html|tsx?|jsx?)$/.test(name) && !name.endsWith('.d.ts') ? [p] : []
  })
}

async function loadDocument(src) {
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src, { headers: { 'user-agent': 'jsonld-validate/1.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  }
  return readFileSync(src, 'utf8')
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')

/** Extract JSON-LD block bodies (attribute order tolerant, case-insensitive). */
function extractBlocks(html) {
  const re = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  return [...html.matchAll(re)].map((m) => m[1].trim())
}

/** Visible text: drop head, scripts, styles, tags; collapse whitespace; lower-case. */
function visibleText(html) {
  const body = html.replace(/<head[\s\S]*?<\/head>/i, '').replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, '')
  return normalise(decode(body.replace(/<[^>]+>/g, ' ')))
}
const normalise = (s) => s.replace(/\s+/g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').trim().toLowerCase()

/** Flatten nested nodes (objects with @type) so every node is checked; keeps a JSON-pointer-ish path. */
function* nodes(value, path = '$', isRoot = true) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) yield* nodes(value[i], `${path}[${i}]`, isRoot)
  } else if (value && typeof value === 'object') {
    if ('@type' in value || '@graph' in value || isRoot) yield [path, value]
    for (const [k, v] of Object.entries(value)) {
      if (k === '@context') continue
      if (v && typeof v === 'object') yield* nodes(v, `${path}.${k}`, false)
    }
  }
}

function* strings(value, path = '$') {
  if (typeof value === 'string') yield [path, value]
  else if (Array.isArray(value)) for (let i = 0; i < value.length; i++) yield* strings(value[i], `${path}[${i}]`)
  else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) yield* strings(v, `${path}.${k}`)
}

const typesOf = (node) => (Array.isArray(node['@type']) ? node['@type'] : node['@type'] ? [node['@type']] : [])
const has = (node, prop) => node[prop] !== undefined && node[prop] !== null && node[prop] !== ''

function checkNode(path, node, text, findings) {
  const types = typesOf(node)
  if (!types.length && !('@graph' in node)) {
    findings.push({ level: 'error', rule: 'type-missing', path, message: 'node has no @type' })
    return
  }
  for (const t of types) {
    if (DEPRECATED[t] && !flags.has('--allow-deprecated')) findings.push({ level: 'error', rule: 'deprecated-type', path, message: `${t}: ${DEPRECATED[t]}` })
    if (SOFT_DEPRECATED[t]) findings.push({ level: 'warn', rule: 'retired-rich-result', path, message: `${t}: ${SOFT_DEPRECATED[t]}` })
    if (LOCAL_BUSINESS_TYPES.has(t)) {
      for (const p of ['name', 'address']) if (!has(node, p)) findings.push({ level: 'error', rule: 'required-property', path, message: `${t} requires "${p}" (Google LocalBusiness docs)` })
      if (!has(node, 'areaServed') && !has(node, 'geo')) findings.push({ level: 'warn', rule: 'recommended-property', path, message: `${t}: neither areaServed nor geo set (areaServed is schema.org-only; Google lists geo as recommended)` })
    }
    if (t === 'Service') {
      for (const p of ['name', 'provider']) if (!has(node, p)) findings.push({ level: 'error', rule: 'required-property', path, message: `Service requires "${p}"` })
    }
    if (t === 'FAQPage') {
      const qs = Array.isArray(node.mainEntity) ? node.mainEntity : node.mainEntity ? [node.mainEntity] : []
      if (!qs.length) findings.push({ level: 'error', rule: 'required-property', path, message: 'FAQPage requires mainEntity[] of Question' })
      qs.forEach((q, i) => {
        const qp = `${path}.mainEntity[${i}]`
        if (!typesOf(q).includes('Question')) findings.push({ level: 'error', rule: 'required-property', path: qp, message: 'mainEntity item must be a Question' })
        if (!has(q, 'name')) findings.push({ level: 'error', rule: 'required-property', path: qp, message: 'Question requires "name"' })
        const ans = q.acceptedAnswer
        if (!ans || !has(ans, 'text')) findings.push({ level: 'error', rule: 'required-property', path: qp, message: 'Question requires acceptedAnswer.text' })
        else {
          const needle = normalise(decode(String(ans.text).replace(/<[^>]+>/g, ' '))).slice(0, 120)
          if (needle && !text.includes(needle)) findings.push({ level: 'error', rule: 'faq-not-visible', path: qp, message: `answer text not found in visible page text: "${needle.slice(0, 60)}..."` })
          const qn = normalise(String(q.name))
          if (qn && !text.includes(qn)) findings.push({ level: 'error', rule: 'faq-not-visible', path: qp, message: `question not found in visible page text: "${qn.slice(0, 60)}"` })
        }
      })
    }
    if (t === 'BreadcrumbList') {
      const items = Array.isArray(node.itemListElement) ? node.itemListElement : []
      if (!items.length) findings.push({ level: 'error', rule: 'required-property', path, message: 'BreadcrumbList requires itemListElement[]' })
      items.forEach((li, i) => {
        const lp = `${path}.itemListElement[${i}]`
        if (!typesOf(li).includes('ListItem')) findings.push({ level: 'error', rule: 'required-property', path: lp, message: 'itemListElement must be ListItem' })
        if (li.position === undefined) findings.push({ level: 'error', rule: 'required-property', path: lp, message: 'ListItem requires "position"' })
        else if (Number(li.position) !== i + 1) findings.push({ level: 'error', rule: 'breadcrumb-order', path: lp, message: `position ${li.position} should be ${i + 1}` })
        if (!has(li, 'name') && !(li.item && typeof li.item === 'object' && has(li.item, 'name'))) findings.push({ level: 'error', rule: 'required-property', path: lp, message: 'ListItem requires "name"' })
        if (!has(li, 'item') && i < items.length - 1) findings.push({ level: 'error', rule: 'required-property', path: lp, message: 'ListItem requires "item" (URL) except for the last crumb' })
      })
    }
  }
}

/**
 * Source mode for .ts/.tsx/.js/.jsx files (JSON-LD is usually built as an object and
 * JSON.stringify'd, so there is no literal block to parse). Checks only: files that mention
 * schema.org / ld+json / "@type"; deprecated @type values; placeholder string literals.
 */
function validateSource(code) {
  const findings = []
  if (!/schema\.org|ld\+json|['"]@type['"]/.test(code)) return { blocks: 0, findings }
  for (const m of code.matchAll(/['"]@type['"]\s*:\s*['"]([A-Za-z]+)['"]/g)) {
    const t = m[1]
    if (DEPRECATED[t] && !flags.has('--allow-deprecated')) findings.push({ level: 'error', rule: 'deprecated-type', path: `@type ${t}`, message: DEPRECATED[t] })
    if (SOFT_DEPRECATED[t]) findings.push({ level: 'warn', rule: 'retired-rich-result', path: `@type ${t}`, message: SOFT_DEPRECATED[t] })
  }
  const SRC_PLACEHOLDER = /TODO|FIXME|example\.(com|org|net)|lorem ipsum|\[(business|company|city|suburb|phone)[^\]]*\]|REPLACE_|your[- ](business|company)[- ]name/i
  for (const m of code.matchAll(/(["'])((?:\\.|(?!\1)[^\\\n])*)\1/g)) {
    if (SRC_PLACEHOLDER.test(m[2])) findings.push({ level: 'error', rule: 'placeholder', path: `line ${code.slice(0, m.index).split('\n').length}`, message: `suspicious literal ${JSON.stringify(m[2].slice(0, 40))}` })
  }
  return { blocks: 1, findings }
}

function validateDocument(html) {
  const findings = []
  const blocks = extractBlocks(html)
  if (!blocks.length) findings.push({ level: 'warn', rule: 'no-jsonld', path: '-', message: 'no application/ld+json block found' })
  const text = visibleText(html)
  blocks.forEach((raw, b) => {
    let data
    try {
      data = JSON.parse(raw)
    } catch (e) {
      findings.push({ level: 'error', rule: 'invalid-json', path: `block[${b}]`, message: e.message })
      return
    }
    for (const [p, s] of strings(data, `block[${b}]`)) {
      if (PLACEHOLDER.test(s) || PLACEHOLDER_TOKEN.test(s)) findings.push({ level: 'error', rule: 'placeholder', path: p, message: `suspicious value ${JSON.stringify(s.slice(0, 40))}` })
    }
    const roots = Array.isArray(data) ? data : data['@graph'] && !data['@type'] ? data['@graph'] : [data]
    roots.forEach((root, i) => {
      for (const [p, node] of nodes(root, `block[${b}]${Array.isArray(data) || data['@graph'] ? `[${i}]` : ''}`)) checkNode(p, node, text, findings)
    })
  })
  return { blocks: blocks.length, findings }
}

async function main() {
  const targets = []
  for (const src of inputs) {
    if (/^https?:\/\//.test(src)) targets.push(src)
    else targets.push(...htmlFiles(src))
  }
  const report = []
  let errors = 0
  let warns = 0
  for (const t of targets) {
    let html
    try {
      html = await loadDocument(t)
    } catch (e) {
      report.push({ source: t, blocks: 0, findings: [{ level: 'error', rule: 'unreadable', path: '-', message: e.message }] })
      errors++
      continue
    }
    const r = /\.(tsx?|jsx?|mjs)$/.test(t) ? validateSource(html) : validateDocument(html)
    errors += r.findings.filter((f) => f.level === 'error').length
    warns += r.findings.filter((f) => f.level === 'warn').length
    report.push({ source: t, ...r })
  }
  if (flags.has('--json')) {
    console.log(JSON.stringify({ errors, warnings: warns, documents: report }, null, 2))
  } else if (flags.has('--plain')) {
    for (const r of report) for (const f of r.findings) console.log(`${f.level.toUpperCase()} ${f.rule} ${r.source} ${f.path}: ${f.message}`)
    console.log(`${targets.length} document(s), ${errors} error(s), ${warns} warning(s)`)
  } else {
    const rows = report.flatMap((r) => (r.findings.length ? r.findings.map((f) => ({ source: r.source, ...f })) : flags.has('--quiet') ? [] : [{ source: r.source, level: 'ok', rule: `${r.blocks} block(s)`, path: '', message: '' }]))
    if (rows.length) console.table(rows.map((r) => ({ ...r, source: r.source.length > 48 ? '…' + r.source.slice(-47) : r.source, message: r.message.slice(0, 90) })))
    console.log(`${targets.length} document(s), ${errors} error(s), ${warns} warning(s)`)
  }
  process.exit(errors ? 1 : 0)
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  if (!inputs.length) {
    console.error('usage: node jsonld_validate.mjs <dir|file|url> [...] [--json|--plain] [--quiet] [--allow-deprecated]')
    process.exit(1)
  }
  main().catch((e) => {
    console.error(e)
    process.exit(1)
  })
}

export { validateDocument, extractBlocks, visibleText }
