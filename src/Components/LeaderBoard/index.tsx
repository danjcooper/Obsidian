import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { leaderboard } from '../../Interfaces';
import { Loader, LeaderboardItem } from '../index';

const LeaderBoard = () => {
    const [leaderboardData, setLeaderboardData] = useState<leaderboard[] | null>(null);

    useEffect(() => {
        const getLeaderboard = async () => {
            const result: AxiosResponse = await axios.get('https://terrace-house-server.herokuapp.com/leaderboard/all');
            setLeaderboardData(result.data);
        };
        getLeaderboard();
    }, []);

    return (
        <>
            {leaderboardData ? (
                leaderboardData.map((item, i) => <LeaderboardItem key={item.id} data={item} />)
            ) : (
                <Loader />
            )}
        </>
    );
};

export default LeaderBoard;
