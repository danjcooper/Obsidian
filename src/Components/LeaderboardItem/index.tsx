import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const LeaderboardItem = ({ data, isUsersScore }: props) => {
    return (
        <p className={isUsersScore ? styles.active : ''}>
            {data.username} : {data.score}
        </p>
    );
};

export default LeaderboardItem;
