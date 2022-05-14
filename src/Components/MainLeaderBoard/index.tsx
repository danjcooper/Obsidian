import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { leaderboard } from '../../Interfaces';
import LeaderBoard from '../LeaderBoard';
import { PaginationController } from '..';
import Loader from '../Loader';

const MainLeaderBoard = () => {
    const [leaderboardData, setLeaderboardData] = useState<leaderboard[] | null>(null);
    const [offset, setOffset] = useState<number>(0);
    const [resultLimit, setResultLimit] = useState<number>(10);
    const [isEndOfResults, setIsEndOfResults] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            const data = await (
                await axios.get(`https://terrace-house-server.herokuapp.com/leaderboard/all/${resultLimit}/${offset}`)
            ).data;

            setIsEndOfResults(data.length < resultLimit ? true : false);
            setLeaderboardData(data);
        };
        getData();
    }, [offset]);

    const updateOffset = (input: number): void => {
        setOffset(input);
    };

    return (
        <>
            {leaderboardData ? (
                <>
                    <LeaderBoard data={leaderboardData} />
                    <PaginationController offset={offset} setOffset={updateOffset} isEndOfResults={isEndOfResults} />
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MainLeaderBoard;
