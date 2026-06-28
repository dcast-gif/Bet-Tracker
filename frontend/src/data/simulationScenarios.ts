import { SimulationScenario } from "../types/simulation";

export const simulationScenarios: SimulationScenario[] = [
  {
    id: "football-over-2-5-goals",
    name: "Football - Over 2.5 Goals",
    sport: "football",
    steps: [
      {
        id: "step-1",
        minute: 0,
        statistic: "goals",
        value: 0,
        description: "Kick off",
      },
      {
        id: "step-2",
        minute: 18,
        statistic: "goals",
        value: 1,
        description: "First goal scored",
      },
      {
        id: "step-3",
        minute: 54,
        statistic: "goals",
        value: 2,
        description: "Second goal scored",
      },
      {
        id: "step-4",
        minute: 77,
        statistic: "goals",
        value: 3,
        description: "Third goal scored",
      },
    ],
  },
];