
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const url = process.env.DATABASE_URI;
console.log(url);

const client = new MongoClient(url);

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("✅ Connected to MongoDB successfully");

        // Choose your database
        const db = client.db("sample_mflix");

        // Choose a collection (like a table)
        const users = db.collection("users");

        // Insert one document
        // const result = await users.insertOne({
        //     _id: new ObjectId("59b99db4cfa9a34dcd7885b5"),
        //     name: "Pavithra",
        //     email: "pavithra@gmail.com",
        //     password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1VU"
        // });

        const result = await users.find({ name: "Pavithra" }).toArray();
        console.log(result, 'result');

        // console.log("Inserted document ID:", result.insertedId);
    } catch (err) {
        console.error("❌ Connection failed:", err);
    } finally {
        // Close the connection (optional in dev mode)
        await client.close();
    }
}

run();




