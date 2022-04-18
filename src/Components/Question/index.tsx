import React from 'react';
import { props } from './interfaces';

const Question = ({ text }: props) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    );
};

export default Question;
