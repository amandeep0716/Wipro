const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://amisha_db_user:amisha123@cluster0.lazbwqv.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri)
let db;
async function connectdb() {
    try {
        await client.connect();
        db = client.db("ExpenseManager");
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
function getDb() {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}   
module.exports = { connectdb, getDb };