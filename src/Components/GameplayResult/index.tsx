import React, { useEffect } from 'react';
import { GameStates } from '../../Enums';

export const GameplayResult = ({ isWinner, updateGameState, updateScore, updateLives }: any) => {
    useEffect(() => {
        isWinner ? updateScore() : updateLives();
    }, []);

    const handleClick = () => {
        updateGameState(GameStates.ANSWERING);
    };

    return (
        <div>
            {isWinner ? <h2>winner</h2> : <h2>loser</h2>}
            <button onClick={handleClick}>Next Round</button>
        </div>
    );
};

export default GameplayResult;
