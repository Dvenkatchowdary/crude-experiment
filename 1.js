const { MongoClient } = require('mongodb');

async function createDatabaseAndCollection() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        const database = client.db('school'); // Create database
        const collection = database.collection('students'); // Create collection

        console.log("Database 'school' and collection 'students' created successfully.");
    } catch (error) {
        console.error("Error creating database and collection:", error);
    } finally {
        await client.close();
    }
}
