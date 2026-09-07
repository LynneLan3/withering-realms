# Birdcage / B2 Puzzle — APIMart page-package brief

- Slug: `birdcage-b2-puzzle`
- Canonical URL: `/birdcage-b2-puzzle/`
- Action: UPDATE_PAGE (publish now)
- Research checked: 2026-09-07
- Early Access actual Steam release: 2026-09-04
- Current official patch page latest: 0.34
- Publish status: publishable

## Intent Brief

```json
{
  "intentOwnerStatus": "KEEP",
  "primaryQuery": "withering realms birdcage puzzle B2",
  "userJob": "Decode speaker codes like A1/B2 and complete the hanging-target room without wasting attempts",
  "serpPromise": "Current Early Access A/B code rule, hit counts, and Four Arms troubleshooting"
}
```

## Must Include Facts

Evidence grades use exactly these labels: CONFIRMED_LIVE | PLAYER_REPORTED | NEEDS_VERIFICATION | CONFIRMED_OFFICIAL | DEMO_ONLY.

### CONFIRMED_LIVE (current Early Access build observations)

- The player enters a room with two hanging targets and speaker codes such as A1 / B2.
- A = right-side target.
- B = left-side target.
- The number = number of hits required.
- A1 = hit the right target once.
- B2 = hit the left target twice.
- A3 / B3 follow the same count rule.
- Fast / light attacks are the safest observed input for registering hits cleanly.

### PLAYER_REPORTED (not an official bug confirmation)

- The Four Arms talisman may generate an extra counted hit.
- A player reported the puzzle stopped returning Incorrect after unequipping Four Arms.
- Do not present Four Arms as an officially confirmed bug. Keep language as player-reported current-build issue.

### Baseline context (CONFIRMED_OFFICIAL where noted)

- Game: Withering Realms by Moonless Formless.
- Early Access Steam release: 2026-09-04 (CONFIRMED_OFFICIAL / store identity).
- Research checked against current EA window: 2026-09-07; latest official patch page observed: 0.34.

## Forbidden Claims

- Do not invent a full speaker script, bell sequence, or room-by-room route beyond the A/B hit rule above.
- Do not invent target HP, damage numbers, required weapons, or a guaranteed “best” arm.
- Do not label Four Arms as an official bug, patch-fixed issue, or developer-confirmed defect.
- Do not invent screenshots, map coordinates, or NPC dialogue for this puzzle.
- Do not invent patch changelogs that mention Birdcage.

## Required structure

1. Quick Answer — state the A/B + hit-count rule first.
2. A/B diagram — text diagram is enough (Right = A, Left = B; number = hits).
3. Code examples — A1, B2, A3/B3 using the same rule.
4. Step-by-step — enter room → read speaker code → map letter to side → apply hit count → prefer fast/light attacks.
5. Four Arms troubleshooting — PLAYER_REPORTED only; unequip and retest language.
6. If This Didn't Work — reload/retry framing; patch-sensitive EA caveat; do not invent alternate solutions.
7. Verification / source block — list evidence grades used; note research date 2026-09-07 and patch page 0.34.
8. FAQ — 3–5 practical questions from the facts only.
9. Related Guides — link `/how-to-cross-gaps/`, `/talismans/`, `/doll-arms-limb-leveling/` when useful.

## Media slots (do not invent images)

Leave markdown image placeholders only as captions naming the needed slot; do not claim the image exists in-repo:

- MEDIA_SLOT:birdcage
- MEDIA_SLOT:room-overview
- MEDIA_SLOT:a-right-target
- MEDIA_SLOT:b-left-target
- MEDIA_SLOT:successful-state
- MEDIA_SLOT:four-arms-talisman

## Title / Meta direction

- Title direction: `Withering Realms Birdcage / B2 Puzzle — A/B Code Guide`
- Meta direction: Decode A1/B2 speaker codes: A is right, B is left, numbers are hit counts; includes Four Arms troubleshooting for the current Early Access build.
