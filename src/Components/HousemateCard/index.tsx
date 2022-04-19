import React, { CSSProperties } from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const HousemateCard = ({ housemateData, handleClick }: props) => {
    const baseImageUrl = 'https://raw.githubusercontent.com/danjcooper/Obsidian/main/images';
    return (
        <div className={styles.card} id={housemateData.id.toString()} onClick={handleClick}>
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
        </div>
    );
};

export default HousemateCard;
