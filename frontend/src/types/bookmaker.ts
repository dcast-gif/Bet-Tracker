export interface Bookmaker {
  id: string;

  name: string;

  website: string;

  supportedSports: string[];

  logo?: string;
}