import { housemateData } from '../../../Interfaces';

export interface props {
    housemateData: housemateData[];
    updateGameState: (input: string) => void;
    updateIsWinner: (input: boolean) => void;
    updateRoundPoints: (input: number) => void;
}
