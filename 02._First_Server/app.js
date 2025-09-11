const express = require("express");
const app = express();
// const app = require("express")();

// console.log(app);

// sets up body parsing
app.use(express.json());


             // callback function
        // endpoint
// route (handler)
app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>
            <h3>Welcome to my page</h3>`);
});

// console.log(__dirname);

app.get("/fashionbrands", (req, res) => {
    res.sendFile(__dirname + "/ index.html");   
});


app.get("/planets", (req, res) => {
    res.send({ name: "Jupiter" });
});

// task: create /planets/favoritePlanet that returns your favorite planet
app.get("/planets/favoritePlanet", (req, res) => {
    res.send({ name: "Pluto" });
});

                    // path variable
app.get("/waterfalls/:likingScore", (req, res) => {
    console.log(req.params);
    // Respond with "You like waterfalls this much: likingScore"
    res.send({ response: `You like waterfalls this much: ${req.params.likingScore}` });
});

/* task create a /bag route that can take two path variables 
where the client can define what should go in it
then respond with what the bag contains
 */

// assignment create a GET /urls route, create a query string with the length of "medium" and spiciness level of 6
// /urls?length=medium&spiciness=6
app.get("/urls", (req, res) => {
    console.log(req.query)
    res.send({ data: req.query });
});

app.post("/subjects", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

// task create a POST fashion brands and try sending a new fashion brand

        // http developer port
app.listen(8080);


