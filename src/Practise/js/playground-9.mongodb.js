// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("sample_mflix");

// Find a document in a collection.
const record = db.getCollection("users").findOne({
"name": "Ned Stark"
});

