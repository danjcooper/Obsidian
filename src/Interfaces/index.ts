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
  seasonid: string;
  seasonname: string;
  lengthofseason: string;
  housematecount: number;
  datecount: number;
  couplecount: number;
}
