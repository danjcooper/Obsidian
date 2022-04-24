import React, { useEffect, useState } from 'react';
import { useSpring, animated, easings } from 'react-spring';
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
    correctHousemate,
}: props) => {
    const [specialEvent, setSpecialEvent] = useState<specialEvent>({
        triggered: false,
        eventData: { name: null, positive: null, text: null, imageUrl: '' },
    });

    const bgStyle = {
        background: isWinner ? '#64c368' : '#C1C1C1',
    };

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            duration: 500,
            easing: easings.linear,
        },
    });

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
                <animated.img
                    src={`https://raw.githubusercontent.com/danjcooper/Obsidian/main/images${correctHousemate.imageUrl}`}
                    alt='winning housemate image'
                    style={props}
                />

                {isWinner ? (
                    <>
                        <h2>Correct!</h2>
                    </>
                ) : (
                    <h2>Incorrect 🙁</h2>
                )}
                <h3>The correct answer was {correctHousemate.name}</h3>
                <p>You scored {roundPoints} points.</p>

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
