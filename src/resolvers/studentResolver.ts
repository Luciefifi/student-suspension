// Mock data representing a database (replace this with your MongoDB setup)
const studentsData = [
    {
      id: "1",
      regNumber: 12345,
      Fname: "John",
      Lname: "Doe",
      age: 25,
      sex: "Male",
    },
    {
      id: "2",
      regNumber: 67890,
      Fname: "Jane",
      Lname: "Smith",
      age: 22,
      sex: "Female",
    },
  ];
  
  // Resolver functions
  const resolvers = {
    Query: {
      students: () => studentsData,
      student: (_: any, { id }: { id: string }) => {
        return studentsData.find((student) => student.id === id);
      },
    },
    Mutation: {
      addStudent: (_: any, args: any) => {
        const newStudent = { ...args };
        studentsData.push(newStudent);
        return newStudent;
      },
    },
  };
  
  export default resolvers;
  