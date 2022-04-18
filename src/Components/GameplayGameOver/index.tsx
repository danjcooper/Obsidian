import axios, { Axios, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoard from '../LeaderBoard';
import {} from '../../Helpers';
import Loader from '../Loader';
import { props } from './interfaces';

const GameplayGameOver = ({ username, score }: props) => {
    const [scoreAddedToLeaderboard, setScoreAddedToLeaderboard] = useState<boolean>(false);

    useEffect(() => {
        const updateLeaderboard = async () => {
            const body = { username: username, score: score };
            const response: AxiosResponse = await axios.post(
                `https://terrace-house-server.herokuapp.com/leaderboard/new`,
                body
            );
            setScoreAddedToLeaderboard(response.status === 200 ? true : false);
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
                {scoreAddedToLeaderboard ? <LeaderBoard username={username} score={score} /> : <Loader />}
            </section>
            <Link to='/settings'>
                <button type='button'>PLAY AGAIN</button>
            </Link>
        </div>
    );
};

export default GameplayGameOver;
