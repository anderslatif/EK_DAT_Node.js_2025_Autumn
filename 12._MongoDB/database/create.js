import db from './connection.js';

const gameCreated = await db.games.insertOne({ title: "Spiderman" });
console.log(gameCreated);