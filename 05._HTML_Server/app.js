import express from "express";
const app = express();

app.use(express.static("public"));

// const candyCommon = require("./util/candyCommon.js");
// console.log(candyCommon);
import candyESModule from "./util/candyESModule.js";
console.log(candyESModule);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontend/index.html");
});

app.get("/candy", (req, res) => {
    res.sendFile(__dirname + "/public/candy/candy.html");
});

// task create a /redirection route and page called redirection.html


let visitorsCount = 0;

app.get("/visitorscount", (req, res) => {
    res.send({ data: ++visitorsCount });
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});