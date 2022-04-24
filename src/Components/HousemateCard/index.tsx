import { url } from 'inspector';
import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { props } from './interfaces';
import styles from './style.module.css';

const HousemateCard = ({ housemateData, handleClick, delayBeforeDisplay, position }: props) => {
    const baseImageUrl = 'https://raw.githubusercontent.com/danjcooper/Obsidian/main/images';

    const animationProperties = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            duration: 1000,
            easing: easings.linear,
        },
        delay: delayBeforeDisplay,
    });

    return (
        <animated.div
            style={{
                ...animationProperties,
                background: `url(${baseImageUrl.concat(housemateData.imageUrl)})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className={styles.card + ' ' + styles[position]}
            id={housemateData.id.toString()}
            onClick={handleClick}
        >
            <section className={styles.housemateData + ' ' + styles[position]}>
                <h3 className={styles.heading}>{housemateData.name}</h3>
                {housemateData.nickname ? <p className={styles.text}>{housemateData.nickname}</p> : null}
                <p className={styles.text}>{housemateData.seasonName}</p>
            </section>
        </animated.div>
    );
};

export default HousemateCard;
