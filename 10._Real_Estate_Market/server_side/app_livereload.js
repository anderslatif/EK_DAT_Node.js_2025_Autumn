import 'dotenv/config';
import express from 'express';
const app = express();

import path from 'path';
import { readFileSync, watch } from 'fs';

// Simple live reload with SSE
let client = null;

// Watch dist folder for changes
watch(path.resolve('../client/dist'), { recursive: true }, () => {
  if (client) client.write('data: reload\n\n');
});

// SSE endpoint for live reload
app.get('/livereload', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  client = res;
  req.on('close', () => client = null);
});

app.use(express.static(path.resolve('../client/dist')));

app.use(express.json());


import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


import realEstateAgentsRouter from './routers/realEstateAgentsRouter.js';
app.use(realEstateAgentsRouter);
import housesRouter from './routers/housesRouter.js';
app.use(housesRouter);

// SPA fallback - serve index.html with livereload script injected for all routes
app.use((req, res) => {
  const filePath = path.resolve('../client/dist/index.html');
  let html = readFileSync(filePath, 'utf8');
  const liveReloadScript = `
    <script>
      new EventSource('/livereload').onmessage = () => location.reload();
    </script>
  `;
  html = html.replace('</head>', `${liveReloadScript}</head>`);
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

// app.get("/{*splat}", (req, res) => {
//   res.sendFile(path.resolve('../client/dist/index.html'));
// });

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));