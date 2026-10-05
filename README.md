# Tuta e Meia

Static premium-spotlight landing page for `tutaemeia.pt`, published with Cloudflare Pages.

The first spotlight is intentionally empty while the editorial concept is tested. The retired comparison project remains archived on GitHub. This repository intentionally contains no application code, analytics, cookies, or build step.

## Keyword Research pages

Prepared on 2026-10-05; no Google Ads integration is implemented here. The existing
award homepage and its stylesheet are unchanged. New pages have their own CSS,
no JavaScript or login, and `noindex, follow` to avoid mixing tool documentation
with the editorial search presence (this is not an access control).

The owner authorized finalization and publication on 2026-10-05. Public URLs:

- Homepage: `https://tutaemeia.pt/keyword-research/`
- Privacy: `https://tutaemeia.pt/keyword-research/privacidade/`
- Google Auth Platform app name: `Keyword Research`; authorized domain: `tutaemeia.pt`.

### Publication and activation

1. The owner selected `tutaemeia` as the public responsible-operator name and
   confirmed receipt of any email on the domain, including `contacto@tutaemeia.pt`.
   No mailbox or DNS configuration was created and no test email was sent.
   This is the owner's chosen label, not independent verification of legal status.
2. Implement and verify the approved minimal operating model below. Confirm the
   execution environment, provider/operator access, absence of output capture
   and relevant legal disclosures before activation. No API connection exists yet.
3. The final pages disclose the not-yet-operational integration and its approved
   future-use commitments. Hosting-provider logging is disclosed separately;
   no unverified provider retention period or Google approval is claimed.
4. `bash scripts/prepare-static.sh` rejects draft markers if any are introduced, before
   Cloudflare API calls in CI. Its explicit file allowlist includes nested pages
   and excludes source docs, credentials and private results.
5. A push to `main` automatically deploys. Publication was explicitly authorized;
   this does not authorize activating an integration or spending on advertising.
6. Verify both public URLs, working contact/privacy links and domain ownership in
   Search Console before submitting the identical URLs to Google. Finish brand
   verification and Basic access; Explorer alone cannot use keyword planning.
7. Before API activation, implement/test the policy commitments. The site is only
   documentation and must never receive or publish service-account keys or results.

Local preview: `python3 -m http.server 8080 --bind 127.0.0.1 --directory .`
then visit `/keyword-research/`. Use locally only: this serves repository files too.

### Current operating model: research only, no persistence (2026-10-05)

The owner's latest instruction supersedes the earlier 90-day research / 7-day
error-log retention plan. This is a requirement, not implementation evidence:

- Authenticate with the owner's service account. Restrict code to keyword-research
  calls; do not describe this as a Google-enforced keyword-only OAuth permission.
- Run on an existing owner server; keep credentials outside the site and Git.
- Process research inputs and aggregate results in memory for the active research
  session only. No result files, databases, exports, history, persistent caches,
  research backups or application logs (including errors).
- Do not transfer account data or credentials to external AI services. In
  particular, do not paste raw authenticated responses into assistant/tool logs.
- Discard temporary research data on session end; revoke service-account access
  and remove owner-managed credential copies when the integration is retired.
- Authentication configuration is separate from research persistence. Never claim
  there is no credential configuration or no Google/hosting-provider logging.

Before activation, test research-call allowlisting and no-persistence behavior on
synthetic data. Disable SDK request/error logging, telemetry, crash reports and
stdout/stderr capture of research data; check temporary files, swap/core dumps and
execution-platform history. Do not emit live results into this assistant's tool
transcript: that would create a retained copy. Select a non-recording display path
before a live run. No script or runtime changes were made in this documentation step.

Hosting check on 2026-10-05: one live Chromium visit to the award homepage returned
HTTP 200, no scripts, only same-domain requests and no browser cookies. This is
not proof of server-side logging settings or behavior for every visitor. There
were no Cloudflare credential environment variables available; dashboard-level
analytics, log export/retention and provider settings were not authenticated or
verified. The tool's no-logging requirement does not describe Cloudflare's own logs.

References: [Google homepage requirements](https://support.google.com/cloud/answer/13807376?hl=en),
[verification requirements](https://support.google.com/cloud/answer/13464321?hl=en).
