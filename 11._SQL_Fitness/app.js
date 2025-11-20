import express from 'express';

const app = express();

app.use(express.json());

import exercisesRouter from './routers/exercisesRouter.js';
app.use(exercisesRouter);
import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);




const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => console.log('Server is running on port', PORT));