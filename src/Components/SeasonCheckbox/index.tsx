import React from 'react';
import { props } from './interfaces';

const SeasonCheckbox = ({ data, handleClick }: props) => {
    return (
        <>
            <label htmlFor={data.id.toString()}>
                {data.name}
                <input onClick={handleClick} id={data.id.toString()} value={data.seasonCode} type='checkbox' />
            </label>
        </>
    );
};

export default SeasonCheckbox;
