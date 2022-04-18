import React, { useState, useEffect } from 'react';
import { GameStates } from '../../Enums';
import { generateRoundData } from '../../Helpers';
import { roundData } from '../../Interfaces';
import { props } from './interfaces';
import { Loader, Question, CountdownTimer, HousemateCard } from '../index';

const GameplayAnswering = ({ housemateData, updateGameState, updateIsWinner, updateRoundPoints }: props) => {
    const [roundData, setRoundData] = useState<roundData | null>(null);
    const [points, setPoints] = useState<number>(100);
    const [answered, setAnswered] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => setPoints(points => (points > 0 ? points - 1 : points)), 100);
        return () => clearInterval(interval);
    }, [answered]);

    useEffect(() => {
        setRoundData(generateRoundData(housemateData));
    }, [housemateData]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id: number = parseInt(e.currentTarget.id);

        if (roundData) {
            const result: boolean = id === roundData.winner ? true : false;
            setAnswered(true);
            updateIsWinner(result);
            updateRoundPoints(points);
            updateGameState(GameStates.RESULT);
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default GameplayAnswering;
