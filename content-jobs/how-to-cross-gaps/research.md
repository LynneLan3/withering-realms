# How to Cross Gaps — APIMart page-package brief

- Slug: `how-to-cross-gaps`
- Canonical URL: `/how-to-cross-gaps/`
- Action: UPDATE_PAGE (Media Gate PASS — wire grappling hook intent + EA frames)
- Research checked: 2026-09-07
- Early Access actual Steam release: 2026-09-04
- Current official patch page latest: 0.34
- Publish status: publishable after Writer
- Media gate: PASS (4 functional EA frames; crossing-result still MISSING)

## Intent Brief

```json
{
  "intentOwnerStatus": "KEEP",
  "primaryQuery": "withering realms grappling hook",
  "userJob": "Unlock the Chain Hook traversal tool that lets you cross pits after the cemetery Chain Giant fight",
  "serpPromise": "Current Early Access progression from Ichorised Chain reward to Rakesh Chain Hook (grappling hook) for crossing pits"
}
```

Secondary queries to cover in Title/Meta/FAQ without creating a duplicate page: `withering realms how to cross gaps`, `withering realms grappling hook`, `withering realms chain hook`.

## Must Include Facts

### CONFIRMED_LIVE (Jerma EA VOD Part 2 — `k3croypZQXA`)

- Cemetery boss fight enemy name on HUD: **Chain Giant** (timestamp ~00:31:05–00:33:10).
- After the fight, reward popup: **You found... Ichorised Chain** — Crafting Material (timestamp **00:33:14**). Exact on-screen spelling: **Ichorised Chain**.
- Reward description (on-screen): "A rare length of chain unearthed deep within a mine. Having been saturated in ichor for many years, it is remarkably strong and light." / "In the right hands, several powerful tools could be fashioned from it."
- Doll craftsman NPC name on dialogue/UI: **Rakesh** (timestamp **00:34:33**). Dialogue: "So, you have found a length of Ichorised Chain." Doll body is on his workbench.
- Finished traversal tool sold/crafted at Rakesh: **Chain Hook** — Tool (Doll Left Hand), cost **£1** (timestamp **00:35:24**).
- Chain Hook on-screen description (exact): "A length of ichorised chain tipped with a weighted dagger. Can be cast into wooden pilings to cross pits, or into enemies to close the distance quickly."
- Controls shown: "+Left Trigger Throw hook (Dexterity/Precision)"; stats shown: 5 physical | 15 poise; 8 stamina toll.
- Player vernacular: streamer calls it a "hook shot" / grappling-hook-like tool. Public page should map **grappling hook** search intent to the official **Chain Hook** name without inventing a second page.

### Preserved progression chain (do not drop)

Defeat cemetery creature → claim chain reward → take to Doll worker → receive traversal tool → use tool to cross blocked gap/pits.

Update naming from neutral placeholders to verified on-screen names where confirmed above.

### Baseline

- Early Access Steam release: 2026-09-04 (CONFIRMED_OFFICIAL).
- Research checked: 2026-09-07; latest official patch page observed: 0.34.
- Media sources (no other web research): Jerma Stream Archive — `Jerma Streams - Withering Realms (Part 2)` https://www.youtube.com/watch?v=k3croypZQXA

## Forbidden Claims

- Do not invent an alternate official name beyond on-screen **Ichorised Chain** / **Chain Hook**.
- Do not claim an in-VOD clip of the player actually swinging across a pit was found — **crossing-result remains MISSING**.
- Do not invent crafting recipe amounts beyond the shown £1 purchase price for Chain Hook.
- Do not invent boss phases for Chain Giant.
- Do not claim Steam Achievement mapping.
- Do not create a separate grappling-hook page.

## Required structure

1. Quick Answer — Chain Giant → Ichorised Chain → Rakesh → Chain Hook (grappling hook) → cross pits.
2. Step-by-step progression using only confirmed facts above.
3. Naming note — official Chain Hook / Ichorised Chain vs grappling-hook search wording.
4. If This Didn't Work — missing reward, cannot purchase/craft, still blocked; keep provisional where needed.
5. Verification / source block — CONFIRMED_LIVE VOD timestamps; research date; patch 0.34.
6. FAQ — grappling hook = Chain Hook?; where to bring Ichorised Chain; what Chain Hook does; naming.
7. Related Guides — `/doll-arms-limb-leveling/`, `/birdcage-b2-puzzle/`, `/bellflower-institute-stuck-first-floor/`, `/early-bosses/`.

## Visual Assets

- Asset ID: cemetery-creature
- Local asset path: public/assets/images/evidence/how-to-cross-gaps/cemetery-creature.webp
- Shows / evidence: Chain Giant fight in cemetery
- Intended section: cemetery-creature
- Evidence status: READY
- Source page: Jerma Part 2 k3croypZQXA @ 00:31:05

- Asset ID: reward-tooltip
- Local asset path: public/assets/images/evidence/how-to-cross-gaps/reward-tooltip.webp
- Shows / evidence: You found Ichorised Chain
- Intended section: reward-tooltip
- Evidence status: READY
- Source page: Part 2 @ 00:33:14

- Asset ID: doll-craftsman
- Local asset path: public/assets/images/evidence/how-to-cross-gaps/doll-craftsman.webp
- Shows / evidence: Rakesh + doll workbench
- Intended section: doll-craftsman
- Evidence status: READY
- Source page: Part 2 @ 00:34:33

- Asset ID: finished-traversal-tool
- Local asset path: public/assets/images/evidence/how-to-cross-gaps/finished-traversal-tool.webp
- Shows / evidence: Chain Hook tool UI / cross pits text
- Intended section: finished-traversal-tool
- Evidence status: READY
- Source page: Part 2 @ 00:35:24

## Media slots (Writer)

- Keep MISSING slots as italic MEDIA_SLOT captions only; do not invent that screenshots exist for blocked-gap or crossing-result.
- Prefer italic MEDIA_SLOT tokens (`*MEDIA_SLOT:cemetery-creature*`) over Markdown image embeds for this site.
- Do not emit `![...](/assets/...)` paths.

## Title / Meta direction

- Title direction: `Withering Realms Grappling Hook / How to Cross Gaps (Chain Hook)`
- Meta direction: Current Early Access route from the cemetery Chain Giant’s Ichorised Chain reward to Rakesh’s Chain Hook traversal tool for crossing pits.
