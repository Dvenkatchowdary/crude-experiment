async function updateStudents() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        const database = client.db('school');
        const collection = database.collection('students');

        // Update age by studentId
        await collection.updateOne({ studentId: 1 }, { $set: { age: 21 } });
        console.log("Updated age for studentId 1.");

        // Update course for all students enrolled in Math
        await collection.updateMany({ course: "Math" }, { $set: { course: "Advanced Math" } });
        console.log("Updated course for all Math students.");
    } catch (error) {
        console.error("Error updating students:", error);
    } finally {
        await client.close();
    }
}
