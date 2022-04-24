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
                                    correctHousemate={{
                                        id: 1,
                                        age: 30,
                                        ageWhenEntered: 20,
                                        imageUrl: '/amikomuro.png',
                                        name: 'Yama',
                                        nickname: 'Cherry Boy',
                                        instagramFollowers: 300000,
                                        seasonName: 'Panel',
                                        tagline: 'I hate it.',
                                        totalDates: 2,
                                        totalLivedWith: 30,
                                        totalWeeksInHouse: 40,
                                    }}
                                    isWinner={false}
                                    roundPoints={200}
                                    streak={1000}
                                    updateGameState={() => {}}
                                    updateLives={() => {}}
                                    updateScore={() => {}}
                                    updateStreak={() => {}}
                                    specialEventData={{
                                        description: 'hi',
                                        housemate: 'Yama',
                                        positive: true,
                                        imageUrl: 'https://i.redd.it/n5iytbe7t0431.jpg',
                                    }}
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
