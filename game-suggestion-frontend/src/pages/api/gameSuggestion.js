// pages/api/gameSuggestion.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('http://127.0.0.1:5000');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching game suggestion:', error);
    res.status(500).json({ message: 'Error fetching game suggestion' });
  }
}
