import React, { useState, useEffect } from 'react';
import { GameStates } from '../../Enums';
import { generateRoundData } from '../../Helpers';
import { roundData } from '../../Interfaces';
import { props } from './interfaces';
import { Loader, Question, CountdownTimer, HousemateCard } from '../index';
import styles from './style.module.css';

const GameplayAnswering = ({
    housemateData,
    updateGameState,
    updateIsWinner,
    updateRoundPoints,
    updateCorrectHousemate,
}: props) => {
    const [roundData, setRoundData] = useState<roundData | null>(null);
    const [points, setPoints] = useState<number>(100);

    useEffect(() => {
        const interval = setInterval(() => setPoints(points => (points > 0 ? points - 1 : points)), 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setRoundData(generateRoundData(housemateData));
    }, [housemateData]);

    useEffect(() => {
        points <= 0 ? endRound(false, 0) : null;
    }, [points]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id: number = parseInt(e.currentTarget.id);

        if (roundData) {
            const result: boolean = id === roundData.winner ? true : false;
            endRound(result, points);
        }
    };

    const endRound = (isWinner: boolean, points: number) => {
        updateIsWinner(isWinner);
        updateRoundPoints(points);
        if (roundData) {
            updateCorrectHousemate(
                roundData.housemateOne.id === roundData.winner ? roundData.housemateOne : roundData.housemateTwo
            );
        }

        updateGameState(GameStates.RESULT);
    };

    return (
        <section className={styles.housemateContainer}>
            {roundData ? (
                <>
                    <CountdownTimer points={points} />
                    <HousemateCard housemateData={roundData.housemateOne} handleClick={handleClick} />
                    <Question text={roundData.question} />
                    <HousemateCard housemateData={roundData.housemateTwo} handleClick={handleClick} />
                </>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default GameplayAnswering;
