import { gql } from "apollo-server";

export interface IUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  photo: string;
  favoritesId?: string[];
}

export const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String
    photo: String!
  }

  type Query {
    users: [User]
    user(email: String): User
  }

  type Mutation {
    createUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      photo: String!
    ): User

    login(email: String!, password: String!): User
  }
`;
