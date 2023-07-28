// Mock data representing a database (replace this with your MongoDB setup)
// const studentsData = [
//     {
//       id: "1",
//       regNumber: 12345,
//       Fname: "John",
//       Lname: "Doe",
//       age: 25,
//       sex: "Male",
//     },
//     {
//       id: "2",
//       regNumber: 67890,
//       Fname: "Jane",
//       Lname: "Smith",
//       age: 22,
//       sex: "Female",
//     },
//   ];
  

import Student from "../models/student.model";
  // Resolver functions
  const resolvers = {
    Query: {
      getStudents: () => Student.find(),
      student: (_: any, { id }: { id: string }) => {
        return Student.find((student:any) => student.id === id);
      },
    },
    Mutation: {
      addStudent: (_: any, args: any) => {
        const newStudent = { ...args };
        Student.p
        return newStudent;
      },
    },
  };
  
  export default resolvers;
  