import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));


// ========================= PAGES =====================================

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/pages/frontend/index.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/pages/matches/matches.html'));
});

// ========================= API =======================================

import { getMatches } from './util/matchesUtil.js';

app.get("/api/matches", async (req, res) =>  {
    const matches = await getMatches();
    res.send({ data: matches });
});


// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});