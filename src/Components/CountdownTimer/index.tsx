import React, { CSSProperties } from 'react';

const CountdownTimer = ({ points }: any) => {
    const barStyle = {
        width: `${points}vw`,
        background: `blue`,
        margin: '0px',
    };
    const barTextStyle: CSSProperties = {
        margin: '0px',
    };

    return (
        <div style={barStyle}>
            <p style={barTextStyle}>{points}</p>
        </div>
    );
};

export default CountdownTimer;
