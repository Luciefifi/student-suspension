import { gql } from "apollo-server-core";
const typeDefs = gql`
 type Student {
    id : ID!
    regNumber : Int!
    Fname: String!
    Lname: String!
    age: Int!
    sex: String!
 },
 type Query {
    students: [Student!]
    student(id:ID!): Student


 }
 type Mutation {
    addStudent(Fname: String!, Lname: String!, age: Int!, sex: String!, regNumber: Int!): Student!
 }
`

export default typeDefs;