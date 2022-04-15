import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';
import { specialEvent } from '../../Interfaces';
import { getRandomSpecialEvent, addSpecialEvent, streakMilestone } from '../../Helpers';

export const GameplayResult = ({
    isWinner,
    updateGameState,
    updateScore,
    updateLives,
    specialEventData,
    updateStreak,
    streak,
}: any) => {
    const [specialEvent, setSpecialEvent] = useState<specialEvent>({
        triggered: false,
        eventData: { text: null, positive: null, name: null },
    });

    useEffect(() => {
        // Based on the result, either add to the score or remove a life.
        isWinner ? updateScore() : updateLives();
        updateStreak(isWinner);

        // IF the conditions for a special event are met then add then special event is activated.
        if (streakMilestone(streak) && addSpecialEvent()) {
            const updatedEventData: specialEvent = getRandomSpecialEvent(specialEventData);
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
            {specialEvent.triggered ? (
                <div className='modal'>
                    <h2>{specialEvent.eventData.text}</h2>
                    <p>{specialEvent.eventData.name}</p>
                </div>
            ) : null}
        </div>
    );
};

export default GameplayResult;
