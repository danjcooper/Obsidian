import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { leaderboard } from '../../Interfaces';
import LeaderBoard from '../LeaderBoard';
import LeaderboardItem from '../LeaderboardItem';
import Loader from '../Loader';

const MainLeaderBoard = () => {
    const [leaderboardData, setLeaderboardData] = useState<leaderboard[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await (await axios.get('https://terrace-house-server.herokuapp.com/leaderboard/all')).data;
            setLeaderboardData(data);
        };
        getData();
    });

    return <>{leaderboardData ? <LeaderBoard data={leaderboardData} /> : <Loader />}</>;
};

export default MainLeaderBoard;
