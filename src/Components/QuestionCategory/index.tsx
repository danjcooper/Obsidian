import React from 'react';
import { QuestionArticle } from '..';
import { props } from './interfaces';
import styles from './style.module.css';

const QuestionCategory = ({ categoryData, index }: props) => {
    return (
        <section id={index.toString()} className={styles.categoryContainer}>
            <h2 className={styles.categoryHeader}>{categoryData.categoryName}</h2>
            {categoryData.questions.map(question => !question.hidden && <QuestionArticle question={question} />)}
        </section>
    );
};

export default QuestionCategory;
