#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Draft privacy assertions must not reach production through an accidental push.
if grep -Rq 'data-publication-blocker' keyword-research; then
  echo 'Publication blocked: finalize and approve the Keyword Research pages first.' >&2
  exit 1
fi

# Keep internal-tool documentation unlisted on the existing public site.
if grep -q 'keyword-research' index.html 404.html; then
  echo 'Publication blocked: research pages must not be linked from the existing site.' >&2
  exit 1
fi
for page in keyword-research/index.html keyword-research/privacidade/index.html; do
  if ! grep -q '<meta name="robots" content="noindex, follow">' "$page"; then
    echo "Publication blocked: missing noindex directive in ${page}." >&2
    exit 1
  fi
done

# Explicit allowlist: never publish repository metadata, documentation or secrets.
mkdir -p .cloudflare-dist
cp index.html 404.html styles.css favicon.svg .cloudflare-dist/
mkdir -p .cloudflare-dist/keyword-research/privacidade
cp keyword-research/index.html keyword-research/research.css .cloudflare-dist/keyword-research/
cp keyword-research/privacidade/index.html .cloudflare-dist/keyword-research/privacidade/
