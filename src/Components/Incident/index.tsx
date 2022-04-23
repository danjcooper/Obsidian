import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';

const Incident = ({ specialEvent, close }: any) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current && specialEvent.triggered) {
            divRef.current.style.width = '80%';
            divRef.current.style.height = 'auto';
        }
    }, [specialEvent]);

    return (
        <div className={styles.eventDiv} ref={divRef}>
            <h2>Incident!</h2>
            <img src={specialEvent.eventData.imageUrl} alt='image of event depicted' />
            <h2>{specialEvent.eventData.text}</h2>
            <h3>{specialEvent.eventData.positive ? '+' : '-'} 100 bonus points</h3>
            <button onClick={close}>Close</button>
        </div>
    );
};

export default Incident;
