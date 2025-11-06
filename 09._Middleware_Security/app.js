// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';

import express from 'express';
const app = express();


import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import helmet from 'helmet';
app.use(helmet());


import { rateLimit } from 'express-rate-limit'

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false
});

app.use("/auth", authLimiter);


import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);

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