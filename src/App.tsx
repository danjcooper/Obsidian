import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GameplayAnsweing, GameplayResult, ScoreBoard } from './Components';
import { Homepage, GameSettings, Game } from './Pages';

function App() {
    return (
        <div className='App'>
            <main>
                <Routes>
                    <Route path='/*' element={<Homepage />} />
                    <Route path='/settings' element={<GameSettings />} />
                    <Route path='/game' element={<Game />} />
                    <Route
                        path='/test'
                        element={
                            <>
                                <ScoreBoard lives={2} score={2} streak={2} />
                                <GameplayAnsweing
                                    housemateData={[
                                        {
                                            id: 5,
                                            name: 'Tsubasa Sato',
                                            nickname: 'null',
                                            tagline: 'null',
                                            totalWeeksInHouse: 21,
                                            totalLivedWith: 8,
                                            totalDates: 0,
                                            instagramFollowers: 0,
                                            age: 28,
                                            ageWhenEntered: 25,
                                            imageUrl: '/tsubasasato.png',
                                            seasonName: 'Opening New Doors',
                                        },
                                        {
                                            id: 6,
                                            name: 'Shion Okamoto',
                                            nickname: 'null',
                                            tagline: 'null',
                                            totalWeeksInHouse: 21,
                                            totalLivedWith: 8,
                                            totalDates: 0,
                                            instagramFollowers: 0,
                                            age: 27,
                                            ageWhenEntered: 23,
                                            imageUrl: '/shionokamoto.png',
                                            seasonName: 'Opening New Doors',
                                        },
                                    ]}
                                    updateCorrectHousemate={() => {}}
                                    updateGameState={() => {}}
                                    updateIsWinner={() => {}}
                                    updateRoundPoints={() => {}}
                                />
                            </>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
