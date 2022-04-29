import React from 'react';
import questions from './questionData.json';
import { QuestionCategory } from '../../Components';

const About = () => {
    // TODO - Update questions to visible in JSON.
    return (
        <>
            <nav>
                {questions.map(category => (
                    <a href='#'>{category.categoryName}</a>
                ))}
            </nav>
            {questions.map((item, i) => (
                <QuestionCategory key={i} categoryData={item} />
            ))}
        </>
    );
};

export default About;
