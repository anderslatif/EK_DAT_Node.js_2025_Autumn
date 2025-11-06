import express from 'express';
const app = express();


import authRouter from './routers/authRouter.js';
app.use(authRouter);

import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);



// New syntax in Express 5.x. Previously just "/*"
app.get("/{*splat}", (req, res) => {
    res.send(`<h1>404</h1><h3>Didn't find a matching route</h3>`);
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ data: "Didn't match with a route" });
});

const PORT = 8080 || process.env.PORT;

const server = app.listen(PORT, () => {
    console.log("Server is running on port", server.address().port);
});

// console.log("Server has started");