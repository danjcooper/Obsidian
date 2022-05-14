import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GameplayAnsweing, GameplayResult, ScoreBoard, Incident } from './Components';
import { Homepage, GameSettings, Game, About, Leaderboard } from './Pages';

function App() {
    return (
        <div className='App'>
            <main>
                <Routes>
                    <Route path='/*' element={<Homepage />} />
                    <Route path='/settings' element={<GameSettings />} />
                    <Route path='/game' element={<Game />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
