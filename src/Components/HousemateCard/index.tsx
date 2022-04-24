import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { props } from './interfaces';
import styles from './style.module.css';

const HousemateCard = ({ housemateData, handleClick, delayBeforeDisplay }: props) => {
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
            style={animationProperties}
            className={styles.card}
            id={housemateData.id.toString()}
            onClick={handleClick}
        >
            <img
                className={styles.cardImg}
                src={baseImageUrl.concat(housemateData.imageUrl)}
                alt='A picture of this housemate'
            />
            <section>
                <h3 className={styles.heading}>{housemateData.name}</h3>
                {housemateData.nickname ? <p className={styles.text}>{housemateData.nickname}</p> : null}
                <p className={styles.text}>{housemateData.seasonName}</p>
            </section>
        </animated.div>
    );
};

export default HousemateCard;
