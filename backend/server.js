import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import stats from './data/stats.js';
const port = process.env.PORT || 5002;

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

app.get('/api/stats', (req, res) => {
    res.json(stats);
});

app.get('/api/stats/:id', (req, res) => {
    const stat = stats.find((s) => s.id === req.params.id);
    res.json(stat);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});