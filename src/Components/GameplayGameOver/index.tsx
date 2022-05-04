import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoard from '../LeaderBoard';
import {} from '../../Helpers';
import Loader from '../Loader';
import { props } from './interfaces';
import { leaderboard } from '../../Interfaces';
import LeaderboardItem from '../LeaderboardItem';
import styles from './styles.module.css';

const GameplayGameOver = ({ username, score }: props) => {
    // const [scoreAddedToLeaderboard, setScoreAddedToLeaderboard] = useState<boolean>(false);
    const [leaderboardData, setLeaderboardData] = useState<leaderboard[] | null>(null);

    useEffect(() => {
        const updateLeaderboard = async () => {
            const body = { username: username, score: score };
            const response: AxiosResponse = await axios.post(
                `https://terrace-house-server.herokuapp.com/leaderboard/new`,
                body
            );
            console.log(response.data);

            setLeaderboardData(response.data);
            // setScoreAddedToLeaderboard(response.status === 200 ? true : false);
        };
        updateLeaderboard();
    }, []);

    return (
        <div>
            <section>
                <h2>Game Over</h2>
                <h2>You scored: {score}</h2>
            </section>
            <section>
                {leaderboardData ? (
                    leaderboardData.map((item, i) => (
                        <LeaderboardItem data={item} isUsersScore={item.isCurrentScore ? item.isCurrentScore : false} />
                    ))
                ) : (
                    <Loader />
                )}
            </section>
            <Link to='/settings'>
                <button type='button'>PLAY AGAIN</button>
            </Link>
        </div>
    );
};

export default GameplayGameOver;
