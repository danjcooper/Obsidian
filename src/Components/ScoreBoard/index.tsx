import React from 'react';

const ScoreBoard = ({ score, lives, streak }: any) => {
    return (
        <div>
            Score: {score} | Lives: {lives} | Streak: {streak}
        </div>
    );
};

export default ScoreBoard;
