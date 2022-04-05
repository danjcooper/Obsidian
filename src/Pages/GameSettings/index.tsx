import React, { useState, useEffect, ReactEventHandler } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { seasonData } from '../../Interfaces';
import { SeasonCodes } from '../../Enums';
//TODO bring in actions.
import { updateSeasonData } from '../../Actions/GameInfo';

const GameSettings = () => {
  const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const result: AxiosResponse = await axios.get(
        'https://terrace-house-server.herokuapp.com/seasons'
      );
      setSeasonData(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    dispatch(updateSeasonData(seasonData));
  }, [seasonData]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(e.currentTarget.id);
  };

  return (
    <div>
      {seasonData ? (
        seasonData.map((i) => (
          <button id={i.id} onClick={handleClick} key={i.id}>
            {i.name}
          </button>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {seasonData ? <button>Play</button> : null}
    </div>
  );
};

export default GameSettings;
