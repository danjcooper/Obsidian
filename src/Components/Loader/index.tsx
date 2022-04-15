import React, { useEffect } from 'react';
import svg from './ond-loader-two.svg';
import Vivus from 'vivus';

const Loader = () => {
    useEffect(() => {
        new Vivus('loader', { duration: 500, file: svg, type: 'delayed' }, myVivus =>
            myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1)
        );
    }, []);

    const styles = {
        width: '400px',
    };

    return (
        <>
            <div className='loader'>
                <div style={styles} id='loader'></div>
            </div>
        </>
    );
};

export default Loader;
