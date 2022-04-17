import React from 'react';

interface props {
    text: string;
}

const Question = ({ text }: props) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    );
};

export default Question;
