export interface gameInfo {
    userName: string;
    score: number;
    lives: number;
    housemateData?: housemateData[];
    seasonData?: seasonData[];
    queryRequestString?: string;
}

export interface housemateData {
    id: number;
    name: string;
    nickname: string;
    tagline: string;
    totalWeeksInHouse: number;
    totalLivedWith: number;
    totalDates: number;
    instagramFollowers: number;
    age: number;
    ageWhenEntered: number;
    imageUrl: number;
    seasonName: string;
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

export interface formError {
    error: boolean;
    message: string;
}

export interface roundData {
    housemateOne: housemateData;
    housemateTwo: housemateData;
    question: string;
    winner: number;
}
