import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Game = () => {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    api.get('/game')
      .then(response => {
        setChoices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <ul>
        {choices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
