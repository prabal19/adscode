// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { generateAdScript } from './ads/generateScripts.js';
import cors from 'cors';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
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


app.listen(port, () => {
  console.log(`✅ Ad server running at ${port}`);
});

app.get('/', (req, res) => {
  res.send('✅ Ad server is up and running!');
});
