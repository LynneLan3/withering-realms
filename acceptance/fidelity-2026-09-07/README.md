# Local visual acceptance — 2026-09-07

## Servers (do not deploy)

| Role | URL | Status |
| --- | --- | --- |
| Bolt Design Authority | http://127.0.0.1:5173/ | running |
| Formal site preview | http://127.0.0.1:4323/ | running |

## Build / validate

- `npm run build` — PASS (11 pages + robots + sitemap)
- `npm run validate:generated` — PASS (8 pages)

## Fidelity notes

- Desktop/mobile homepage: Bolt layout, hero, accents, search band, and section geometry matched in screenshots under this folder.
- Article shell: Bolt chrome + sidebar preserved; body text comes from V4 generated evidence (provisional / unverified slots), not Bolt mock copy.
- Category landing uses `noindex,follow`.

## Boundaries held

- Did not modify `game-wiki-starter` or create new starter worktrees.
- Did not modify Bolt repo `Withering_Realms`.
- No commit / push / deploy.
