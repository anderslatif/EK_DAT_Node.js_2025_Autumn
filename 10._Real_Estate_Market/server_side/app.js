import 'dotenv/config';
import express from 'express';
const app = express();

import path from 'path';
app.use(express.static(path.resolve('../client/dist/')));

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


app.get("/{*splat}", (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'));
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));