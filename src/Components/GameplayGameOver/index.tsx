import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import LeaderBoard from '../LeaderBoard';
import {} from '../../Helpers';
import Loader from '../Loader';
import { props, usersScoreInfo } from './interfaces';
import { leaderboard } from '../../Interfaces';
import LeaderboardItem from '../LeaderboardItem';
import styles from './styles.module.css';
import EndOfGameScoreDisplayText from '../EndOfGameScoreDisplayText';

const GameplayGameOver = ({ username, score }: props) => {
    const [leaderboardData, setLeaderboardData] = useState<leaderboard[] | null>(null);
    const [usersScoreData, setUsersScoreData] = useState<usersScoreInfo | null>(null);

    useEffect(() => {
        const updateLeaderboard = async () => {
            const body = { username: username, score: score };
            const response: AxiosResponse = await axios.post(
                `https://terrace-house-server.herokuapp.com/leaderboard/new`,
                body
            );
            console.log(response.data);

            setLeaderboardData(response.data);
        };
        updateLeaderboard();
    }, []);

    useEffect(() => {
        if (leaderboardData) {
            const usersScore = leaderboardData.filter(a => a.isCurrentScore);
            setUsersScoreData(usersScore[0]);
        }
    }, [leaderboardData]);

    return (
        <div>
            {usersScoreData && <EndOfGameScoreDisplayText usersScoreData={usersScoreData} />}
            <section>
                {leaderboardData ? (
                    leaderboardData.map((item, i) => (
                        <LeaderboardItem key={i} data={item} isUsersScore={!!item.isCurrentScore} />
                    ))
                ) : (
                    <Loader />
                )}
            </section>
        </div>
    );
};

export default GameplayGameOver;
