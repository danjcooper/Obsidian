import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SeasonCheckbox, Loader, ErrorModal, SeasonSelectionForm } from '../../Components';
import { seasonData, formError } from '../../Interfaces';
import { generateSeasonsString } from '../../Helpers';
import { ErrorMessages } from '../../Enums';
import { updateSeasonData, updateUserName, updateQueryRequestString } from '../../Actions/GameInfo';
import { Dispatch } from 'redux';
import styles from './style.module.css';
const Filter = require('bad-words');

const GameSettings = () => {
    const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);
    const [username, setUsername] = useState<string>('');
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
    const [selectedSeasonsQueryString, setSelectedSeasonsQueryString] = useState<string>('');
    const [formError, setFormError] = useState<formError>({ error: false, message: ErrorMessages.NO_ERROR });

    const dispatch: Dispatch = useDispatch();
    const navigate = useNavigate();
    const filter = new Filter();

    useEffect(() => {
        const getData = async () => {
            const result: AxiosResponse = await axios.get('https://terrace-house-server.herokuapp.com/seasons');
            setSeasonData(result.data);
        };
        getData();
    }, []);

    useEffect(() => {
        if (seasonData !== null) dispatch(updateSeasonData(seasonData));
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
        if (formError.error) return;

        if (username.length <= 0 || selectedSeasonsQueryString.length <= 0) {
            const errorMessage: string =
                username.length <= 0 ? ErrorMessages.NO_USERNAME : ErrorMessages.NO_SEASON_SELECTED;

            setFormError({
                error: true,
                message: errorMessage,
            });
            return;
        }
        dispatch(updateUserName(username));
        dispatch(updateQueryRequestString(selectedSeasonsQueryString));
        navigate('/game');
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (formError.message === ErrorMessages.INVALID_USERNAME && !filter.isProfane(e.target.value)) {
            setFormError({
                error: false,
                message: ErrorMessages.NO_ERROR,
            });
        } else if (filter.isProfane(e.target.value)) {
            setFormError({
                error: true,
                message: ErrorMessages.INVALID_USERNAME,
            });
        } else {
            setUsername(e.target.value);
        }
    };

    return (
        <section className={styles.formContainer}>
            {seasonData ? (
                <>
                    <SeasonSelectionForm />
                    <form className={styles.seasonsForms} onSubmit={handleSubmit}>
                        {seasonData.map(i => (
                            <SeasonCheckbox handleClick={handleClick} key={i.id} data={i} />
                        ))}
                        <input onChange={handleUsernameChange} type='text' placeholder='USERNAME' />
                        <button type='submit'>Play!</button>
                        {formError.error ? <ErrorModal message={formError.message} /> : null}
                    </form>
                </>
            ) : (
                <Loader />
            )}
        </section>
    );
};

export default GameSettings;
