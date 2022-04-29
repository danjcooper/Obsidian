import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const QuestionArticle = ({ question }: props) => {
    return (
        <article>
            <h3 className={styles.categoryTitle}>{question.title}</h3>
            <p className={styles.categoryText}>{question.text}</p>
        </article>
    );
};

export default QuestionArticle;
