export interface SimulatedEventStep {
  id: string;

  minute: number;

  statistic: string;

  value: number;

  description: string;
}

export interface SimulationScenario {
  id: string;

  name: string;

  sport: string;

  steps: SimulatedEventStep[];
}