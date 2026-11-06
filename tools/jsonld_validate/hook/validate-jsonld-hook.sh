#!/usr/bin/env bash
# Claude Code PostToolUse hook: validate JSON-LD in the file Claude just edited.
#
# Claude Code pipes the hook event as JSON on stdin (fields include tool_name and
# tool_input.file_path). The placeholder ${tool_input.file_path} is NOT expanded in a
# command hook's args (it is only substituted in mcp_tool hooks), so this script reads stdin.
#
# Exit 2 => Claude sees stderr as a blocking error message (the edit has already happened on
# PostToolUse, so this is feedback, not prevention). Exit 0 => silent success. Any other exit
# code is a non-blocking error that does not reach Claude.
set -u
INPUT=$(cat)
FILE=$(printf '%s' "$INPUT" | node -e '
  let s = "";
  process.stdin.on("data", (d) => (s += d));
  process.stdin.on("end", () => {
    try { const j = JSON.parse(s); process.stdout.write(j.tool_input?.file_path ?? ""); } catch { process.stdout.write(""); }
  });
')
case "$FILE" in
  *.tsx|*.ts|*.jsx|*.js|*.html|*.htm) ;;
  *) exit 0 ;;  # not a file this hook cares about
esac
[ -f "$FILE" ] || exit 0
HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
VALIDATOR="${JSONLD_VALIDATOR:-$HERE/../jsonld_validate.mjs}"
OUT=$(node "$VALIDATOR" "$FILE" --plain 2>&1)
STATUS=$?
if [ "$STATUS" -ne 0 ]; then
  printf 'JSON-LD validation failed for %s:\n%s\n' "$FILE" "$OUT" >&2
  exit 2
fi
exit 0
