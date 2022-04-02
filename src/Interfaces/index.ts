export interface gameInfo {
  userName: string | null;
  score: number;
  lives: number;
  housemateData?: housemateData[];
  seasonData?: seasonData[];
}

interface housemateData {
  id: number;
  name: string;
  season: string;
  dates: number;
  episodes: number;
}

interface seasonData {
  id: number;
  housemates: number;
  name: string;
}
