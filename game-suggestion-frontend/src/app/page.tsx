'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [game, setGame] = useState('');

  const fetchSuggestion = async () => {
    try {
      const response = await axios.get('/api/gameSuggestion');
      setGame(response.data);
    } catch (error) {
      console.error('Error fetching game suggestion:', error);
      setGame('Error fetching suggestion. Make sure the backend server is running.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Game Suggestion</h1>
      <button onClick={fetchSuggestion}>Suggest a Game</button>
      {game && <p>{game}</p>}
    </div>
  );
}
