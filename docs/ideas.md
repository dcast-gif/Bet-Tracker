# Bet Tracker Ideas

These are ideas that should not be forgotten. They are not necessarily in development order.

---

## Notifications

### Notification Profiles

Allow users to choose notification intensity.

- Minimal
- Balanced
- Detailed
- Custom

Profiles should be configurable per Bet Slip.

Future:
Allow overriding notification settings for individual selections.

---

### Notify Progress, Not Events

The application should never notify users simply because an event happened.

Instead it should notify because THEIR BET has progressed.

Example

❌ Goal

✅ Over 2.5 Goals

2 / 3 Goals

---

### Meaningful Notifications

Examples

⚽ Goal

Over 2.5 Goals

2 / 3 Goals

---

⚽ Salah Scored

Liverpool Winning ✅

2 / 4 selections complete

---

🚩 Corner

Over 10.5 Corners

5 / 11 Corners

---

### Decision Engine

Every notification should pass through a decision engine.

Questions:

- Did a tracked condition change?
- Is this meaningful?
- Has a similar notification just been sent?
- Will waiting reduce notification spam?

Only then notify the user.

---

## Bet Slips

Bet Slips should automatically receive a generated display name.

Examples

- Saturday Acca
- Weekend £2 Acca
- Liverpool Builder
- Spain v France • 5 Selections

Users can rename these.

---

## Progress Engine

The application should be driven by Conditions.

Examples

Goals >= 3

Corners >= 11

Player Goals >= 1

Rather than football logic.

---

## Statistics Engine

The Progress Engine should compare snapshots.

Old Snapshot

Goals = 1

Corners = 4

↓

New Snapshot

Goals = 2

Corners = 5

↓

Statistics Changed

Goal Added

Corner Added

↓

Progress Engine evaluates conditions.

---

## Simulation Mode

Developer Mode should exist.

Instead of waiting for live matches.

Examples

+ Goal

+ Corner

+ Yellow Card

+ Red Card

Every press updates the Progress Engine.

---

## Testing

Every betting market should have a simulation scenario.

Examples

- Over 2.5 Goals
- Under 2.5 Goals
- BTTS
- Corners
- Cards
- Player Goals
- Match Winner

---

## Future

Potential future products powered by the Progress Engine

- Bet Tracker
- Live Progress Widgets
- Cash Out Predictor
- "What Does My Bet Need?"
- Live AI Match Summary
- Apple Watch Companion

---

Last Updated

28 June 2026