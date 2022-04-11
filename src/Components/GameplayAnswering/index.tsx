import React, { useState, useEffect } from 'react';
import { GameStates } from '../../Enums';
import { generateRoundData } from '../../Helpers';
import { roundData } from '../../Interfaces';
import HousemateCard from '../HousemateCard';
import Loader from '../Loader';

const GameplayAnswering = ({ housemateData, updateGameState, updateIsWinner }: any) => {
    const [roundData, setRoundData] = useState<roundData | null>(null);

    useEffect(() => {
        setRoundData(generateRoundData(housemateData));
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id: number = parseInt(e.currentTarget.id);
        let result;
        if (roundData) result = id === roundData.winner ? true : false;
        updateIsWinner(result);
        updateGameState(GameStates.RESULT);
    };

    return (
        <div>
            {roundData ? (
                <>
                    <HousemateCard housemateData={roundData.housemateOne} handleClick={handleClick} />
                    <HousemateCard housemateData={roundData.housemateTwo} handleClick={handleClick} />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default GameplayAnswering;
