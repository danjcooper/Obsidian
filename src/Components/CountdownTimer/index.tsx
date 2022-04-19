import React, { CSSProperties } from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const CountdownTimer = ({ points }: props) => {
    const barStyle: CSSProperties = {
        width: `${points}%`,
        height: '15px',
        background: `#64c368`,
        margin: '0px',
    };

    return <div style={barStyle}></div>;
};

export default CountdownTimer;
