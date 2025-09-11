const express = require("express");
const app = express();


const greekGods = [
    {
        id: 1,
        name: "Zeus",
    },
    {
        id: 2,
        name: "Hercelus",
        isDemiGod: true
    }
];

app.get("/greekgods", (req, res) => {
    res.send({ data: greekGods });
});


app.get("/greekgods/:id", (req, res) => {
    const providedGreekGodId = Number(req.params.id);
    const foundGreekGod = greekGods.find((greekGod) => greekGod.id === providedGreekGodId);

    if (!foundGreekGod) {
        res.status(404).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}` });
    } else {
        res.send({ data: foundGreekGod });
    }
});


// http development port = 8080
app.listen(8080);

