# jsonld_validate — JSON-LD checks for built Next.js HTML, URLs and source files, plus a Claude Code hook

## Purpose
Catch the structured-data mistakes a generator can make before they ship: invalid JSON, template
placeholders, missing `@type`, missing required properties for the types this site uses, retired
rich-result types, and FAQ markup that does not match the visible page text. It runs in CI over
`.next/server/app/**/*.html` (see `../ci_workflow/`) and as a `PostToolUse` hook on the file Claude just edited.

## Dependencies
Node >= 18 (tested on Node 22.23.4). **No npm packages** — the registry was unreachable in this sandbox
and nothing beyond regex + `JSON.parse` is needed for these checks. It is deliberately not a schema.org
vocabulary validator; for that, run the Rich Results Test / Schema Markup Validator manually.

## Usage
```
node jsonld_validate.mjs <dir|file|url> [...] [--json|--plain] [--quiet] [--allow-deprecated]
```
* Directory inputs are walked recursively for `.html` (and `.ts/.tsx/.js/.jsx` in source mode); `_*` and `api`
  folders are skipped, which matches `.next/server/app` layout.
* `http(s)://` inputs are fetched with Node's `fetch` (server-rendered HTML only; no JS execution).
* `--json` prints `{errors, warnings, documents[{source, blocks, findings[{level, rule, path, message}]}]}`.
* `--plain` prints one line per finding (used by the hook). `--quiet` hides "ok" rows.
* `--allow-deprecated` downgrades the HowTo error (e.g. if the markup is kept for non-Google consumers).
* Exit code 1 when any error exists (warnings alone exit 0); unreadable inputs count as errors.

### Rules
| rule | level | check |
|---|---|---|
| `invalid-json` | error | block does not parse |
| `placeholder` | error | any string matching `TODO`, `FIXME`, `example.com/org/net`, `lorem ipsum`, `{{`/`}}`, `[Business Name]`-style brackets, `REPLACE_`, `xxx-xxx`, `N/A`, `your-business-name`, or an empty string |
| `type-missing` | error | a root node (or `@graph` member) without `@type` |
| `required-property` | error | `LocalBusiness` + listed subtypes: `name`, `address` (Google's LocalBusiness doc marks both required; research note 08 line 110). `Service`: `name`, `provider`. `FAQPage`: `mainEntity[]` of `Question` with `name` and `acceptedAnswer.text`. `BreadcrumbList`: `itemListElement[]` of `ListItem` with `position`, `name`, and `item` on all but the last crumb |
| `recommended-property` | warn | LocalBusiness without `areaServed` or `geo` (Google lists `geo` as recommended and does not document `areaServed`; note 06 line 303) |
| `breadcrumb-order` | error | `position` values are not 1..n in order |
| `deprecated-type` | error | `HowTo` (rich results removed 2023-09-14, note 08 line 344) |
| `retired-rich-result` | warn | `FAQPage` (FAQ rich results stopped 2026-05-07, docs removed 2026-06-15, note 08 line 345). Kept as a warning because Google says unused structured data does no harm |
| `faq-not-visible` | error | the first 120 normalised characters of each answer, and the question text, must appear in the page's visible text (head/script/style stripped, whitespace collapsed, case-insensitive) |
| `no-jsonld` | warn | document has no block at all |

Source mode (`.ts/.tsx/.js/.jsx`): the user's site builds JSON-LD objects and `JSON.stringify`s them
(`components/json-ld.tsx`), so there is no literal block to parse in source. For those files the script only
flags deprecated `'@type': 'X'` literals and placeholder string literals; the full checks run on built HTML.

## Hook (`hook/`)
* `hooks.json` — plugin-style hook file; `settings.example.json` — the same block for a project `.claude/settings.json`.
  Shape (`hooks.PostToolUse[].matcher`, `hooks[].type: "command"`, `command`, `timeout`) and the semantics
  used (exit 2 => stderr shown to Claude as a blocking error; the edit has already happened on PostToolUse;
  hook input JSON on stdin with `tool_name` and `tool_input.file_path`; `${CLAUDE_PROJECT_DIR}` available)
  are the ones recorded in research notes 03 (line 141), 01 (line 276) and 09 (lines 94–101). The notes also record that
  `${tool_input.file_path}` is only substituted in `mcp_tool` hooks' `input` field, **not** in a command's args —
  so the wrapper reads the file path from stdin instead of relying on that placeholder (the claude-seo plugin's
  hook, which relies on it, has open issues about false positives/paths).
* `validate-jsonld-hook.sh` — reads the hook JSON from stdin, exits 0 for files other than `.tsx/.ts/.jsx/.js/.html`,
  runs the validator with `--plain`, and exits 2 with the findings on stderr when there are errors.
  Set `JSONLD_VALIDATOR` to point at the script if the folder layout differs from `tools/jsonld_validate/`.
* Timeout 30 s is far above the ~50 ms run time.

## How it was tested
```
cd /home/claude/reports/code/jsonld_validate
node jsonld_validate.mjs fixtures/valid          # 1 document, 0 errors, 1 warning (FAQPage retired) -> exit 0
node jsonld_validate.mjs fixtures/placeholders   # 8 errors -> exit 1:
#   placeholder block[0].name "[Business Name]"; block[0].url "https://example.com/"; block[0].telephone "";
#   block[0].address.addressLocality "TODO"; block[1].description "Lorem ipsum ... {{description";
#   required-property block[1] Service requires "provider"; deprecated-type block[2] HowTo; invalid-json block[3]
node jsonld_validate.mjs fixtures/mismatch       # 4 errors -> exit 1:
#   faq-not-visible mainEntity[1] (schema says 24-month warranty, page says 6-month);
#   required-property mainEntity[2] (no acceptedAnswer); breadcrumb-order position 3 should be 2; type-missing block[2]
node jsonld_validate.mjs fixtures/source-sample.tsx   # deprecated-type HowTo + placeholder "[Business Name]" -> exit 1
node jsonld_validate.mjs /home/claude/proservice-generator-repairs/components/{json-ld,faq-schema,breadcrumbs}.tsx \
     /home/claude/proservice-generator-repairs/lib/schema.ts   # read-only scan of the real repo: 0 errors, 1 warning (FAQPage)
printf '{"tool_name":"Edit","tool_input":{"file_path":"<fixtures/placeholders/service-page.html>"}}' | bash hook/validate-jsonld-hook.sh   # exit 2 with findings on stderr
printf '{"tool_name":"Write","tool_input":{"file_path":"<fixtures/valid/...html>"}}' | bash hook/validate-jsonld-hook.sh        # exit 0
printf '{"tool_name":"Write","tool_input":{"file_path":"/tmp/notes.md"}}' | bash hook/validate-jsonld-hook.sh                     # exit 0 (ignored type)
printf 'not json' | bash hook/validate-jsonld-hook.sh                                                                              # exit 0 (bad input never blocks)
python3 -c "import json; json.load(open('hook/hooks.json')); json.load(open('hook/settings.example.json'))"                       # OK
```
A bug found during testing: the first version did not flag a root block without `@type` because the "root" test
compared the path string to `$`; fixed by passing an explicit `isRoot` flag (the `type-missing` case in
`fixtures/mismatch` now fails as intended).

## Limitations
* Heuristic placeholder regex: a legitimate value containing "N/A" or a bracketed word will be flagged; adjust
  `PLACEHOLDER` for your copy.
* Required-property rules cover only the four types the user's site emits; other types pass with just the `@type` check.
* The visible-text match is substring-based on the first 120 characters of each answer; answers rendered by
  client-side JS, or truncated in an accordion, will fail on prerendered HTML (which is the point for Google,
  but may be a false positive for progressively enhanced pages).
* The repo's HTML could not be built here (no `node_modules`, no npm access), so the built-output path was
  tested on hand-written fixtures that mimic Next.js output, not on `.next/server/app`.
* Hook semantics (field names, exit codes) are as documented in the research notes as of 2026-10-26; the hook
  was tested by piping a simulated hook JSON into it, not inside a live Claude Code session.
