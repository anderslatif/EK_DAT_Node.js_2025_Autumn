import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

// const candyCommon = require("./util/candyCommon.js");
// console.log(candyCommon);
import candyESModule from "./util/candyESModule.js";
console.log(candyESModule);

// console.log(path.resolve("public/redirection/redirection.html"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontend/index.html"));
});


app.get("/candy", (req, res) => {
    res.sendFile(path.resolve("public/candy/candy.html"));
});

// task create a /redirection route and page called redirection.html
app.get("/redirection", (req, res) => {
    res.sendFile(path.resolve("public/redirection/redirection.html"));
});


let visitorsCount = 0;

app.get("/visitorscount", (req, res) => {
    res.send({ data: ++visitorsCount });
});

app.get("/visitorsdoorway", (req, res) => {
    res.redirect("/visitorscount");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});