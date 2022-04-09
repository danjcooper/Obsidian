import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { SeasonCheckbox } from '../../Components';
import { gameInfo, seasonData, formError } from '../../Interfaces';
import { generateSeasonsString } from '../../Helpers';
//TODO bring in actions.
import { updateSeasonData, updateUserName, updateQueryRequestString } from '../../Actions/GameInfo';
import { Dispatch } from 'redux';

const GameSettings = () => {
    const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);
    const [username, setUsername] = useState<string>('');
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
    const [selectedSeasonsQueryString, setSelectedSeasonsQueryString] = useState<string>('');
    const [formError, setFormError] = useState<formError>({ error: false, message: '' });

    const dispatch: Dispatch = useDispatch();
    const gameInfo: gameInfo = useSelector((state: gameInfo) => state);

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
        if (username.length <= 0 || selectedSeasonsQueryString.length <= 0) {
            const errorMessage: string =
                username.length <= 0 ? 'Error, username is missing' : 'Error, No seasons selected';

            setFormError({
                error: true,
                message: errorMessage,
            });
            return;
        }
        dispatch(updateUserName(username));
        dispatch(updateQueryRequestString(selectedSeasonsQueryString));
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    };

    return (
        <div>
            {seasonData ? (
                <form onSubmit={handleSubmit}>
                    {seasonData.map(i => (
                        <SeasonCheckbox handleClick={handleClick} key={i.id} data={i} />
                    ))}
                    <input onChange={handleUsernameChange} type='text' />
                    <button type='submit'>Play!</button>
                </form>
            ) : null}
            {formError.error ? <p>{formError.message}</p> : null}
        </div>
    );
};

export default GameSettings;
