import { gql } from "apollo-server";
import { mockUsers } from "../utils/mockData";
import { userResolvers } from "./user.resolver";
import { IUser } from "./user.typeDef";

export const resolvers = {
  Query: {
    users: async () => await userResolvers.findUsers(),
  },

  Mutation: {
    createUser: (user: IUser) => {
      mockUsers.push(user);
      const createdUser = mockUsers.find((user) => user.id === user.id);
      return createdUser;
    },
  },
};
