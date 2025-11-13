import 'dotenv/config';
import express from 'express';
const app = express();

import path from 'path';
import { readFileSync } from 'fs';
import chokidar from 'chokidar';

// Simple live reload with SSE
const clients = [];

// SSE endpoint for live reload - MUST be first
app.get('/livereload', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write('\n');

  clients.push(res);

  req.on('close', () => {
    const index = clients.indexOf(res);
    if (index !== -1) clients.splice(index, 1);
  });
});

// Watch dist folder for changes with chokidar
chokidar.watch(path.resolve('../client/dist'), {
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 100,
    pollInterval: 100
  }
}).on('all', () => {
  clients.forEach(client => {
    try {
      client.write('data: reload\n\n');
    } catch (error) {
      // Ignore errors when writing to closed connections
    }
  });
});

// Serve static files but exclude index.html in order to inject the livereload script later
app.use(express.static(path.resolve('../client/dist'), {
  index: false
}));

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
  const liveReloadScript = `<script>
      let eventSource = new EventSource('/livereload');
      eventSource.onmessage = () => {
        eventSource.close();
        location.reload();
      };
      window.addEventListener('beforeunload', () => eventSource.close());
</script>`;
  html = html.replace('</head>', `${liveReloadScript}</head>`);
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));