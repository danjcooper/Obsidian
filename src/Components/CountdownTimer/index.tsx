import React, { CSSProperties } from 'react';

const CountdownTimer = ({ points }: any) => {
    const barStyle = {
        width: `${points}vw`,
        height: '30px',
        background: `blue`,
        margin: '0px',
    };

    return <div style={barStyle}></div>;
};

export default CountdownTimer;
