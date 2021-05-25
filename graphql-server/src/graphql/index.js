const { gql } = require('apollo-server');
const {
  makeExecutableSchema,
  mergeTypeDefs,
  mergeResolvers,
} = require('graphql-tools');
import { typeDefs as Actor, resolvers as actorResolvers } from './actor';
import { typeDefs as Movie, resolvers as movieResolvers } from './movie';
import { typeDefs as Genre, resolvers as genreResolvers } from './genre';

const Upload = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;

const uploadResolvers = {
  Mutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      return filename;
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([
    Upload,
    Actor,
    Movie,
    Genre,
  ]),
  resolvers: mergeResolvers([
    uploadResolvers,
    actorResolvers,
    movieResolvers,
    genreResolvers,
  ]),
});

module.exports = schema;
