import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Terrace Stats</h1>

      <Link to='/settings'>
        <button type='button'>Play!</button>
      </Link>
      <Link to='/about'>About the game.</Link>
    </div>
  );
};

export default Homepage;
