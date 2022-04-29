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
    imageUrl: string;
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

export interface effectData {
    effectid: number;
    housemate: string;
    positive: boolean;
    special: boolean;
    description: string;
    imageurl: string;
    seasonid: number;
}

type eventText = string | null;
type eventBool = boolean | null;

export interface specialEvent {
    triggered: boolean;
    eventData: { text: eventText; positive: eventBool; name: eventText; imageUrl: string };
}

export interface leaderboard {
    position: number;
    id: number;
    username: string;
    score: number;
}

export interface qAndAArticle {
    title: string;
    text: string;
    hidden: boolean;
}

export interface qAndAData {
    categoryName: string;
    questions: qAndAArticle[];
}
