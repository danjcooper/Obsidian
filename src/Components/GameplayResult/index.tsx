import React, { useEffect, useState } from 'react';
import { GameStates } from '../../Enums';
import { specialEvent } from '../../Interfaces';
import { getRandomSpecialEvent, addSpecialEvent } from '../../Helpers';
import { props } from './interfaces';
import styles from './style.module.css';
import Modal from '../Modal';
import Incident from '../Incident';

export const GameplayResult = ({
    isWinner,
    updateGameState,
    updateScore,
    updateLives,
    specialEventData,
    updateStreak,
    roundPoints,
}: props) => {
    const [specialEvent, setSpecialEvent] = useState<specialEvent>({
        triggered: false,
        eventData: { name: null, positive: null, text: null, imageUrl: '' },
    });

    const bgStyle = {
        background: isWinner ? '#64c368' : '#E07878',
    };

    useEffect(() => {
        // Based on the result, either add to the score or remove a life.
        isWinner ? updateScore(roundPoints) : updateLives();
        updateStreak(isWinner);

        // If the conditions for a special event are met then add then special event is activated.
        if (isWinner && addSpecialEvent()) setSpecialEvent(getRandomSpecialEvent(specialEventData));
    }, []);

    useEffect(() => {
        if (specialEvent.eventData.positive !== null) updateScore(100, specialEvent.eventData.positive);
    }, [specialEvent]);

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

                <Modal
                    show={specialEvent.triggered}
                    close={() => setSpecialEvent({ ...specialEvent, triggered: false })}
                >
                    <Incident
                        specialEvent={specialEvent}
                        close={() => setSpecialEvent({ ...specialEvent, triggered: false })}
                    />
                </Modal>
            </section>

            <button onClick={handleClick}>Next Round</button>
        </div>
    );
};

export default GameplayResult;
