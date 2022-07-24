import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./User/user.schema";
export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  csrfPrevention: true,
  cache: "bounded",
});
