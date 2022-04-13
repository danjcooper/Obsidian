import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';
import { getRandomSpecialEvent, addSpecialEvent } from '../../Helpers';

export const GameplayResult = ({
    isWinner,
    updateGameState,
    updateScore,
    updateLives,
    specialEventData,
    updateStreak,
}: any) => {
    const [specialEvent, setSpecialEvent] = useState({
        triggered: false,
        eventData: { text: null, positive: null, name: null },
    });

    useEffect(() => {
        // Based on the result, either add to the score or remove a life.
        isWinner ? updateScore() : updateLives();
        updateStreak();

        // IF the conditions for a special event are met then add then special event is activated.
        if (addSpecialEvent()) {
            const updatedEventData = getRandomSpecialEvent(specialEventData);
            setSpecialEvent(updatedEventData);
            updateScore(isWinner);
        }
    }, []);

    const handleClick = () => {
        updateGameState(GameStates.ANSWERING);
    };

    return (
        <div>
            {isWinner ? <h2>winner</h2> : <h2>loser</h2>}
            <button onClick={handleClick}>Next Round</button>
            {specialEvent.triggered ? <h1>{specialEvent.eventData.text}</h1> : null}
        </div>
    );
};

export default GameplayResult;
