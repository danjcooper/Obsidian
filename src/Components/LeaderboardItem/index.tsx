import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const LeaderboardItem = ({ data, isUsersScore }: props) => {
    return (
        <article
            className={isUsersScore ? `${styles.leaderboardItem} ${styles.usersScore}` : `${styles.leaderboardItem}`}
        >
            <p>{data.position}</p>
            <p>{data.username}</p>
            <p>{data.score}</p>
        </article>
    );
};

export default LeaderboardItem;
