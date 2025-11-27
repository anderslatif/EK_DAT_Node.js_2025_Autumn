import db from './connection.js';

const gameCharacterUpdated = await db.game_characters.updateOne({ name: "Pickachu" }, { $set: {
    name: "Pikachu"
}});

console.log(gameCharacterUpdated);
