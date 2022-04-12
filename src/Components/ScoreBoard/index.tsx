import React from 'react';

const ScoreBoard = ({ score, lives }: any) => {
    return (
        <div>
            Score: {score} | Lives: {lives}
        </div>
    );
};

export default ScoreBoard;
