import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Loader, LeaderBoard } from './Components';
import { Homepage, GameSettings, Game } from './Pages';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/*' element={<Homepage />} />
                <Route path='/settings' element={<GameSettings />} />
                <Route path='/game' element={<Game />} />
                <Route path='/test' element={<LeaderBoard />} />
            </Routes>
        </div>
    );
}

export default App;
