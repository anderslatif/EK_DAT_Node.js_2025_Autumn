import db from './connection.js';

const games = await db.games.find({ title: "Tomb Raider" }).toArray();
console.log(games);