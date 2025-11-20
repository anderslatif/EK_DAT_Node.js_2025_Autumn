import express from 'express';

const app = express();

app.use(express.static('public'));

app.use(express.json());

import exercisesRouter from './routers/exercisesRouter.js';
app.use(exercisesRouter);
import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

// Multer code
import multer from 'multer';
const upload = multer({ dest: './uploads' });

app.post('/profile', upload.single('avatar'), (req, res) => {
    res.send({ data: "Image uploaded" });
});


const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => console.log('Server is running on port', PORT));