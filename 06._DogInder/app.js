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




// falsy values
// false, null, undefined, NaN, 0, ""

// short-circuit syntax

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});