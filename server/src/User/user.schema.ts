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
    async createUser(parent: any, args: any, context: any, info: any) {
      const { email, first_name, last_name, password, photo } = args;
      const user: IUser = { email, first_name, last_name, password, photo };

      return await userResolvers.createUser(user);
    },

    async login(parent: any, args: any, context: any, info: any) {
      const { email, password } = args;
      return await userResolvers.login(email, password);
    },
  },
};
