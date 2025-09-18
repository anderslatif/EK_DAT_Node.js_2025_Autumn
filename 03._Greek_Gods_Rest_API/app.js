const express = require("express");
const app = express();

app.use(express.json());

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

let nextId = 3;

// postfix notation 2, 3
// console.log(lastId++)
// console.log(lastId)
// prefix notation 3, 3
// console.log(++lastId)
// console.log(lastId)

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

app.post("/greekgods", (req, res) => {
    if (!req.body) {
        return res.status(400).send({ errorMessage: "Requires a JSON body" });
    }
    const newGreekGod = req.body;
    newGreekGod.id = nextId++;
    greekGods.push(newGreekGod);

    res.send({ data: newGreekGod });
});



app.patch("/greekgods/:id", (req, res) => {
    const providedGreekGodId = Number(req.params.id);
    const foundGreekGodIndex = greekGods.findIndex((greekGod) => greekGod.id === providedGreekGodId);

    if (foundGreekGodIndex === -1) {
        return res.status(404).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}` });
    }

    const foundGreekGod = greekGods[foundGreekGodIndex];
    const newGreekGod = { ...foundGreekGod, ...req.body, id: foundGreekGod.id };

    greekGods[foundGreekGodIndex]= newGreekGod;

    res.send({ data: newGreekGod });
});

app.delete("/greekgods/:id", (req, res) => {
    const providedGreekGodId = Number(req.params.id);
    const foundGreekGodIndex = greekGods.findIndex((greekGod) => greekGod.id === providedGreekGodId);

    if (foundGreekGodIndex === -1) {
        res.status(404).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}` })
        return;
    }

    greekGods.splice(foundGreekGodIndex, 1);

    res.status(204).send();
});



// 2xx  - Success
// 4xx  - Client failed
// 5xx  - Server failed

// http development port = 8080
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT);
});

