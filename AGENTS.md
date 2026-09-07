# AGENTS.md — Withering Realms

Canonical rules live in `/Users/lanling/Code/ai-work-rules/`.

Load `AI_RULES.md`, the core rules, `AI_PROJECT_RULES.md`, the generated-hotword-sites and hotword-sites overlays, the applicable workflow, and the current Research Packet before changing this repository.

Repository identity: LynneLan3/withering-realms
site_id: withering-realms
steam_app_id: 3441990

Run `npm run site:generate -- --spec site-spec.yaml` after changing inputs and `npm run validate:generated` after generation.

## Standard production completion (always)

Git push / `vercel --prod` alone is **not** completion. For Production:

1. Fill product-acceptance checklist (`hotword-control-center/records/product-acceptance/`)
2. Write `hotword-publish-receipt-v1` under Control Center `records/publish-receipts/`
3. Update registry identity when Vercel/GitHub facts change
4. Run `npm run publish:production -- --receipt <receipt.json>`
   - build + validate
   - deploy:production
   - production HTTP/canonical verify
   - IndexNow (if enabled)
   - **Experiment Ledger** writeback
5. Run site-identity consistency check when registry/runtime rows change

Target result: `PUBLISH_COMPLETE` (or repair Ledger only if `PRODUCTION_LIVE_LEDGER_INCOMPLETE`).
