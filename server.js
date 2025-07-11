// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateAdScript } from './ads/generateScripts.js';
import { adsById } from './adsMap.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve the entire public directory
app.use(express.static(path.join(__dirname, 'public')));

// 🎯 Dynamic script loader
app.get('/ads/:type.js', (req, res) => {
  const { type } = req.params;
  res.set('Content-Type', 'application/javascript');
  res.send(generateAdScript(type));
});

app.get('/pcs/click', (req, res) => {
  const { ad } = req.query;

  if (!ad || !adsById[ad]) {
    return res.status(404).send('Ad not found');
  }

  const destination = adsById[ad].link;
app.get('/pcs/click', (req, res) => {
  const { ad } = req.query;

  if (!ad || !adsById[ad]) {
    return res.status(404).send('Ad not found');
  }

  const destination = adsById[ad].link;

  // Optional: Log click
  console.log(`Redirecting for ad ${ad} -> ${destination}`);

  // Redirect
  res.redirect(destination);
});

  // Redirect
  res.redirect(destination);
});

app.listen(port, () => {
  console.log(`✅ Ad server running at ${port}`);
});

app.get('/', (req, res) => {
  res.send('✅ Ad server is up and running!');
});
