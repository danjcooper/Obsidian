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
                                            housemate: 'Peppe',
                                            positive: true,
                                            special: false,
                                            description: 'Peppe makes you a refreshing Aperol Spritz.',
                                            imageurl:
                                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCZjjgKZ-3vryKYOqBhulKgTFfG0_K9_zLg&usqp=CAU',
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
