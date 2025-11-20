import db from './connection.js';

// db.exec  run DDL and DCL against the database

// const deleteMode = process.argv.find((argument) => argument.includes('delete'));
const deleteMode = process.argv.includes('delete');


if (deleteMode) {
    db.exec(`DROP TABLE IF EXISTS exercises;`);
    db.exec(`DROP TABLE IF EXISTS users;`);
}



/*
Conventions for SQL
use lowercase
use snake case
use plural for tables
*/


// DDL
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE,
    role TEXT CHECK( role IN ("ADMIN", "STAFF", "USER") )
);

CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    difficulty INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
`);












/* 

id INTEGER PRIMARY KEY AUTOINCREMENT,
        
        
*/