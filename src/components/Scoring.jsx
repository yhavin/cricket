import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const Scoring = () => {

  const samplePlayers = [
    { name: 'Yakir', isBatting: false, isOut: false, howOut: null, wicketBowler: null, Runs: null, Balls: null },
    { name: 'Nochum', isBatting: false, isOut: false, howOut: null, wicketBowler: null, Runs: null, Balls: null },
    { name: 'Lobo', isBatting: false, isOut: false, howOut: null, wicketBowler: null, Runs: null, Balls: null }
  ]

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
          <tr>
            <td>{player.name} <br /> {player.howOut}</td>
            <td>{player.isBatting}</td>
            <td>{player.Runs}</td>
            <td>{player.Balls}</td>
          </tr>
        ))}
        </tbody>
      </Table>

      
    </div>
  );
}

export default Scoring;