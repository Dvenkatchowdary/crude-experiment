async function deleteStudents() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        const database = client.db('school');
        const collection = database.collection('students');

        // Delete a student by studentId
        await collection.deleteOne({ studentId: 1 });
        console.log("Deleted student with ID 1.");

        // Delete all students enrolled in Computer Science
        await collection.deleteMany({ course: "Computer Science" });
        console.log("Deleted all Computer Science students.");
    } catch (error) {
        console.error("Error deleting students:", error);
    } finally {
        await client.close();
    }
}

deleteStudents();
