import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Scoring = () => {

  const samplePlayers = [
    { name: 'Yakir', isBatting: false, isOut: false, howOut: null, wicketBowler: null, runs: 0, balls: 0 },
    { name: 'Nochum', isBatting: false, isOut: false, howOut: null, wicketBowler: null, runs: 0, balls: 0 },
    { name: 'Lobo', isBatting: false, isOut: false, howOut: null, wicketBowler: null, runs: 0, balls: 0 }
  ]

  const [batsman, setBatsman] = useState('');
  const [nonStriker, setNonStriker] = useState('');

  const [matchStarted, setMatchStarted] = useState(false);

  const handleStart = () => {
    setMatchStarted(true);
    setBatsman(samplePlayers[0]);
    setNonStriker(samplePlayers[1]);
  };

  const incrementScore = (runs) => {
    const playerIndex = samplePlayers.findIndex((player) => player.name === batsman.name);
    const currentPlayer = samplePlayers[playerIndex];
    currentPlayer.runs += 1;
    currentPlayer.balls += 1;
    console.log(currentPlayer);
    console.log(samplePlayers);
  }

  return (
    <div>
      <h2>Scorecard</h2>
      <h4>Batting</h4>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Batting</th>
            <th>Runs</th>
            <th>Balls</th>
          </tr>
        </thead>
        <tbody>
        {samplePlayers.map((player, index) => (
          <tr key={index}>
            <td>{player.name} <br /> {player.howOut}</td>
            <td>{player.isBatting}</td>
            <td>{player.runs}</td>
            <td>{player.balls}</td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleStart}>Start match</Button>

      <p>{"Match started: " + matchStarted}</p>
      <p>{"Batsman: " + batsman.name}</p>
      <p>{"Non-striker: " + nonStriker.name}</p>

      <Button variant="secondary" onClick={() => {incrementScore(1)}}>1</Button>
    </div>
  );
}

export default Scoring;