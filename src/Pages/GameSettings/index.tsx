import React, { useState, useEffect, ReactEventHandler } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { SeasonCheckbox } from '../../Components';
import { gameInfo, seasonData } from '../../Interfaces';
import { ActionTypes, SeasonCodes } from '../../Enums';
//TODO bring in actions.
import { updateSeasonData, updateUserName } from '../../Actions/GameInfo';
import { Dispatch } from 'redux';

const GameSettings = () => {
    const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);
    const [username, setUsername] = useState<string>('');
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);

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

    const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
        // e.preventDefault();

        const input = e.currentTarget.value;

        const updatedState = [...selectedSeasons];

        console.log(input);

        // console.log(e.currentTarget.querySelector('input'));
        selectedSeasons.indexOf(input) === -1
            ? updatedState.push(input)
            : updatedState.splice(selectedSeasons.indexOf(input), 1);

        setSelectedSeasons(updatedState);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(updateUserName(username));
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
        </div>
    );
};

export default GameSettings;
