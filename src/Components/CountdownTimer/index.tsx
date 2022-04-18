import React, { CSSProperties } from 'react';
import { props } from './interfaces';

const CountdownTimer = ({ points }: props) => {
    const barStyle: CSSProperties = {
        width: `${points}vw`,
        height: '30px',
        background: `blue`,
        margin: '0px',
    };

    return <div style={barStyle}></div>;
};

export default CountdownTimer;
