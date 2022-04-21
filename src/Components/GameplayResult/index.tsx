import React, { useEffect, useState, useRef, LegacyRef, CSSProperties } from 'react';
import { GameStates } from '../../Enums';
import { specialEvent } from '../../Interfaces';
import { getRandomSpecialEvent, addSpecialEvent, streakMilestone } from '../../Helpers';
import { props } from './interfaces';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import Modal from '../Modal';
import Incident from '../Incident';

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
        eventData: { name: null, positive: null, text: null, imageUrl: '' },
    });

    const divRef = useRef<HTMLDivElement>(null);

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
        if (divRef.current && specialEvent.triggered) divRef.current.style.top = '0';
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
                    <div className={styles.eventDiv} ref={divRef}>
                        <h2>Incident!</h2>
                        <img src={specialEvent.eventData.imageUrl} alt='image of event depicted' />
                        <h2>{specialEvent.eventData.text}</h2>
                        <h3>{specialEvent.eventData.positive ? '+' : '-'} 100 bonus points</h3>
                        <button onClick={handleClick}>Next Round</button>
                    </div>
                    <Incident />
                </Modal>
            </section>

            <button onClick={handleClick}>Next Round</button>
        </div>
    );
};

export default GameplayResult;
