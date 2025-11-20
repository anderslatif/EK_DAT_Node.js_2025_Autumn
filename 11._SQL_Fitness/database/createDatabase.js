import db from './connection.js';

// db.all   for SELECT
// db.run   for INSERT, UPDATE, DELETE
// db.exec  run DDL and DCL against the database without parameters

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



// seeding
// DML
if (deleteMode) {
    db.run(`INSERT INTO users (username, role) VALUES ('anders', 'STAFF');`);
    db.run(`INSERT INTO exercises (name, difficulty, user_id) VALUES ('squats', 7, 1);`);
    db.run(`INSERT INTO exercises (name, user_id) VALUES ('burpees', 1);`);
}
