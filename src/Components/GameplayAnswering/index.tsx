import React, { useState, useEffect } from 'react';

type updateGameState = (newState: string) => void;

const GameplayAnswering = ({ roundData, updateGameState, updateIsWinner }: any) => {
    const [isWinner, setIsWinner] = useState<boolean | null>(null);

    useEffect(() => {
        if (isWinner !== null) updateIsWinner(isWinner);
    }, [isWinner]);

    return <div>GameplayAnswering</div>;
};

export default GameplayAnswering;
