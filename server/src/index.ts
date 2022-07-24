import { ApolloServer } from "apollo-server";
import { resolvers } from "./User/user.schema";
import { typeDefs } from "./User/user.typeDef";

export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  csrfPrevention: true,
  cache: "bounded",
});
