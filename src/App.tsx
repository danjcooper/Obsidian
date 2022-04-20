import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GameplayResult, ScoreBoard } from './Components';
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
                                <GameplayResult
                                    isWinner={true}
                                    roundPoints={20}
                                    streak={20}
                                    updateGameState={() => {}}
                                    updateLives={() => {}}
                                    updateScore={() => {}}
                                    updateStreak={() => {}}
                                    specialEventData={[
                                        {
                                            effectid: 1,
                                            housemate: 'Makoto Hasegawa',
                                            positive: false,
                                            special: false,
                                            description: 'Mizuki calls you out at 3am.',
                                            imageurl: '',
                                            seasonid: 3,
                                        },
                                        {
                                            effectid: 3,
                                            housemate: 'Minori Nakada',
                                            positive: true,
                                            special: false,
                                            description: 'You get free a free pair of shoes from Makoto.',
                                            imageurl: '',
                                            seasonid: 3,
                                        },
                                    ]}
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
