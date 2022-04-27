import React from 'react';
import { props } from './interfaces';
import styles from './style.module.css';

const SeasonCheckbox = ({ data, handleClick }: props) => {
    return (
        <>
            {data.seasonCode !== 'CD' ? (
                <label className={styles.seasonLabel} htmlFor={data.id.toString()}>
                    {data.name}
                    <input onClick={handleClick} id={data.id.toString()} value={data.seasonCode} type='checkbox' />
                </label>
            ) : null}
        </>
    );
};

export default SeasonCheckbox;
