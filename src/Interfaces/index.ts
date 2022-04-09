export interface gameInfo {
    userName: string;
    score: number;
    lives: number;
    housemateData?: housemateData[];
    seasonData?: seasonData[];
}

interface housemateData {
    //TODO Update this temporary interface.
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
    seasonCode: string;
}
