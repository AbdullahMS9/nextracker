import express from 'express';
import stats from './data/stats.js';
const port = 5002;

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

app.get('/api/stats', (req, res) => {
    res.json(stats);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});