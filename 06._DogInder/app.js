import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));

import matchesRouter from './routers/matchesRouter.js';
app.use(matchesRouter);

// ========================= PAGES =====================================

import { frontpagePage, matchesPage } from './util/pagesUtil.js';

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/matches", (req, res) => {
    res.send(matchesPage);
});




// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});