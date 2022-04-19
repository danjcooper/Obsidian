import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const Question = ({ text }: props) => {
    return (
        <div className={styles.question}>
            <h2>{text}</h2>
        </div>
    );
};

export default Question;
