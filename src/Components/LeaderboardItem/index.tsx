import React from 'react';
import { leaderboard } from '../../Interfaces';

interface leaderboardItemProps {
    data: leaderboard;
}

const LeaderboardItem = ({ data }: leaderboardItemProps) => {
    return (
        <p>
            {data.username} : {data.score}
        </p>
    );
};

export default LeaderboardItem;
