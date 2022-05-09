import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SeasonCheckbox, Loader } from '../../Components';
import { seasonData, gameInfo } from '../../Interfaces';
import { formError, generateSeasonsString } from '../../Helpers';
import { updateSeasonData, updateUserName, updateQueryRequestString } from '../../Actions/GameInfo';
import { Dispatch } from 'redux';
import styles from './style.module.css';

const GameSettings = () => {
    const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);
    const [username, setUsername] = useState<string>('');
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
    const [selectedSeasonsQueryString, setSelectedSeasonsQueryString] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isRePlay, setIsRePlay] = useState<boolean>(false);

    const dispatch: Dispatch = useDispatch();
    const navigate = useNavigate();

    const gameInfo: gameInfo = useSelector((state: gameInfo) => state);

    useEffect(() => {
        if (gameInfo) {
            setUsername(gameInfo.userName);
        }
    }, [gameInfo]);

    useEffect(() => {
        const getData = async () => {
            const result: AxiosResponse = await axios.get('https://terrace-house-server.herokuapp.com/seasons');
            setSeasonData(result.data);
        };
        getData();
    }, []);

    useEffect(() => {
        if (seasonData) dispatch(updateSeasonData(seasonData));
    }, [seasonData]);

    useEffect(() => {
        setSelectedSeasonsQueryString(generateSeasonsString(selectedSeasons));
    }, [selectedSeasons]);

    const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
        const input: string = e.currentTarget.value;
        const updatedState: string[] = [...selectedSeasons];

        const label = e.currentTarget.closest('label');

        if (label) label.classList.toggle('active');

        selectedSeasons.indexOf(input) === -1
            ? updatedState.push(input)
            : updatedState.splice(selectedSeasons.indexOf(input), 1);

        setSelectedSeasons(updatedState);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (formError(username, selectedSeasonsQueryString)) {
            setErrorMessage('Form error. Please enter a username and select at least one season.');
            return;
        }

        dispatch(updateUserName(username));
        dispatch(updateQueryRequestString(selectedSeasonsQueryString));
        navigate('/game');
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const maxUsernameLength = 15;

        if (e.target.value.length > maxUsernameLength) {
            setErrorMessage(`Username cannot be longer than ${maxUsernameLength} characters`);
            return;
        } else {
            setErrorMessage(null);
            setUsername(e.target.value);
        }
    };

    return (
        <section className={styles.formContainer}>
            {seasonData ? (
                <>
                    <h1 className={styles.description}>SELECT SEASONS</h1>
                    <form className={styles.seasonsForms} onSubmit={handleSubmit}>
                        <p>{errorMessage}</p>
                        {seasonData.map(i => (
                            <SeasonCheckbox handleClick={handleClick} key={i.id} data={i} />
                        ))}
                        <input
                            className={styles.usernameInput}
                            onChange={handleUsernameChange}
                            type='text'
                            placeholder='USERNAME'
                            value={username}
                        />
                        <button type='submit'>Play!</button>
                    </form>
                </>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default GameSettings;
