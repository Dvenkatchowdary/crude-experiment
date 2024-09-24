async function insertStudents() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        const database = client.db('school');
        const collection = database.collection('students');

        const students = [
            { studentId: 1, name: "Alice", age: 20, course: "Computer Science", enrollmentDate: new Date() },
            { studentId: 2, name: "Bob", age: 21, course: "Math", enrollmentDate: new Date() },
            { studentId: 3, name: "Charlie", age: 22, course: "Computer Science", enrollmentDate: new Date() }
        ];

        const result = await collection.insertMany(students);
        console.log(`${result.insertedCount} students inserted.`);
    } catch (error) {
        console.error("Error inserting students:", error);
    } finally {
        await client.close();
    }
}

insertStudents();
