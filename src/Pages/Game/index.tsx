import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { housemateData, gameInfo, formError } from '../../Interfaces';
import { updateHousemateData } from '../../Actions/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ErrorMessages } from '../../Enums';
import { Loader } from '../../Components';

const Game = () => {
    const [housemateData, setHousemateData] = useState<housemateData[] | null>(null);
    const [formError, setFormError] = useState<formError>({ error: false, message: ErrorMessages.NO_ERROR });

    const gameInfo: gameInfo = useSelector((state: gameInfo) => state);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            if (!gameInfo.queryRequestString) {
                // TODO maybe this should just redirect.
                setFormError({
                    error: true,
                    message: ErrorMessages.NO_QUERY_STRING,
                });
            }
            const result: AxiosResponse = await axios.get(
                `https://terrace-house-server.herokuapp.com/housemates/${gameInfo.queryRequestString}`
            );
            setHousemateData(result.data);
        };
        getData();
    }, []);

    useEffect(() => {
        if (housemateData !== null) dispatch(updateHousemateData(housemateData));
    }, [housemateData]);

    return (
        <div>
            {housemateData ? housemateData.map(housemate => <p key={housemate.id}>{housemate.name}</p>) : <Loader />}
            {formError.error ? <p>{formError.message}</p> : null}
        </div>
    );
};

export default Game;
