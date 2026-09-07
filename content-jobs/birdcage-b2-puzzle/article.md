# Withering Realms Birdcage / B2 Puzzle — A/B Code Guide

Quick answer
The speaker code is letter + number. A = right-side hanging target, B = left-side hanging target, and the number is how many times to hit that target (e.g., A1 = hit the right target once; B2 = hit the left target twice). In the current Early Access build, fast/light attacks are the safest observed input for registering hits cleanly. (CONFIRMED_LIVE)

A / B diagram
Right = A
Left  = B
Number = required hits

*MEDIA_SLOT:room-overview*

Code examples (apply the same rule to any A/B code)
- A1 — hit the right-side target 1 time. (CONFIRMED_LIVE)  
  *MEDIA_SLOT:a-right-target*
- B2 — hit the left-side target 2 times. (CONFIRMED_LIVE)  
  *MEDIA_SLOT:b-left-target*
- A3 / B3 — same counting rule: A3 = hit right target 3 times, B3 = hit left target 3 times. (CONFIRMED_LIVE)

Step-by-step: solve the hanging-target room
1. Enter the room and listen/read the speaker code (letter + number). (CONFIRMED_LIVE)  
2. Map the letter to a side: A → right target, B → left target. (CONFIRMED_LIVE)  
3. Apply the number as the exact count of hits to that side (e.g., B2 = two hits on left). (CONFIRMED_LIVE)  
4. Use fast/light attacks to register hits cleanly — these were the safest observed inputs during the current EA window. (CONFIRMED_LIVE)  
5. After landing the indicated hits, check for the puzzle’s response. If it reports Incorrect, proceed to the troubleshooting section below before repeating attempts.

*MEDIA_SLOT:successful-state*

Four Arms troubleshooting (PLAYER_REPORTED)
- PLAYER_REPORTED: Some players report the Four Arms talisman may generate an extra counted hit in this puzzle. One player reported the puzzle stopped returning Incorrect after unequipping Four Arms.
- This is a player-reported observation only — not an officially confirmed bug. If you have Four Arms equipped and the puzzle behaves unexpectedly, try unequipping the talisman and retesting the puzzle. (PLAYER_REPORTED)  
*MEDIA_SLOT:four-arms-talisman*

If this didn't work
- Reload the area or exit/re-enter the room and try again; retrying is the recommended immediate step if the puzzle does not register correctly. (CONFIRMED_LIVE)  
- Remember Withering Realms is in Early Access; puzzle behavior can be patch-sensitive. The observations above were made during the 2026-09-04 Early Access window and checked on 2026-09-07. If problems persist, watch official patch notes for changes. (CONFIRMED_OFFICIAL / CONFIRMED_LIVE)

Verification / sources
- Research checked: 2026-09-07. Latest official patch page observed: 0.34. (CONFIRMED_OFFICIAL)  
- Early Access Steam release: 2026-09-04. (CONFIRMED_OFFICIAL)  
- CONFIRMED_LIVE (current Early Access build observations):
  - The player enters a room with two hanging targets and speaker codes such as A1 / B2.  
  - A = right-side target.  
  - B = left-side target.  
  - The number = number of hits required.  
  - A1 = hit the right target once.  
  - B2 = hit the left target twice.  
  - A3 / B3 follow the same count rule.  
  - Fast / light attacks are the safest observed input for registering hits cleanly.  
- PLAYER_REPORTED (not an official bug confirmation):
  - The Four Arms talisman may generate an extra counted hit.  
  - A player reported the puzzle stopped returning Incorrect after unequipping Four Arms.  
- Note: Do not interpret PLAYER_REPORTED items as developer-confirmed; they reflect current-build player reports only.

FAQ
Q: What does A mean in the speaker code?
A: A = the right-side hanging target. (CONFIRMED_LIVE)

Q: What does B mean?
A: B = the left-side hanging target. (CONFIRMED_LIVE)

Q: What does the number after A/B do?
A: The number is how many times you must hit that target (e.g., B2 = hit left target twice). (CONFIRMED_LIVE)

Q: Which attack type should I use to register hits reliably?
A: Fast / light attacks were the safest observed input for registering hits cleanly in the current EA build. (CONFIRMED_LIVE)

Q: Is Four Arms an official bug for this puzzle?
A: The Four Arms interaction is PLAYER_REPORTED only. It is not listed as an official bug in the verification data; players have reported extra counted hits and one player reported success after unequipping Four Arms. (PLAYER_REPORTED)

Related guides
- /how-to-cross-gaps/  
- /talismans/  
- /doll-arms-limb-leveling/
