import React from 'react';
import { props } from './interfaces';

const LeaderboardItem = ({ data }: props) => {
    return (
        <p>
            {data.username} : {data.score}
        </p>
    );
};

export default LeaderboardItem;
