import React from 'react';
import { props } from '../../interfaces';
import styles from './style.module.css';

const GameOverScoreText = ({ usersScoreData }: props) => {
    return (
        <section className={styles.textContainer}>
            <h2 className={styles.gameOverText}>
                Nice! You scored <span className={styles.bolder}>{usersScoreData.score} points</span> that puts you at
                <span className={styles.bolder}>#{usersScoreData.position}</span> on the laderboard. Great work.
            </h2>
        </section>
    );
};

export default GameOverScoreText;
