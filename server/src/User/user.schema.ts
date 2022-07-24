import { gql } from "apollo-server";
import { userResolvers } from "./user.resolver";

export const resolvers = {
  Query: {
    users: () => userResolvers.findUsers(),
  },
  Mutation: {
    createUser: (user: IUser) => {
      mockUsers.push(user);
      const createdUser = mockUsers.find((user) => user.id === user.id);
      return createdUser;
    },
  },
};
