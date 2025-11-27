import db from './connection.js';

const deletedGame = await db.games.deleteMany({ title: { $regex: /tomb raider/i }});
console.log(deletedGame);