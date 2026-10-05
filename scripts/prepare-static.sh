#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

# Draft privacy assertions must not reach production through an accidental push.
if grep -Rq 'data-publication-blocker' keyword-research; then
  echo 'Publication blocked: finalize and approve the Keyword Research pages first.' >&2
  exit 1
fi

# Explicit allowlist: never publish repository metadata, documentation or secrets.
mkdir -p .cloudflare-dist
cp index.html 404.html styles.css favicon.svg .cloudflare-dist/
mkdir -p .cloudflare-dist/keyword-research/privacidade
cp keyword-research/index.html keyword-research/research.css .cloudflare-dist/keyword-research/
cp keyword-research/privacidade/index.html .cloudflare-dist/keyword-research/privacidade/
