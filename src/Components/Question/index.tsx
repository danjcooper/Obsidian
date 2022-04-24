import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { props } from './interfaces';
import styles from './style.module.css';

const Question = ({ text, delayBeforeDisplay }: props) => {
    const animationProperties = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            duration: 500,
            easing: easings.linear,
        },
        delay: delayBeforeDisplay,
    });

    return (
        <div className={styles.question}>
            <animated.h2 style={animationProperties}>{text}</animated.h2>
        </div>
    );
};

export default Question;
