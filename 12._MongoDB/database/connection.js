import { MongoClient } from 'mongodb';

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

await client.connect();

const dbName = "games_library";

const games_library = client.db(dbName);

export default {
    games: games_library.collection("games"),
    game_characters: games_library.collection("game_characters") 
};
