import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage, GameSettings } from './Pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/*' element={<Homepage />} />
        <Route path='/settings' element={<GameSettings />} />
      </Routes>
    </div>
  );
}

export default App;
