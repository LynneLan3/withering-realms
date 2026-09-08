# Bellflower Occult Institute Code Words Puzzle — APIMart page-package brief

- Slug: `institute-code-words-puzzle`
- Canonical URL: `/institute-code-words-puzzle/`
- Action: UPDATE_PAGE (Media Gate OVERRIDE_APPROVED — publish verified simple version without basement success frame)
- Research checked: 2026-09-08
- Early Access actual Steam release: 2026-09-04
- Current official patch page latest: 0.34
- Publish status: OVERRIDE_APPROVED / publishable
- Media gate: OVERRIDE_APPROVED (upper-door speak UI + open READY; basement success frame deferred to backlog)

## Intent Brief

```json
{
  "intentOwnerStatus": "KEEP",
  "primaryQuery": "Withering Realms Institute Code Words Puzzle",
  "userJob": "Open Bellflower Occult Institute hex doors (basement / upper) by decoding Spell Book Codes pairs into spoken book words — not a fixed numeric password",
  "serpPromise": "Verified method: read Spell Book Codes (book)-(word) pairs, collect three spell books, speak the matching words at the hex door UI",
  "secondaryIntents": [
    {
      "query": "withering realms institute basement door code",
      "action": "KEEP_SUPPORTING"
    }
  ]
}
```

## Must Preserve Exact Tokens

- Spell Book Codes
- Book of RAUM
- Book of GLASYA-LABOLAS
- Book of ASTAROTH
- Speak words from which book?
- Speak which word?
- Sabanche
- Saluyel
- Azacgessenio
- Manichel
- Hazalat
- Bellflower Occult Institute

## Must Include Facts

Evidence grades: CONFIRMED_LIVE | PLAYER_REPORTED | CONFIRMED_OFFICIAL.

### Verified player answer (do not weaken)

1. This is **not** a fixed numeric password / keypad code for every player.
2. The **Spell Book Codes** clue note gives `(book)-(word)` pairs labeled **Basement** and **Upper floor**.
3. There are **three** books (not two):
   - Book of RAUM
   - Book of GLASYA-LABOLAS
   - Book of ASTAROTH
4. Hex door UI prompts:
   - “Speak words from which book?”
   - “Speak which word?”
5. Method: for each pair in note order, pick that book, then speak that numbered word.
6. Players must use **their own** Spell Book Codes note — do not treat any example word string as everyone’s permanent password.
7. Keep this page separate from the first-floor gap / ghost-hands stuck route (`/bellflower-institute-stuck-first-floor/`).

### CONFIRMED_LIVE (Jerma EA VOD Part 1 — `z9pL-sUiZkA`)

- Spell Book Codes note (~04:02:16): first two books in ground-floor bathroom; third on upper floor; “The code is in book-word order.”
- This VOD’s printed pairs:
  - Basement: `1-4` `2-5` `1-6`
  - Upper floor: `1-6` `2-4` `3-2`
- Book of RAUM words: Assay, Lemath, Azzabue, Sabanche, Ellithy, Azacgessenio (~05:02:04)
- Book of GLASYA-LABOLAS words: Rogum, Agaled, Eradioch, Manichel, Saluyel, Beyestar (~05:09:31)
- Book of ASTAROTH words: Phalezeton, Hazalat, Jetelemathon, Sacramphal, Zaton, Jeccomantha (~05:26:28)
- Book tooltip: “A book of words that can be spoken aloud to dispel certain door hexes.”
- Hex door: wooden door with three glowing white circular sigils; speak-book then speak-word menus; wrong sequence → Clover “Nothin”; correct sequence clears sigils.
- Upper-floor sequence verified open in this VOD:
  - `1-6 2-4 3-2` → RAUM / Azacgessenio → GLASYA-LABOLAS / Manichel → ASTAROTH / Hazalat
- Basement mapping for this VOD’s note (derived from note + books; basement success frame not captured — publish method without that still under user media override):
  - `1-4 2-5 1-6` → RAUM / Sabanche → GLASYA-LABOLAS / Saluyel → RAUM / Azacgessenio
- Same upper pairs tried on the other door did nothing — doors use their matching pair set.

### How to present example words (critical)

- Present Upper and Basement word sequences as **worked examples from one Early Access run’s Spell Book Codes note**.
- Explicitly tell players: if their note shows different pairs, map those pairs the same way using their own books.
- Do **not** say the Basement word trio is forever fixed for all players.
- Do **not** upgrade Steam “randomized” posts into official fact. If mentioning that other players’ codes may differ, keep it soft / observational without claiming CONFIRMED_OFFICIAL randomization.

### Explicitly omit

- Bathroom floor “312” / blood dots path.
- Spectral Camera miniboss / enemy proper names.
- Digits-only keypad framing as the real UI (streamer digit shorthand is not the game UI).

### Baseline

- Early Access Steam release: 2026-09-04 (CONFIRMED_OFFICIAL).
- Research checked: 2026-09-08; latest official patch page observed: 0.34.
- Media source: Jerma Stream Archive — `Jerma Streams - Withering Realms` https://www.youtube.com/watch?v=z9pL-sUiZkA

## Forbidden Claims

- Do not invent a universal fixed password that works for every run.
- Do not claim the Basement example words are permanently fixed for all players.
- Do not present Steam randomization as official confirmation.
- Do not invent bathroom “312” / dots solution.
- Do not invent enemy names for post-camera encounters.
- Do not invent a digit keypad as the door UI.
- Do not invent MEDIA_SLOT IDs beyond the Visual Assets list.
- Do not merge with `/bellflower-institute-stuck-first-floor/` as the same problem.
- Do not write “Media pending” / placeholder image prose.
- Do not leak internal publish-state / media-gate jargon into public copy.
- Captions for the open-door still must say it verifies the **upper-floor book-word method**, not basement success.

## Required structure (use exact `##` Markdown headings)

1. `## Quick Answer`
2. `## Read Your Spell Book Codes Note`
3. `## Collect the Three Spell Books`
4. `## How the Hex Door UI Works`
5. `## Map Pairs to Words and Speak Them`
6. `## Worked Example From One Early Access Run`
7. `## Common Mistakes`
8. `## Related Guides`
9. `## FAQ`
10. `## Sources`

Quick Answer must lead with: not a fixed numeric password → use Spell Book Codes pairs → three books → speak book then word → use your own note. Do **not** mention first-floor corridor / ghost-hands stuck routing in Quick Answer, Title, Meta, or FAQ lead answers.

Related Guides may include `/bellflower-institute-stuck-first-floor/` only as a separate problem (different stuck issue) and optionally `/birdcage-b2-puzzle/`.

FAQ must cover: is there one password for everyone; how to read 1-6; what the door asks; why someone else’s words failed. Keep any separate-stuck-page pointer out of Quick Answer.

## Visual Assets

Prefer `*MEDIA_SLOT:id*` placeholders (not Markdown image embeds). After each slot, a one-line italic `_Proof: ..._` caption is OK.

- Asset ID: spellbook-codes-note
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/spellbook-codes-note.webp
- Shows / evidence: Spell Book Codes clue with Basement / Upper floor pairs
- Intended section: Read Your Spell Book Codes Note
- Evidence status: READY
- Source page: Part 1 @ 04:02:16

- Asset ID: book-glasya-labolas
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/book-glasya-labolas.webp
- Shows / evidence: Book of GLASYA-LABOLAS word list
- Intended section: Collect the Three Spell Books
- Evidence status: READY
- Source page: Part 1 @ 05:09:31

- Asset ID: book-astaroth
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/book-astaroth.webp
- Shows / evidence: Book of ASTAROTH word list
- Intended section: Collect the Three Spell Books
- Evidence status: READY
- Source page: Part 1 @ 05:26:28

- Asset ID: speak-which-book
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/speak-which-book.webp
- Shows / evidence: “Speak words from which book?” menu on hex door
- Intended section: How the Hex Door UI Works
- Evidence status: READY
- Source page: Part 1 ~05:43:50

- Asset ID: speak-which-word
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/speak-which-word.webp
- Shows / evidence: “Speak which word?” menu (ASTAROTH / Hazalat highlighted)
- Intended section: How the Hex Door UI Works
- Evidence status: READY
- Source page: Part 1 ~05:43:57

- Asset ID: upper-door-open
- Local asset path: public/assets/images/evidence/institute-code-words-puzzle/upper-door-open.webp
- Shows / evidence: Hex door open after correct book-word sequence (upper floor)
- Intended section: Worked Example From One Early Access Run
- Evidence status: READY
- Caption requirement: must state this still proves the **upper-floor book-word decode method**, not a basement success screenshot
- Source page: Part 1 ~05:44:20+

## Title / Meta direction

- Title direction: `Withering Realms — Bellflower Occult Institute Code Words Puzzle`
- Meta direction: Institute hex doors use Spell Book Codes book-word pairs and spoken words from three spell books — not a fixed numeric password. Use your own note.
