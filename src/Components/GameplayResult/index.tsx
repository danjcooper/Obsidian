import React from 'react';
import { GameStates } from '../../Enums';

export const GameplayResult = ({ isWinner, updateGameState }: any) => {
    const handleClick = () => {
        updateGameState(GameStates.ANSWERING);
    };

    return (
        <div>
            {isWinner}
            <button onClick={handleClick}>Next Round</button>
        </div>
    );
};

export default GameplayResult;
