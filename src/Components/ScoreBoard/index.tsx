import React from 'react';

interface props {
    score: number;
    lives: number;
    streak: number;
}

const ScoreBoard = ({ score, lives, streak }: props) => {
    return (
        <div>
            Score: {score} | Lives: {lives} | Streak: {streak}
        </div>
    );
};

export default ScoreBoard;
