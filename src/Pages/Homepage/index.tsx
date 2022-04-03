import React from 'react';

const Homepage = () => {
  const handleClick = () => {
    console.log('hi');
  };

  return (
    <div>
      <h1>Terrace Stats</h1>
      <button onClick={handleClick} type='button'>
        PLAY
      </button>
    </div>
  );
};

export default Homepage;
