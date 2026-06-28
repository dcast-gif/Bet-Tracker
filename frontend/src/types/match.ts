export interface MatchTeam {
  name: string;

  score: number;
}

export interface MatchState {
  id: string;

  sport: string;

  home: MatchTeam;

  away: MatchTeam;

  minute: number;

  homeCorners: number;

  awayCorners: number;

  homeYellowCards: number;

  awayYellowCards: number;

  homeRedCards: number;

  awayRedCards: number;
}