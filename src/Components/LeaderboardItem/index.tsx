import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const LeaderboardItem = ({ data, isUsersScore }: props) => {
    return (
        <tr className={isUsersScore ? styles.active : ''}>
            <td className={styles.left}>{data.position}</td>
            <td className={styles.left}>{data.username}</td>
            <td className={styles.right}>{data.score}</td>
        </tr>
    );
};

export default LeaderboardItem;
