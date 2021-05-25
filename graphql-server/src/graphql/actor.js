const { gql } = require('apollo-server');
const { Op } = require('sequelize');
import { Actor as ActorModel, Movie } from '../database/models';

// ---------- Types definition ----------
export const typeDefs = gql`
  type Query {
    actors(name: String = ""): [Actor]
    actor(id: ID!): Actor
  }

  type Actor {
    id: ID!
    name: String
    birthday: String
    bio: String
    image: String
    movies: [Movie]
  }
`;

// ---------- resolvers ----------
const Actor = {
  // resolver function that knows how to return the movies from each Actor
  movies: async ({ id }) => {
    const { Movies } = await ActorModel.findOne({
      where: { id },
      include: Movie,
    });
    return Movies;
  }
}

export const resolvers = {
  Query: {
    // actor: (root, args, context, info) => { ... }
    actors: async (_, { name }) => await ActorModel.findAll({
      where: { name: { [Op.like]: `%${name}%`} }
    }),
    actor: async (_, { id }) => await ActorModel.findOne({
      where: { id },
    }),
  },
  Actor,
}
