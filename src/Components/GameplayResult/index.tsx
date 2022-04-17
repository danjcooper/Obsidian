import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';
import { specialEvent } from '../../Interfaces';
import { getRandomSpecialEvent, addSpecialEvent, streakMilestone } from '../../Helpers';

interface props {
    isWinner: boolean;
    updateGameState: () => void;
    updateScore: () => void;
    updateLives: () => void;
    specialEventData: specialEvent;
    updateSteak: () => void;
    streak: number;
    roundPoints: number;
}

export const GameplayResult = ({
    isWinner,
    updateGameState,
    updateScore,
    updateLives,
    specialEventData,
    updateStreak,
    streak,
    roundPoints,
}: any) => {
    const [specialEvent, setSpecialEvent] = useState<specialEvent>({
        triggered: false,
        eventData: { text: null, positive: null, name: null },
    });

    useEffect(() => {
        // Based on the result, either add to the score or remove a life.
        isWinner ? updateScore(roundPoints) : updateLives();
        updateStreak(isWinner);

        // IF the conditions for a special event are met then add then special event is activated.
        if (streakMilestone(streak + 1) && addSpecialEvent()) {
            const updatedEventData: specialEvent = getRandomSpecialEvent(specialEventData);
            setSpecialEvent(updatedEventData);
            updateScore(30000000);
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
                <div>
                    <h2>{specialEvent.eventData.text}</h2>
                    <p>{specialEvent.eventData.name}</p>
                </div>
            ) : null}
        </div>
    );
};

export default GameplayResult;
