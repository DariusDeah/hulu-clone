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
