# Williams House Clock Puzzle — Research Checkpoint (NO WRITER)

- Slug: `williams-house-clock-puzzle`
- Research window: 2026-09-08
- Sources only (operator-specified EA VODs; no web guide research):
  - Jerma Streams - Withering Realms Part 1 — `z9pL-sUiZkA` (06:46:01)
  - Jerma Streams - Withering Realms (Part 2) — `k3croypZQXA` (06:11:34)
- Evidence Gate: **FAIL** (core clock solution not confirmable from specified VODs)
- Media Gate: **MISSING** (no Williams House clock UI / clue / solution frames)
- Publish state: **RESEARCH_REQUIRED**
- Writer / page body: **NOT ENTERED** (do not guess solution)

## Routing Receipt (content)

```text
CONTENT ROUTING
Site lifecycle: PUBLISHED / PRODUCTION (existing)
Content stage: LAUNCH
Intent: PUZZLE_STUCK / QUEST_PROGRESSION
Article class: PREMIUM_PROBLEM_SOLVING
Evidence gate: FAIL — Williams House clock puzzle exact solution not confirmed in specified VODs
Media gate: MISSING
Writer: BLOCKED
Publish state: RESEARCH_REQUIRED
Reason: Subtitle + targeted frame review of Part 1 post-Institute window and Part 2 after Chain Hook found no Williams House clock interaction, clues, player input, or success state
```

## Scope scanned (CONFIRMED_LIVE process)

### Part 1 — post-Institute window `05:50:00–06:46:01`
- After Institute code-words open (~05:44), stream continues chapel/quest wrap, Nightingale lore, then **Penhaligan Manor** quest assignment (~06:00–06:02).
- No spoken / ASR hit for `Williams House`.
- No clock-face / hour-hand / minute-hand / “set the time” puzzle interaction in this window.
- Stream ends with assessment / wrap (~06:29+).

### Part 2 — from `00:35:00` onward (Chain Hook known ~`00:35:24`)
- Full English auto-sub scan: **0** hits for `Williams` / `Williams House`.
- Clock-token scan excluding clock tower / o’clock noise: **0** puzzle-relevant hits in Part 2.
- `00:42:00` “Did I go in this house?” is ambient exploration chatter — no clock puzzle / Williams label confirmed in stills.

### False lead checked (do not publish as Williams Clock)
ASR “Mustin House” @ Part 1 `04:05:59` / enter line `04:07:56` is **Mostyn House** lore inside Institute underground — **not** Williams House Clock.

On-screen **Researcher's Notes** (CONFIRMED_LIVE @ ~`04:05:59`):

> Mostyn House, once situated atop the hill at the epicenter of the Occult Event, appears to have been “eaten” and is now being “vomited up” beneath Penwyll. Fragments… mines… layout… bears no resemblance to the recorded floor plan.

- Grade: **CONFIRMED_LIVE** as Mostyn House note / model desk scene.
- Grade: **CONFIRMED_LIVE** that this is **not** a Williams House clock solve.
- No clock interaction observed in that Mostyn fragment scene (combat / exploration only @ `04:07:56`).

### Other “Williams” / “clock” ASR (not the puzzle)
| Timestamp | Note | Grade |
| --- | --- | --- |
| Part 1 `01:44:31` | “Nightingale Williams” (witch lore) | CONFIRMED_LIVE (character name; not house clock) |
| Part 1 `01:30:13` | “Winding the clock…” doll lore | CONFIRMED_LIVE (lore; not puzzle UI) |
| Part 1 `01:26–01:55` | Clock **tower** quest routing | CONFIRMED_LIVE (different location) |

## Exact solution

**NOT FOUND in specified VODs.**

Missing for Evidence Gate PASS:

- Williams House enter / location confirmation on HUD/map
- Clock puzzle body / interactable
- Clue / note / number / symbol set for the clock
- How hands / time are operated
- Player’s actual input
- Correct hour/minute (or other) solution
- Clue → solution derivation
- Wrong attempts (if any)
- Success state / door / reward / progression

## Evidence grades summary

| Claim | Grade |
| --- | --- |
| Specified VODs were scanned via EN auto-subs + targeted clips | CONFIRMED_LIVE |
| Part 1 `05:50–end` does not contain Williams House clock solve | CONFIRMED_LIVE (negative) |
| Part 2 after `00:35` contains no ASR/subtitle evidence of Williams House clock solve | CONFIRMED_LIVE (negative) |
| Institute underground “Mustin” ASR = Mostyn House note | CONFIRMED_LIVE |
| Williams House Clock exact solution | **NEEDS_VERIFICATION** / unavailable from these VODs |
| Any guessed password / hand positions | **FORBIDDEN** until new EA footage confirms |

## Functional frames captured this pass (supporting / negative evidence)

1. `vod-frame-mostyn-house-note-040605.jpg` — Mostyn House Researcher's Notes @ Part 1 ~`04:05:59` (proves false-lead identity)
2. `vod-frame-mostyn-enter-040756.jpg` — Mostyn fragment interior / combat @ Part 1 ~`04:07:56`
3. `vod-frame-p1-041020-map.jpg` — Institute map glance @ Part 1 ~`04:10:20` (no Williams Clock solve)
4. `vod-frame-p2-004200-house-check.jpg` — Part 2 ~`00:42` house-check window (no clock puzzle confirmed)

## Unresolved / next research needs

- Need a different EA VOD / segment where Williams House is entered and the clock is solved on camera.
- Do **not** use web guides or invent hand positions.
- Keep page unpublished until exact solution is CONFIRMED_LIVE or PLAYER_CONFIRMED with usable proof.

## Decision

- Evidence Gate = **FAIL**
- Publish state = **RESEARCH_REQUIRED**
- Shared Article Writer = **do not run**
- No public page / no production deploy for this slug
