import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { housemateData, gameInfo, formError } from '../../Interfaces';
import { updateHousemateData } from '../../Actions/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ErrorMessages, GameStates } from '../../Enums';
import { Loader, GameplayAnsweing, GameplayGameOver, GameplayResult } from '../../Components';
import { generateRoundData } from '../../Helpers';

// TODO - Add type for effectData.
// TODO - Add effectData to redux store.
// TODO - Add score and life component

const Game = () => {
    const [housemateData, setHousemateData] = useState<housemateData[] | null>(null);
    const [effectsData, setEffectsData] = useState<any>();
    const [formError, setFormError] = useState<formError>({ error: false, message: ErrorMessages.NO_ERROR });
    const [gameState, setGameState] = useState<string>(GameStates.ANSWERING);
    const [roundData, setRoundData] = useState<any>(null);
    const [isWinner, setIsWinner] = useState<boolean | null>(null);
    const [score, setScore] = useState<number>(0);
    const [lives, setLives] = useState<number>(3);

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
            const effectsResult: AxiosResponse = await axios.get(`https://terrace-house-server.herokuapp.com/effects`);

            setEffectsData(effectsResult.data);
            setHousemateData(result.data);
        };
        getData();
    }, []);

    useEffect(() => {
        if (housemateData !== null) dispatch(updateHousemateData(housemateData));
    }, [housemateData]);

    useEffect(() => {
        console.log(roundData);
    }, [roundData]);

    useEffect(() => {
        if (formError.error) {
            setGameState(GameStates.GAME_OVER);
        }
    }, [formError]);

    useEffect(() => {
        if (lives <= 0) updateGameState(GameStates.GAME_OVER);
    }, [lives]);

    const updateGameState = (newState: string): void => {
        switch (newState) {
            case GameStates.ANSWERING:
                // Update the round data for the next round.
                setIsWinner(null); // Reset if the user was a winner.
                break;
            case GameStates.RESULT:
                break;
            default:
                break;
        }
        setGameState(newState);
    };

    const updateIsWinner = (result: boolean) => setIsWinner(result);

    const updateScore = () => setScore(prevState => (prevState += 1000));
    const updateLives = () => setLives(prevState => prevState - 1);

    const renderGameplayComponent = () => {
        switch (gameState) {
            case GameStates.ANSWERING:
                return (
                    <GameplayAnsweing
                        housemateData={housemateData}
                        updateGameState={updateGameState}
                        updateIsWinner={updateIsWinner}
                    />
                );
            case GameStates.RESULT:
                return (
                    <GameplayResult
                        isWinner={isWinner}
                        updateScore={updateScore}
                        updateLives={updateLives}
                        updateGameState={updateGameState}
                        specialEventData={effectsData}
                    />
                );
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
