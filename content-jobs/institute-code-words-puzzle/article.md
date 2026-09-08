# Withering Realms — Bellflower Occult Institute Code Words Puzzle

## Quick Answer

Not a fixed numeric password — Bellflower Occult Institute hex doors use Spell Book Codes (book)-(word) pairs. Read the Spell Book Codes note for the door you want to open, collect the three books (Book of RAUM, Book of GLASYA-LABOLAS, Book of ASTAROTH), then at the hex door choose the book (prompt: “Speak words from which book?”) and speak the numbered word (prompt: “Speak which word?”) in the note’s pair order. Always use your own Spell Book Codes note — example words shown elsewhere are worked examples, not a universal password.

## Read Your Spell Book Codes Note

The clue note is printed with two labeled sets of (book)-(word) pairs: one labeled Basement and one labeled Upper floor. The note text in the observed run also says “The code is in book-word order.” Treat the pairs as ordered steps you must reproduce at the door that matches that label.

*MEDIA_SLOT:spellbook-codes-note*  
_Proof: Spell Book Codes clue showing Basement / Upper floor pairs (observed in one Early Access run)._

(Observed: in the recorded Early Access run the first two books referenced by the note were found in the ground-floor bathroom and the third book on the upper floor — CONFIRMED_LIVE.)

## Collect the Three Spell Books

You need all three books the note references. The three observed books are:

- Book of RAUM  
- Book of GLASYA-LABOLAS  
- Book of ASTAROTH

Each book contains a numbered list of words; the book tooltip reads: “A book of words that can be spoken aloud to dispel certain door hexes.” Locate the three books in your run and open each to read its numbered words before attempting the door.

*MEDIA_SLOT:book-glasya-labolas*  
_Proof: Book of GLASYA-LABOLAS word list (observed in one Early Access run)._

*MEDIA_SLOT:book-astaroth*  
_Proof: Book of ASTAROTH word list (observed in one Early Access run)._

(These three books and their word lists were documented in the observed run — CONFIRMED_LIVE.)

## How the Hex Door UI Works

When you interact with a hex door you get a two-step spoken-word UI:

- “Speak words from which book?” — pick one of the three books.  
- “Speak which word?” — pick the numbered word from that book.

If you select the wrong sequence the game responds with Clover saying “Nothin”; the correct sequence clears the door’s three glowing white sigils and opens the door (observed in the upper-floor door in the recorded run).

*MEDIA_SLOT:speak-which-book*  
_Proof: Hex door prompt “Speak words from which book?” (observed in one Early Access run)._

*MEDIA_SLOT:speak-which-word*  
_Proof: Hex door prompt “Speak which word?” with a book/word selected (observed in one Early Access run)._

## Map Pairs to Words and Speak Them

Follow these steps in order for the door you are opening:

1. Open your Spell Book Codes note and find the pair list labeled for the door (Basement or Upper floor). Treat the list as ordered—first pair = first spoken book/word, etc.  
2. For the first pair: note the book index and the word index (format: book–word). Open that book, select it at the door when prompted (“Speak words from which book?”).  
3. When the door asks “Speak which word?”, choose the numbered word from that book (the list inside the book; 1 = first word, 2 = second, etc.). Speak it.  
4. Repeat for the second and third pairs in the note’s order. The correct three book-word selections in order will clear the sigils; a wrong selection yields “Nothin.”  
5. Use the pair set that matches the specific door (Basement vs Upper floor). Trying the other door’s pair list will not open this door in the observed run.

Important: use the Spell Book Codes note you found in your own playthrough — do not assume another player’s words will match your game.

## Worked Example From One Early Access Run

Below are worked mappings from one Early Access run (recorded stream). These are examples only — map pairs the same way using your own Spell Book Codes note.

Observed printed pairs in that run:
- Basement: 1-4  2-5  1-6  
- Upper floor: 1-6  2-4  3-2  (CONFIRMED_LIVE)

Mapped words from that same run:

- Upper floor mapping (example):  
  Sequence: 1-6 → 2-4 → 3-2  
  Mapped words: Book of RAUM / Azacgessenio → Book of GLASYA-LABOLAS / Manichel → Book of ASTAROTH / Hazalat  
  This sequence is shown opening the upper-floor hex door in the observed run.

*MEDIA_SLOT:upper-door-open*  
_Proof: Shows the upper-floor hex door open after the correct book-word sequence — verifies the upper-floor book-word decode method only (observed in one Early Access run)._

- Basement mapping (example from the same run):  
  Sequence: 1-4 → 2-5 → 1-6  
  Mapped words: Book of RAUM / Sabanche → Book of GLASYA-LABOLAS / Saluyel → Book of RAUM / Azacgessenio  
  (Basement success frame for this run was not captured in the available clip; this mapping is the derived example from the note + books in that run — CONFIRMED_LIVE as the run’s mapping.)

Reminder: these word strings (Sabanche, Saluyel, Azacgessenio, Manichel, Hazalat, etc.) are worked examples from one run’s Spell Book Codes note. If your note lists different pairs, map them the same way to your three books.

## Common Mistakes

- Using another player’s example words as if they’re universal — the correct words come from your own Spell Book Codes note.  
- Treating the UI as a digits-only keypad or expecting a single four-digit code — the game asks for a book then a word, not a numeric password.  
- Trying the Upper-floor pairs on the Basement door (or vice versa) — doors use their matching pair set in the observed run.  
- Picking the book but reading the wrong numbered word (remember 1 = first word in that book, etc.).  
- Skipping the third pair: all three pairs must be spoken in order to clear the door.

Also note: wrong sequences return Clover saying “Nothin”; correct sequences visibly clear the door’s sigils (CONFIRMED_LIVE).

## Related Guides

- /bellflower-institute-stuck-first-floor/ — a different stuck/route issue (separate problem).  
- /birdcage-b2-puzzle/ — related location puzzle.

## FAQ

Q: Is there one password that works for everyone?  
A: No. There is not a universal password — doors use Spell Book Codes pairs from the note you find in your run.

Q: How do I read a pair like “1-6”?  
A: Read it as (book index)-(word index). Open the referenced book, then speak that numbered word (1 = first word, 6 = sixth word).

Q: What does the hex door ask me to do?  
A: The door asks “Speak words from which book?” then “Speak which word?” — choose the book, then choose the numbered word.

Q: Someone else’s words opened their door but not mine — why?  
A: Because each run’s Spell Book Codes note provides the pairs you must map to your three books. Using another player’s pairs may not match your note.

## Sources

- Jerma Streams - Withering Realms (YouTube) — vid id z9pL-sUiZkA; Spell Book Codes note and book word lists observed in Part 1; mapped pairs and upper-floor opening verified in the stream (CONFIRMED_LIVE).  
- Early Access release: 2026-09-04 (CONFIRMED_OFFICIAL).  
- Research checked: 2026-09-08; latest observed official patch: 0.34.
