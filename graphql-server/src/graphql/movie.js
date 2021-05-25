const fs = require('fs').promises;
const { gql } = require('apollo-server');
const { Op } = require('sequelize');
import { Movie as MovieModel, Actor, Genre } from '../database/models';

export const typeDefs = gql`
  type Query {
    movies(name: String = ""): [Movie]
    movie(id: ID!): Movie
  }

  type Mutation {
    createMovie(input: MovieInput): Movie
    editMovie(input: MovieInput): Movie
    removeMovieImage(input: MovieInput): Boolean
  }

  type Movie {
    id: ID!
    name: String
    year: Int
    description: String
    rating: Float
    duration: Int
    image: String
    actors: [Actor]
    genre: Genre
  }

  input MovieInput {
    id: ID
    name: String
    year: Int
    description: String
    rating: Float
    duration: Int
    image: String
    genreId: String
  }
`;

const Movie = {
  // resolver function that knows how to return the actors from each Movie
  actors: async ({ id }) => {
    const { Actors } = await MovieModel.findOne({
      where: { id },
      include: Actor,
    });
    return Actors;
  },
  genre: async ({ GenreId }) => {
    const genre = await Genre.findOne({ where: { id: GenreId } });
    return genre;
  },
}

export const resolvers = {
  Query: {
    movies: async (_, { name }) => await MovieModel.findAll({
      where: { name: { [Op.like]: `%${name}%`} }
    }),
    movie: async (_, { id }) => await MovieModel.findOne({
      where: { id },
    }),
  },
  Mutation: {
    createMovie: async (_, { input }) => {
      const { genreId, image } = input;
      if (image) {
        await moveTempImage({ newPath: 'movies', filename: image });
      }
      const genre = await Genre.findOne({ where: { id: genreId } });
      const body = { ...input, genre };
      return await MovieModel.create(body);
    },
    editMovie: async (_, { input }) => {
      const { genreId, image } = input;
      if (image) {
        await moveTempImage({ newPath: 'movies', filename: image });
      }
      const genre = await Genre.findOne({ where: { id: genreId } });
      await MovieModel.update(
        {
          ...input,
          genre,
        },
        {
          where: {
            id: input.id,
          },
        },
      );
      return await MovieModel.findOne({ where: { id: input.id } });
    },
    removeMovieImage: async (_, { input }) => {
      const { id } = input;
      try {
        const movie = await MovieModel.findOne({ where: { id }});
        if (movie.image) {
          await fs.unlink(`./public/images/movies/${movie.image}`);
          movie.image = '';
          await movie.save();
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    },
  },
  Movie,
}

const moveTempImage = async ({ oldPath = 'temp', newPath, filename }) => {
  try {
    await fs.rename(
      `./public/images/${oldPath}/${filename}`,
      `./public/images/${newPath}/${filename}`
    );
  } catch (error) {
    console.error('Error moving image', error);
  }
}
