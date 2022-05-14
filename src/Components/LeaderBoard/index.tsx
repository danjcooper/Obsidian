import React from 'react';
import { LeaderboardItem } from '../index';
import { props } from './interfaces';
import styles from './style.module.css';

const LeaderBoard = ({ data }: props) => {
    return (
        <>
            <h1 className={styles.leaderboardHeading}>HIGH SCORES</h1>
            {data.map((item, index) => (
                <LeaderboardItem key={index} data={item} isUsersScore={!!item.isCurrentScore} />
            ))}
        </>
    );
};

export default LeaderBoard;
