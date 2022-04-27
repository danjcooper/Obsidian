import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Homepage = () => {
    return (
        <div className='page'>
            <h1>Terrace Stats</h1>

            <Link to='/settings'>
                <button type='button'>Play!</button>
            </Link>
            <Link to='/about'>About the game.</Link>
        </div>
    );
};

export default Homepage;
