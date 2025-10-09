import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));


// ========================= PAGES =====================================

import { frontpagePage, matchesPage } from './util/pagesUtil.js';

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
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