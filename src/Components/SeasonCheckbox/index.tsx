import React from 'react';
import { gameInfo, seasonData } from '../../Interfaces';

const SeasonCheckbox = ({ data, handleClick }: any) => {
    return (
        <>
            <label htmlFor={data.id}>
                {data.name}
                <input onClick={handleClick} id={data.id} value={data.seasonCode} type='checkbox' />
            </label>
        </>
    );
};

export default SeasonCheckbox;
