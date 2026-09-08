# Williams House Clock Puzzle — Research Checkpoint (NO WRITER)

- Slug: `williams-house-clock-puzzle`
- Research window: 2026-09-08
- Publish state: **RESEARCH_REQUIRED / SOURCE_EXHAUSTED**
- Evidence Gate: **FAIL**
- Media Gate: **MISSING**
- Writer / page body: **NOT ENTERED** (do not guess solution)

## Routing Receipt (content)

```text
CONTENT ROUTING
Site lifecycle: PUBLISHED / PRODUCTION (existing)
Content stage: LAUNCH
Intent: PUZZLE_STUCK / QUEST_PROGRESSION
Article class: PREMIUM_PROBLEM_SOLVING
Evidence gate: FAIL
Media gate: MISSING
Writer: BLOCKED
Publish state: RESEARCH_REQUIRED
Source status: SOURCE_EXHAUSTED (operator-specified EA VODs)
Reason: Neither Jerma Parts 1–2 nor Ecdycis 2026-09-06 long EA VOD visually confirms Williams House clock puzzle (location + clue + interaction + solution). No Writer.
```

## Operator-specified sources (exhausted)

### A) Jerma Streams (excluded from further scanning after prior pass)
- Part 1 `z9pL-sUiZkA` (06:46:01) — post-Institute `05:50–end` no Williams House clock
- Part 2 `k3croypZQXA` (06:11:34) — after Chain Hook no Williams House clock
- False lead: Institute underground **Mostyn House** note (~`04:05:59`), not Williams Clock

### B) Twitch — Ecdycis (this pass; Jerma not re-scanned)
- Channel: `Ecdycis`
- Exact title match: **Withering Realms is an Indie Horror Game That Somehow Combines Clock Tower and Souls Games !vods !Merch**
- VOD URL: `https://www.twitch.tv/videos/2866664686`
- Twitch duration shown: **11:41:00** (operator note ~11h35m)
- Date marker on channel Videos: **前天** relative to 2026-09-08 research day → aligns with **2026-09-06**
- Method: Twitch Videos → select by date/title → in-player seek only (no download; no web guides)

## Ecdycis seek process (CONFIRMED_LIVE process)

1. Coarse latter-half seek ~25 min (`05:00` → `11:35`)
2. Dense manor window ~2 min (`08:55` → `09:58`) after ornate interior spotted ~`09:00–09:20`
3. Additional full-stream coarse ~30 min samples (early/mid/late)
4. Chat GQL keyword scan across VOD (positioning only; not treated as fact)
5. Visual confirmation required for any candidate; ASR/chat alone not accepted

## What was found (not Williams Clock)

| Timestamp (VOD) | Observation | Grade |
| --- | --- | --- |
| ~`09:00–09:20` | Ornate manor combat (Living Armor / checkered floors) | CONFIRMED_LIVE as manor combat |
| ~`09:12` | Bestiary: **Entrance Hall Armour** / **Jasper Penhaligon** manor text | CONFIRMED_LIVE → **Penhaligon Manor**, not Williams |
| ~`09:28` | Map title **Hedge Maze** (Penhaligon approach) | CONFIRMED_LIVE |
| ~`10:00` | Back in **Penwyll** town (Reliable Repairs) | CONFIRMED_LIVE |
| ~`11:15` | Quest banner **Beynon House** kitchen (“Sweetmeat’s Ingredients”) | CONFIRMED_LIVE |
| Chat whole-VOD | No `Williams House` / grandfather-clock / All-Seeing Eye / clock-puzzle talk (only Clock Tower genre + “ash williams” joke) | CONFIRMED_LIVE (negative chat evidence) |

## Williams House Clock — required claims

All remain **unconfirmed** on exhausted sources:

- Clock puzzle location inside Williams House
- How the clock is operated
- Where the clue is / what it shows
- Randomization yes/no
- Correct hand/time input
- Clue → answer derivation
- Success / reward / progression

## Exact solution

**NOT FOUND.**  
**SOURCE_EXHAUSTED** for operator-specified Jerma + Ecdycis EA VODs.

## Evidence frames retained (supporting / negative)

Under `ecdycis-evidence/`:

- `00-vod-title.png` — exact title VOD open
- `09h12-penhaligon-bestiary.png` — Penhaligon manor false-lead identity
- `09h28-hedge-maze-map.png` / or nearby manor still — hedge maze / manor progression
- `11h15-beynon-house-quest.png` — late Beynon House (not Williams)

Jerma Mostyn false-lead frames remain in this folder from prior pass.

## Decision

- Evidence Gate = **FAIL**
- Publish state = **RESEARCH_REQUIRED**
- Source status = **SOURCE_EXHAUSTED**
- Shared Article Writer = **do not run**
- Do not invent clock times / hand positions
- Next research requires a **new operator-specified** EA source that actually reaches Williams House clock on camera
