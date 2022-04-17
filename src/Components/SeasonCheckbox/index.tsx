import React from 'react';
import { seasonData } from '../../Interfaces';

interface props {
    data: seasonData;
    handleClick: () => void;
}

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
