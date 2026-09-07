# Bellflower Institute Stuck First Floor — APIMart page-package brief

- Slug: `bellflower-institute-stuck-first-floor`
- Canonical URL: `/bellflower-institute-stuck-first-floor/`
- Action: CREATE_PAGE (Media Gate PASS)
- Research checked: 2026-09-07
- Early Access actual Steam release: 2026-09-04
- Current official patch page latest: 0.34
- Publish status: publishable after Writer
- Media gate: PASS (ghost-hands door, climb exit, foyer rear stairs, Upper progression)

## Intent Brief

```json
{
  "intentOwnerStatus": "KEEP",
  "primaryQuery": "withering realms bellflower institute stuck first floor",
  "userJob": "Escape the first-floor corridor dead-end (gap / ghost-hands door) by returning to the foyer rear stairs",
  "serpPromise": "Verified Early Access fix: leave the blocked corridor, return to the foyer, use the unmarked rear stairs up/down",
  "secondaryIntents": [
    {
      "query": "withering realms institute code words",
      "action": "SPLIT"
    },
    {
      "query": "withering realms institute basement door",
      "action": "SPLIT"
    }
  ]
}
```

## Must Include Facts

### Verified player answer (do not weaken)

- Players get stuck in the Bellflower Institute first-floor corridor at a **gap** and/or a **ghost-hands door**.
- The correct route is **go back to the foyer**.
- At the **rear of the foyer** there is a vertical exit usable **up and down** (on-screen climb / wooden stairs).
- These vertical exits are **not marked on the in-game map**.
- Keep this page separate from Institute Code Words / basement door puzzles. Do not merge.

### CONFIRMED_LIVE (Jerma EA VOD Part 1 — `z9pL-sUiZkA`)

- Location banner: **Bellflower Occult Institute** / **Bellflower Occult Institute - Upper**.
- Ghost-hands door on a corridor door with **Open (A)** prompt; glowing hands on the door (timestamp **03:47:20**; earlier related sighting ~**03:00:30**).
- Rear vertical transit with **Climb Up (A)** / **Climb Down (A)** prompts near foyer/corridor transition (timestamp **03:47:30–03:47:34**).
- Wooden staircase at foyer rear with location banner still Bellflower Occult Institute; mini-map shows foyer room without a stair icon (timestamp **03:47:54**).
- After ascending, location banner becomes **Bellflower Occult Institute - Upper** (timestamp **03:47:38** area / post-climb progression).
- Mini-map in these frames shows corridor/foyer geometry but does not mark the stair/climb exit as a labeled map icon.

### Baseline

- Early Access Steam release: 2026-09-04 (CONFIRMED_OFFICIAL).
- Research checked: 2026-09-07; latest official patch page observed: 0.34.
- Media sources (no other web research): Jerma Stream Archive — `Jerma Streams - Withering Realms` https://www.youtube.com/watch?v=z9pL-sUiZkA

## Forbidden Claims

- Do not merge with Institute Code Words / basement bathroom code / book-order puzzle.
- Do not invent map coordinates or claim stairs appear as labeled icons on the mini-map.
- Do not invent alternate exits beyond foyer rear climb/stairs shown.
- Do not invent enemy names for the ghost-hands door beyond what is visible (ghostly hands on door).
- Do not invent Williams Clock / Abandoned Apartment / Dream Rescue content.

## Required structure

1. Quick Answer — stuck at gap/ghost-hands corridor → return to foyer → use unmarked rear stairs/climb up or down.
2. What the stuck state looks like.
3. Exact steps back to foyer rear exit.
4. Common failure — searching the corridor for a forward path / treating map as complete.
5. What happens next — Upper (or lower) progression after using the rear exit.
6. Troubleshooting.
7. Related Guides — `/how-to-cross-gaps/`, `/birdcage-b2-puzzle/`, `/doll-arms-limb-leveling/` (do **not** link Institute Code Words as the same problem).
8. FAQ — why map doesn’t show it; is this the code/basement puzzle? (No.)

## Visual Assets

- Asset ID: ghost-hands-door
- Local asset path: public/assets/images/evidence/bellflower-institute-stuck-first-floor/ghost-hands-door.webp
- Shows / evidence: Ghost-hands door stuck state with Open (A)
- Intended section: stuck-state
- Evidence status: READY
- Source page: Jerma Part 1 z9pL-sUiZkA @ 03:47:20

- Asset ID: climb-up-exit
- Local asset path: public/assets/images/evidence/bellflower-institute-stuck-first-floor/climb-up-exit.webp
- Shows / evidence: Climb Up (A) exit + location banner
- Intended section: rear-exit
- Evidence status: READY
- Source page: Part 1 @ 03:47:34

- Asset ID: foyer-rear-stairs
- Local asset path: public/assets/images/evidence/bellflower-institute-stuck-first-floor/foyer-rear-stairs.webp
- Shows / evidence: Wooden rear stairs; mini-map lacks stair icon
- Intended section: foyer-stairs
- Evidence status: READY
- Source page: Part 1 @ 03:47:54

- Asset ID: upper-progression
- Local asset path: public/assets/images/evidence/bellflower-institute-stuck-first-floor/upper-progression.webp
- Shows / evidence: Bellflower Occult Institute - Upper after climb
- Intended section: progression
- Evidence status: READY
- Source page: Part 1 @ 03:47:38

- Asset ID: ghost-hands-early
- Local asset path: public/assets/images/evidence/bellflower-institute-stuck-first-floor/ghost-hands-early.webp
- Shows / evidence: Earlier ghost-hands door sighting (supporting)
- Intended section: supporting
- Evidence status: READY
- Source page: Part 1 @ 03:00:30

Site media wiring uses italic MEDIA_SLOT tokens for these IDs. Prefer `*MEDIA_SLOT:ghost-hands-door*` style placeholders over Markdown image embeds.

## Title / Meta direction

- Title direction: `Withering Realms Bellflower Institute Stuck on First Floor`
- Meta direction: If the first-floor corridor ends in a gap or ghost-hands door, return to the foyer and use the unmarked rear stairs.
