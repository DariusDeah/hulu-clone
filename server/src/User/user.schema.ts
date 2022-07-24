import { gql } from "apollo-server";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  photo: string;
  favoritesId?: string[];
}

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    photo: String!
  }

  type Query {
    users: [User]
  }
  type Mutation {
    createUser(id: ID!, name: String!, email: String!, password: String!): User
  }
`;

const mockUsers: IUser[] = [
  {
    id: "123",
    name: "John",
    email: "john@example.com",
    password: "password",
    photo: "photo.jpg",
  },
  {
    id: "456",
    name: "Jo",
    email: "jo@example.com",
    password: "password",
    photo: "photo.jpg",
  },
  {
    id: "789",
    name: "Jon",
    email: "jon@example.com",
    password: "password",
    photo: "photo.jpg",
  },
];

export const resolvers = {
  Query: {
    users: () => mockUsers,
  },
  Mutation: {
    createUser: (user: IUser) => {
      mockUsers.push(user);
      const createdUser = mockUsers.find((user) => user.id === user.id);
      return createdUser;
    },
  },
};
