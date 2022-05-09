import React from 'react';
import { LeaderboardItem } from '../index';
import { props } from './interfaces';

const LeaderBoard = ({ data }: props) => {
    return (
        <>
            {data.map((item, index) => (
                <LeaderboardItem key={index} data={item} isUsersScore={!!item.isCurrentScore} />
            ))}
        </>
    );
};

export default LeaderBoard;
