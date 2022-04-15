import React, { CSSProperties } from 'react';
import { housemateData } from '../../Interfaces';

// type props = housemateData,

interface props {
    housemateData: housemateData;
    handleClick: any;
}

const styles: CSSProperties = {
    width: '100vw',
    height: '50vh',
    background: 'pink',
    textAlign: 'center',
    padding: '60px',
};

const HousemateCard = ({ housemateData, handleClick }: props) => {
    return (
        <div style={styles} id={housemateData.id.toString()} onClick={handleClick}>
            <img src='' alt='A picture of this housemate' />
            <h3>{housemateData.name}</h3>
            <p>{housemateData.seasonName}</p>
        </div>
    );
};

export default HousemateCard;
