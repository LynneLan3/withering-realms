# Doll Arms / Limb Leveling — APIMart page-package brief

- Slug: `doll-arms-limb-leveling`
- Canonical URL: `/doll-arms-limb-leveling/`
- Action: UPDATE_PAGE (bounded patch refresh for 0.36 live state + announced 0.37)
- Research checked: 2026-09-10
- Early Access actual Steam release: 2026-09-04
- Current official patch page latest: **0.36** (released 2026-09-09)
- Patch 0.37: **announced / being prepared — NOT RELEASED** in this research window
- Publish status: publishable (bounded update)

## Intent Brief

```json
{
  "intentOwnerStatus": "KEEP",
  "primaryQuery": "withering realms doll arms limb leveling",
  "userJob": "Understand current Doll right-arm tools, live 0.36 arm-related fixes, what is still unknown about left-arm weapons and scaling, and that Left Hand Tool upgrading is announced for 0.37 but not live yet",
  "serpPromise": "0.36-current Doll arm system framing with Tommy Gun fix, explicit unknowns for left-arm scaling/respec/caps, and clearly labeled announced-not-live 0.37 Left Hand Tool upgrading",
  "secondaryIntents": [
    {
      "query": "Left arm weapons and scaling",
      "action": "KEEP_SUPPORTING"
    }
  ]
}
```

## Must Preserve Exact Tokens

- Enchanted Candelabrum
- Chain Rock
- Machinegun
- Flamethrower
- Tommy Gun
- Left Hand Tools
- CONFIRMED_OFFICIAL
- NEEDS_VERIFICATION
- 0.36
- 0.37

## Must Include Facts

Evidence grades: CONFIRMED_OFFICIAL | NEEDS_VERIFICATION. Do not invent PLAYER_REPORTED mechanics.

### CONFIRMED_OFFICIAL — baseline Doll right-arm system (still true)

- The Doll has a missing right hand / right-arm tool system.
- Crafted tools provide primary and secondary attacks.
- Official store examples of crafted arm tools include Enchanted Candelabrum, Chain Rock, Machinegun, and Flamethrower (CONFIRMED_OFFICIAL store examples; catalog incomplete).
- Clover can cast while the Doll attacks.
- Doll progression / equipment supports limb-oriented buildcrafting.

### CONFIRMED_OFFICIAL — patch 0.36 live (released 2026-09-09)

- Fixed Tommy Gun sometimes refusing to fire.
- Treat 0.36 as the current live patch baseline for this page (research checked 2026-09-10).

### Explicit NEEDS_VERIFICATION / unknowns (must remain uncertain)

- Exact left-arm / off-hand weapon upgrade rules on the current live build
- Left-arm / off-hand damage scaling formulas
- Respec availability / cost
- Level cap
- Exact stat formulas for Doll attacks or tool scaling
- Breakpoints
- Any competitor claims about left-arm leveling, respec, or scaling that are not in this brief

### Announced / not live — patch 0.37 (CONFIRMED_OFFICIAL announcement only)

- Official 0.36 notes say v0.37 is **being prepared**.
- Planned change includes the ability to **upgrade Left Hand Tools**.
- Do **not** describe 0.37 as released.
- Do **not** invent Left Hand Tool upgrade costs, formulas, caps, menus, currencies, or step-by-step upgrade procedures.
- State clearly that Left Hand Tool upgrading is announced for 0.37 and is **not current live behavior**.

### Player language to capture naturally (do not invent answers)

- Current Steam demand includes “Left arm weapons and scaling”.
- Acknowledge that players are asking about left-arm weapons and scaling, then answer only with: live right-arm system + 0.36 Tommy Gun fix + unknowns + announced 0.37 Left Hand Tool upgrading.

### Baseline

- Early Access Steam release: 2026-09-04 (CONFIRMED_OFFICIAL).
- Research checked: 2026-09-10; latest released official patch: 0.36 (2026-09-09).
- Primary patch source for this refresh: SteamDB / Steam patch 0.36 notes (CONFIRMED_OFFICIAL).

## Forbidden Claims

- Do not invent respec menus, soft currency costs, or “you can respec anytime”.
- Do not invent level caps, soft caps, or damage formulas.
- Do not invent a complete arm catalog beyond the official examples listed.
- Do not invent off-hand / left-hand upgrade sequences, costs, formulas, caps, or breakpoints.
- Do not describe 0.37 Left Hand Tool upgrading as currently playable.
- Do not invent talisman synergies except where another page is linked.
- Do not copy competitor claims about left-arm leveling/respec/scaling.

## Required structure

1. Quick Answer — right-arm tools + primary/secondary + Clover cast; 0.36 is live; left-arm scaling still unverified; 0.37 Left Hand Tool upgrading announced but not live.
2. How the Doll arm system works now — confirmed right-arm facts only.
3. Confirmed arm examples — four official examples; catalog incomplete.
4. Patch 0.36 live changes for arms — Tommy Gun fire fix only from this brief.
5. Left arm weapons and scaling — current player question language; state what is still NEEDS_VERIFICATION.
6. Patch 0.37 announced (not released) — Left Hand Tool upgrading planned; no procedure/costs/formulas.
7. What is still unverified — explicit NEEDS_VERIFICATION list.
8. If This Didn't Work / verification block — check current live build / 0.36 notes.
9. FAQ.
10. Related Guides — `/talismans/`, `/how-to-cross-gaps/`, `/birdcage-b2-puzzle/`.

## Media slots

- MEDIA_SLOT:doll-arm-equipment-ui
- MEDIA_SLOT:limb-upgrade-ui
- MEDIA_SLOT:primary-secondary-attacks
- MEDIA_SLOT:clover-cast-during-doll-attack

Media note: new left-hand upgrade UI waits until 0.37 is live. Existing slots remain MISSING / backlog; do not invent images.

## Title / Meta direction

- Title direction: `Withering Realms Doll Arms & Limb Leveling`
- Meta direction: Current Early Access Doll right-arm tools, the 0.36 Tommy Gun fix, what is still unknown about left-arm weapons and scaling, and the announced-not-live 0.37 Left Hand Tool upgrade change.
