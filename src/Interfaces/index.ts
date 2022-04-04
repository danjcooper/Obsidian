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

export interface seasonData {
  id: string;
  name: string;
  seasonLength: string;
  totalHousemates: number;
  totalDates: number;
  totalCouples: number;
}
