import React, { useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import Scoring from '../components/Scoring';

const Home = () => {

  const [playersSubmitted, setPlayersSubmitted] = useState(true);

  const handlePlayerSubmission = () => {
    setPlayersSubmitted(true);
  };

  return (
    <div>
      <h1>Backyard Cricket Scoring</h1>
      {playersSubmitted ? (
        <Scoring />
      ) : (
        <PlayerForm onSubmit={handlePlayerSubmission} />
      )}
    </div>
  );
};

export default Home;