import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { housemateData, gameInfo, formError, effectData } from '../../Interfaces';
import { updateHousemateData } from '../../Actions/GameInfo';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ErrorMessages, GameStates } from '../../Enums';
import { Loader, GameplayAnsweing, GameplayGameOver, GameplayResult, ScoreBoard } from '../../Components';

// TODO - Add effectData to redux store.

const Game = () => {
    const [housemateData, setHousemateData] = useState<housemateData[] | null>(null);
    const [effectsData, setEffectsData] = useState<effectData[] | null>(null);
    const [gameState, setGameState] = useState<string>(GameStates.ANSWERING);
    const [isWinner, setIsWinner] = useState<boolean | null>(null);
    const [score, setScore] = useState<number>(0);
    const [lives, setLives] = useState<number>(3);
    const [streak, setStreak] = useState<number>(0);
    const [roundPoints, setRoundPoints] = useState<number>(0);
    const [correctHousemate, setCorrectHousemate] = useState<any>(null);

    const gameInfo: gameInfo = useSelector((state: gameInfo) => state);
    const dispatch: Dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            if (!gameInfo.queryRequestString) {
                //If the user goes directly to this page, or the game is interrupted, we redirect.
                navigate('/settings');
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
        if (lives <= 0) updateGameState(GameStates.GAME_OVER);
    }, [lives]);

    const updateCorrectHousemate = (input: any) => {
        setCorrectHousemate(input);
    };

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

    const updateIsWinner = (result: boolean): void => setIsWinner(result);

    const updateStreak = (isCorrect: boolean): void => {
        setStreak(prevState => {
            return isCorrect ? prevState + 1 : 0;
        });
    };

    const updateScore = (points: number, positive: boolean = true) =>
        setScore(prevState => {
            return positive ? (prevState += points) : (prevState -= points);
        });
    const updateLives = () => setLives(prevState => prevState - 1);
    const updateRoundPoints = (input: number) => setRoundPoints(input);

    const renderGameplayComponent = () => {
        switch (gameState) {
            case GameStates.ANSWERING:
                return (
                    <GameplayAnsweing
                        housemateData={housemateData!}
                        updateGameState={updateGameState}
                        updateIsWinner={updateIsWinner}
                        updateRoundPoints={updateRoundPoints}
                        updateCorrectHousemate={updateCorrectHousemate}
                    />
                );
            case GameStates.RESULT:
                return (
                    <GameplayResult
                        isWinner={isWinner}
                        updateScore={updateScore}
                        updateLives={updateLives}
                        updateStreak={updateStreak}
                        updateGameState={updateGameState}
                        specialEventData={effectsData}
                        streak={streak}
                        roundPoints={roundPoints}
                        correctHousemate={correctHousemate}
                    />
                );
            case GameStates.GAME_OVER:
                return <GameplayGameOver username={gameInfo.userName} score={score} />;

            default:
                return <Loader />;
        }
    };

    return (
        <>
            <ScoreBoard score={score} lives={lives} streak={streak} />
            <>{housemateData ? renderGameplayComponent() : <Loader />}</>
        </>
    );
};

export default Game;
