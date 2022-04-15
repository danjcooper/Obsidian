import React, { useState, useEffect, CSSProperties } from 'react';
import { GameStates } from '../../Enums';
import { generateRoundData } from '../../Helpers';
import { roundData } from '../../Interfaces';
import HousemateCard from '../HousemateCard';
import Loader from '../Loader';

const GameplayAnswering = ({ housemateData, updateGameState, updateIsWinner }: any) => {
    const [roundData, setRoundData] = useState<roundData | null>(null);
    const [points, setPoints] = useState<number>(100);
    const [answered, setAnswered] = useState<boolean>(false);

    const barStyle = {
        width: `${points}vw`,
        background: `blue`,
    };

    useEffect(() => {
        const interval = setInterval(() => setPoints(points => (points > 0 ? points - 1 : points)), 100);
        return () => clearInterval(interval);
    }, [answered]);

    useEffect(() => {
        setRoundData(generateRoundData(housemateData));
    }, [housemateData]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id: number = parseInt(e.currentTarget.id);
        let result;
        if (roundData) result = id === roundData.winner ? true : false;
        setAnswered(true);
        updateIsWinner(result);
        updateGameState(GameStates.RESULT);
    };

    const styles: CSSProperties = {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',

        width: '100vw',
        height: '60px',
        background: 'white',
    };

    return (
        <div>
            {roundData ? (
                <>
                    <HousemateCard housemateData={roundData.housemateOne} handleClick={handleClick} />
                    <h2 style={styles}>{roundData.question}</h2>
                    <div style={barStyle}>
                        <p>{points}</p>
                    </div>
                    <HousemateCard housemateData={roundData.housemateTwo} handleClick={handleClick} />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default GameplayAnswering;
