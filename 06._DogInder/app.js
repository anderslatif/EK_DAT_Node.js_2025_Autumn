import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontend/index.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/matches/matches.html'));
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});