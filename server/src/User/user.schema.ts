import { gql } from "apollo-server";
import { mockUsers } from "../utils/mockData";
import { userResolvers } from "./user.resolver";
import { IUser } from "./user.typeDef";

export const resolvers = {
  Query: {
    users: async () => await userResolvers.findUsers(),
    async user(parent: any, args: any, context: any, info: any) {
      console.log(args.email);
      return await userResolvers.findUserByEmail(args.email);
    },
  },

  Mutation: {
    createUser: (user: IUser) => {
      mockUsers.push(user);
      const createdUser = mockUsers.find((user) => user.id === user.id);
      return createdUser;
    },
  },
};
