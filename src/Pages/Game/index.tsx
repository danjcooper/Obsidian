import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { housemateData, gameInfo, formError } from '../../Interfaces';
import { updateHousemateData } from '../../Actions/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ErrorMessages, GameStates } from '../../Enums';
import { Loader, GameplayAnsweing, GameplayGameOver, GameplayResult } from '../../Components';
import { generateRoundData } from '../../Helpers';

const Game = () => {
    const [housemateData, setHousemateData] = useState<housemateData[] | null>(null);
    const [formError, setFormError] = useState<formError>({ error: false, message: ErrorMessages.NO_ERROR });
    const [gameState, setGameState] = useState<string>(GameStates.ANSWERING);
    const [roundData, setRoundData] = useState<any>(null);
    const [isWinner, setIsWinner] = useState<boolean | null>(null);

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

    const updateGameState = (newState: string): void => {
        switch (newState) {
            case GameStates.ANSWERING:
                setIsWinner(null); // Reset if the user was a winner.
                break;
            case GameStates.RESULT:
                setRoundData(true); // Update the round data for the next round.
                break;
            default:
                break;
        }
        setGameState(newState);
    };

    const getRoundData = () => {
        return;
    };

    const updateIsWinner = (result: boolean) => setIsWinner(result);

    const renderGameplayComponent = () => {
        switch (gameState) {
            case GameStates.ANSWERING:
                return (
                    <GameplayAnsweing
                        roundData={'Hi'}
                        updateGameState={updateGameState}
                        updateIsWinner={updateIsWinner}
                    />
                );
            case GameStates.RESULT:
                return <GameplayResult isWinner={isWinner} updateGameState={updateGameState} />;
            case GameStates.GAME_OVER:
                return <GameplayGameOver />;

            default:
                return <Loader />;
        }
    };

    return (
        <div>
            {housemateData ? renderGameplayComponent() : <Loader />}
            {formError.error ? <p>{formError.message}</p> : null}
        </div>
    );
};

export default Game;
