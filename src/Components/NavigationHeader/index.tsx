import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavigationHeader = () => {
    return (
        <header>
            <Link className={styles.logo} to={'/'}>
                TERRACE
                <br />
                STATS
            </Link>
        </header>
    );
};

export default NavigationHeader;
