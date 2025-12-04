import "dotenv/config";

import express from 'express';
const app = express();

app.use(express.json());

import cors from 'cors';

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

import session from 'express-session';

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

app.use(sessionMiddleware);

import nicknamesRouter from './routers/nicknamesRouter.js';
app.use(nicknamesRouter);

import http from 'http';
const server = http.createServer(app);

import { Server } from 'socket.io';
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        credentials: true
    }
});

io.engine.use(sessionMiddleware);

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket.on("client-sends-color", (data) => {

        const session = socket.request.session;

        session.reload((error) => {
            if (error) {
                console.error("Session reload error:", error);
                return;
            }

            console.log(session.nickname);
            session.timesSubmitted = session.timesSubmitted + 1 || 1;

            data.timesSubmitted = session.timesSubmitted;
    
            console.log(data);

            session.save();
            
            // emits to all the sockets in the io namespace
            io.emit("server-sends-color", data);


        });



        // emits to all the sockets but itself
        // socket.broadcast.emit("server-sends-color", data);

        // emits to the socket itself
        // socket.emit("server-sends-color", data);
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));