import { createCondition } from "./createCondition";

export const DEFAULT_MARKETS = {
  over25Goals: {
    label: "Over 2.5 Goals",
    unit: "Goals",
    condition: createCondition(
      "over-2-5-goals",
      "goals",
      3
    ),
  },

  over105Corners: {
    label: "Over 10.5 Corners",
    unit: "Corners",
    condition: createCondition(
      "over-10-5-corners",
      "corners",
      11
    ),
  },

  homeOver15Goals: {
    label: "Home Team Over 1.5 Goals",
    unit: "Goals",
    condition: createCondition(
      "home-over-1-5-goals",
      "home_goals",
      2
    ),
  },

  awayOver15Goals: {
    label: "Away Team Over 1.5 Goals",
    unit: "Goals",
    condition: createCondition(
      "away-over-1-5-goals",
      "away_goals",
      2
    ),
  },
};