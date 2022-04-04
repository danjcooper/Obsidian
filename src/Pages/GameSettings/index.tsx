import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { seasonData } from '../../Interfaces';

const GameSettings = () => {
  const [seasonData, setSeasonData] = useState<seasonData[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result: AxiosResponse = await axios.get(
        'https://terrace-house-server.herokuapp.com/seasons'
      );
      setSeasonData(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      {seasonData ? (
        seasonData.map((i) => <button key={i.id}>{i.name}</button>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GameSettings;
