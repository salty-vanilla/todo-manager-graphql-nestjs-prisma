import { Resolvers } from "../types/generated/graphql";
import { dateScalar } from "./scalar/data";
import * as mutation from './mutation';
import * as query from './query';

const resolvers: Resolvers = {
  Query: query,
  Mutation: mutation,
  Date: dateScalar,
};

export default resolvers;
