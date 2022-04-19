import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';
import { specialEvent } from '../../Interfaces';
import { getRandomSpecialEvent, addSpecialEvent, streakMilestone } from '../../Helpers';
import { props } from './interfaces';
import styles from './style.module.css';
import Modal from '../Modal';

export const GameplayResult = ({
    isWinner,
    updateGameState,
    updateScore,
    updateLives,
    specialEventData,
    updateStreak,
    streak,
    roundPoints,
}: props) => {
    const [specialEvent, setSpecialEvent] = useState<specialEvent>({
        triggered: false,
        eventData: { text: null, positive: null, name: null },
    });

    const bgStyle = {
        background: isWinner ? '#64c368' : '#E07878',
    };

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
        <div style={bgStyle} className={styles.results + ' page'}>
            <section>
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/6/60/Terrace_House_Franchise_Logo.jpg'
                    alt='winning housemate image'
                />
                {isWinner ? (
                    <>
                        <h2>Correct!</h2> <p>You scored {roundPoints} points.</p>
                    </>
                ) : (
                    <h2>Wrong!</h2>
                )}
                <Modal />
            </section>

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
