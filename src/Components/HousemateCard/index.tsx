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

const imageStyle: CSSProperties = {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
};

const HousemateCard = ({ housemateData, handleClick }: props) => {
    const baseImageUrl = 'https://raw.githubusercontent.com/danjcooper/Obsidian/main/images';
    return (
        <div style={styles} id={housemateData.id.toString()} onClick={handleClick}>
            <img
                style={imageStyle}
                src={baseImageUrl.concat(housemateData.imageUrl)}
                alt='A picture of this housemate'
            />
            <h3>{housemateData.name}</h3>
            <p>{housemateData.seasonName}</p>
        </div>
    );
};

export default HousemateCard;
