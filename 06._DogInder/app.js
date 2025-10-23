import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));

import matchesRouter from './routers/matchesRouter.js';
app.use(matchesRouter);
import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);



// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});