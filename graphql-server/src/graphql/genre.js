const { gql } = require('apollo-server');
const { Op } = require('sequelize');
import {
  Genre as GenreModel,
  Movie as MovieModel,
} from '../database/models';

export const typeDefs = gql`
  type Query {
    genres(name: String = ""): [Genre]
    genre(id: ID!): Genre
  }

  type Genre {
    id: ID!
    name: String
    description: String
    movies: [Movie]
  }
`;

const Genre = {
  movies: async ({ id }) => {
    const { Movies } = await GenreModel.findOne({
      where: { id },
      include: MovieModel,
    });
    return Movies;
  }
}

export const resolvers = {
  Query: {
    genres: async (_, { name }) => await GenreModel.findAll({
      where: { name: { [Op.like]: `%${name}%`} }
    }),
    genre: async (_, { id }) => await GenreModel.findOne({
      where: { id },
    }),
  },
  Genre,
}
