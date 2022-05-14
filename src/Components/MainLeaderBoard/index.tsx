import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { leaderboard } from '../../Interfaces';
import LeaderBoard from '../LeaderBoard';
import { LeaderboardItem, PaginationController } from '..';
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
            if (data.length < resultLimit) {
                setIsEndOfResults(true);
            } else if (data.length === resultLimit) {
                setIsEndOfResults(false);
            }
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
                    <PaginationController offset={offset} setOffset={updateOffset} isEndOfResults={isEndOfResults} />
                    <LeaderBoard data={leaderboardData} />
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MainLeaderBoard;
