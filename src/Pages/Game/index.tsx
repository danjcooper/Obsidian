import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { housemateData, gameInfo } from '../../Interfaces';
import { updateHousemateData } from '../../Actions/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

const Game = () => {
    const [housemateData, setHousemateData] = useState<housemateData[] | null>(null);
    const gameInfo: gameInfo = useSelector((state: gameInfo) => state);

    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
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
            {housemateData ? (
                housemateData.map(housemate => <p key={housemate.id}>{housemate.name}</p>)
            ) : (
                <h2>loading</h2>
            )}
        </div>
    );
};

export default Game;
