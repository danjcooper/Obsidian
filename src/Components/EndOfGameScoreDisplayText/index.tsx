import React from 'react';
import { props } from './interfaces';
import { Link } from 'react-router-dom';
import GameOverScoreText from './components/GameOverScoreText/GameOverScoreText';
import styles from './style.module.css';

const EndOfGameScoreDisplayText = ({ usersScoreData }: props) => {
    return (
        <section className={styles.gameOverText}>
            <h2 className={styles.headline}>Game Over</h2>

            {usersScoreData && <GameOverScoreText usersScoreData={usersScoreData} />}
            <Link to='/settings'>
                <button type='button'>PLAY AGAIN</button>
            </Link>
        </section>
    );
};

export default EndOfGameScoreDisplayText;
