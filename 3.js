async function readStudents() {
    const client = new MongoClient('mongodb://localhost:27017');

    try {
        await client.connect();
        const database = client.db('school');
        const collection = database.collection('students');

        // Retrieve all students
        const allStudents = await collection.find({}).toArray();
        console.log("All Students:", allStudents);

        // Retrieve students enrolled in Computer Science
        const csStudents = await collection.find({ course: "Computer Science" }).toArray();
        console.log("Computer Science Students:", csStudents);

        // Retrieve a student by studentId
        const student = await collection.findOne({ studentId: 1 });
        console.log("Student with ID 1:", student);
    } catch (error) {
        console.error("Error reading students:", error);
    } finally {
        await client.close();
    }
}

readStudents();
