import React from 'react';
import { props } from './interfaces';

const ScoreBoard = ({ score, lives, streak }: props) => {
    return (
        <div>
            Score: {score} | Lives: {lives} | Streak: {streak}
        </div>
    );
};

export default ScoreBoard;
