import React from 'react';
import { housemateData } from '../../Interfaces';

const HousemateCard = ({ housemateData, handleClick }: any) => {
    return (
        <div id={housemateData.id} onClick={handleClick}>
            Housemate card
        </div>
    );
};

export default HousemateCard;
