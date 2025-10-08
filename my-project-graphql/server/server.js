import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"; 

const users = [
  { id: "1", name: "Naruto", age: 21, isMarried: true },
  { id: "2", name: "Sasuke", age: 22, isMarried: true },
  { id: "3", name: "Kakashi", age: 37, isMarried: false },

];

const typeDefs = `
    type Query{
        getUsers: [User]
        getUserById(id : ID!): User
    }

    type Mutation{
        createUser(name: String!,age: Int!,isMarried: Boolean!): User
    }

    type User{
        id : ID
        name : String
        age : Int
        isMarried : Boolean
    }

    `;
const resolvers = {
     Query: {
    getUsers: () => users,
    getUserById: (_, { id }) => users.find(u => u.id === id),
  },
  Mutation: {
    createUser: (_, { name, age, isMarried }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        age,
        isMarried,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({typeDefs, resolvers});

const {url} = await startStandaloneServer(server, {
    listen : { port : 4000 } ,
});

console.log(`Server running at : ${url}`)