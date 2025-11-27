## SQL    vs.     MongoDB
Database          Database
Table             Collection
Row               JSON
Columns           Key
Cell              Value

## When to use MongoDB

MongoDB supports JSON Schema:

https://www.mongodb.com/resources/languages/json-schema-examples

But the normal case is to use variable schema.

1. Rapid prototyping.
2. When we have something with a variable schema. When type safety isn't important to us.
3. Frankenstein. MongoDB for logging.

## How to handle relations in MongoDB

No support for relations in MongoDB

1. Manually create a key and set it on the document in the other collection and in programming get the document and manually query the other collection for the corresponding document.
2. Denormalization


## MySQL Commands      vs.     MongoDB

SHOW DATABASES                 show dbs
CREATE DATABASE ...            use <database_name>
USE DATABASE <database_name>   use <database_name>
CREATE TABLE <table_name>      db.createCollection("<collection_name>")
DROP TABLE <table_name>        db.dropCollection("<collection_name>")


## MySQL CRUD         vs.      MongoDB
INSERT ...                     insertOne, insertMany, bulkWrite
SELECT ...                     db.<collection_name>.find({ "key": "<search_criteria>" })
UPDATE ...                     updateOne, updateMany({ "key": "<search_criteria>" }, { $set: { "key": "value" }}), replaceOne, replaceMany (replace, replaces the document instead of just updating it)
DELETE ...                     deleteOne, deleteMany({ "key": "<search_criteria>" })


<!-- assignment create a games_characters -->

