import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import styles from './style.module.css';

const Incident = ({ specialEvent, close }: any) => {
    const animationProperties = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            duration: 10,
            easing: easings.linear,
        },
        delay: 250,
    });

    return (
        <animated.div style={animationProperties} className={styles.eventDiv}>
            <h2>Incident!</h2>
            <img src={specialEvent.eventData.imageUrl} alt='image of event depicted' />
            <h2>{specialEvent.eventData.text}</h2>
            <h3>{specialEvent.eventData.positive ? '+' : '-'} 100 bonus points</h3>
        </animated.div>
    );
};

export default Incident;
