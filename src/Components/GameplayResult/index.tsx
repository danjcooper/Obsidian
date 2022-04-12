import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';

export const GameplayResult = ({ isWinner, updateGameState, updateScore, updateLives, specialEventData }: any) => {
    const [specialEvent, setSpecialEvent] = useState({
        triggered: false,
        eventData: { text: null, positive: null, name: null },
    });

    useEffect(() => {
        isWinner ? updateScore() : updateLives();
        if (coinFlip()) {
            const eventData = getRandomSpecialEvent(specialEventData);
            setSpecialEvent({ ...eventData, triggered: true });
        }
    }, []);

    // TODO - Move into helpers.
    // TODO - Refactor to make more random than 50/50
    const coinFlip = () => {
        return Math.round(Math.random()) % 2 === 0;
    };

    const getRandomSpecialEvent = (eventData: any) => {
        const randomEvent = eventData[0];
        return {
            eventData: { text: randomEvent.description, positive: randomEvent.positive, name: randomEvent.housemate },
        };
    };

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
