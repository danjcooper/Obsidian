export interface props {
    isWinner: any;
    updateGameState: (input: string) => void;
    updateScore: (input: number) => void;
    updateLives: () => void;
    specialEventData: any;
    updateStreak: (input: boolean) => void;
    streak: number;
    roundPoints: number;
}
