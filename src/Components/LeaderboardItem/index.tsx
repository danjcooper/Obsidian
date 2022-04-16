import React from 'react';

const LeaderboardItem = ({ data }: any) => {
    return (
        <p>
            {data.username} : {data.score}
        </p>
    );
};

export default LeaderboardItem;
