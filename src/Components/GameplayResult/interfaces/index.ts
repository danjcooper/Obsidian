import { housemateData } from '../../../Interfaces';

export interface props {
    isWinner: any;
    updateGameState: (input: string) => void;
    updateScore: (input: number, positive?: boolean) => void;
    updateLives: () => void;
    specialEventData: any;
    updateStreak: (input: boolean) => void;
    streak: number;
    roundPoints: number;
    correctHousemate: housemateData;
}
