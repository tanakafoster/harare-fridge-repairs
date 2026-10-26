// Renders the favicon, app icons, square logo and social share image from the
// snowflake logo. Run once with Playwright available: `node scripts/render-assets.mjs`.
import { createRequire } from "node:module"
const { chromium } = createRequire(import.meta.url)("playwright")
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const out = path.join(root, "public")
await mkdir(out, { recursive: true })

const blue = "#0632AF"
const snowflake =
  "M32.00 32.00L32.00 5.00M32.00 16.88L38.49 10.39M32.00 16.88L25.51 10.39M32.00 32.00L8.62 18.50M18.91 24.44L16.53 15.57M18.91 24.44L10.04 26.82M32.00 32.00L8.62 45.50M18.91 39.56L10.04 37.18M18.91 39.56L16.53 48.43M32.00 32.00L32.00 59.00M32.00 47.12L25.51 53.61M32.00 47.12L38.49 53.61M32.00 32.00L55.38 45.50M45.09 39.56L47.47 48.43M45.09 39.56L53.96 37.18M32.00 32.00L55.38 18.50M45.09 24.44L53.96 26.82M45.09 24.44L47.47 15.57"

const flake = (color, stroke = 3.4) =>
  `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${snowflake}" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round"/></svg>`

// Static SVG favicon: blue rounded square, white snowflake.
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${blue}"/><g transform="translate(8 8) scale(0.75)"><path d="${snowflake}" stroke="#fff" stroke-width="4.2" stroke-linecap="round" fill="none"/></g></svg>`
await writeFile(path.join(out, "icon.svg"), iconSvg)

const fontLink = `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">`
const base = `<meta charset="utf-8">${fontLink}<style>*{margin:0;box-sizing:border-box}body{font-family:Poppins,"Segoe UI",Arial,sans-serif;-webkit-font-smoothing:antialiased}</style>`

const iconHtml = (size) => `${base}<body style="width:${size}px;height:${size}px;background:${blue};border-radius:${Math.round(size * 0.22)}px;display:grid;place-items:center"><div style="width:${Math.round(size * 0.74)}px;height:${Math.round(size * 0.74)}px">${flake("#fff", 4.2)}</div></body>`

const logoSquareHtml = `${base}<body style="width:512px;height:512px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:${blue}"><div style="width:230px;height:230px">${flake(blue, 3.6)}</div><div style="text-align:center;line-height:1.05"><div style="font-weight:800;font-size:44px;letter-spacing:0.02em">HARARE</div><div style="font-weight:800;font-size:44px;letter-spacing:0.02em">FRIDGE REPAIRS</div><div style="margin-top:12px;font-weight:600;font-size:15px;letter-spacing:0.17em;color:#4b5a86">REPAIRS &amp; REGAS ACROSS HARARE</div></div></body>`

const ogHtml = `${base}<body style="width:1200px;height:630px;background:linear-gradient(135deg,#04237d 0%,${blue} 55%,#264cb9 100%);color:#fff;display:flex;align-items:center;padding:0 90px;gap:70px;position:relative;overflow:hidden">
<div style="position:absolute;right:-120px;top:-140px;width:620px;height:620px;opacity:0.08">${flake("#fff", 2.4)}</div>
<div style="width:250px;height:250px;flex:none">${flake("#fff", 3.4)}</div>
<div style="position:relative">
<div style="font-weight:800;font-size:66px;line-height:1.02;letter-spacing:0.01em">HARARE<br>FRIDGE REPAIRS</div>
<div style="margin-top:18px;font-weight:600;font-size:22px;letter-spacing:0.18em;opacity:0.9">REPAIRS &amp; REGAS ACROSS HARARE</div>
<div style="margin-top:42px;display:flex;gap:16px;flex-wrap:wrap;font-weight:600;font-size:24px">
<span style="background:rgba(255,255,255,0.14);padding:10px 20px;border-radius:999px">Open 24/7</span>
<span style="background:rgba(255,255,255,0.14);padding:10px 20px;border-radius:999px">Mobile across Harare</span>
<span style="background:#fff;color:${blue};padding:10px 22px;border-radius:999px">0782 886 252</span>
</div>
<div style="margin-top:30px;font-size:22px;opacity:0.85">hararefridgerepairs.co.zw</div>
</div></body>`

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: 1 })

async function shoot(html, width, height, file, { transparent = false } = {}) {
  await page.setViewportSize({ width, height })
  await page.setContent(html, { waitUntil: "networkidle" })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: path.join(out, file), omitBackground: transparent, clip: { x: 0, y: 0, width, height } })
  console.log("wrote", file)
}

await shoot(iconHtml(512), 512, 512, "icon-512.png", { transparent: true })
await shoot(iconHtml(192), 192, 192, "icon-192.png", { transparent: true })
await shoot(iconHtml(180).replace(`border-radius:${Math.round(180 * 0.22)}px;`, ""), 180, 180, "apple-touch-icon.png")
await shoot(iconHtml(64), 64, 64, "favicon-64.png", { transparent: true })
await shoot(logoSquareHtml, 512, 512, "logo-square.png")
await shoot(ogHtml, 1200, 630, "og-image.png")
await browser.close()
