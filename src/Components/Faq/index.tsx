import React from 'react';
import { FaqNav, QuestionCategory } from '..';
import questions from './questionData.json';

const Faq = () => {
    return (
        <>
            <FaqNav questions={questions} />
            {questions.map((item, i) => (
                <QuestionCategory key={i} categoryData={item} index={i} />
            ))}
        </>
    );
};

export default Faq;
