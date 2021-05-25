import { fetcher } from '../../fetcher';

export const getList = async (filter) => await fetcher({
  query: `#graphql
    query ($filter: String = "") {
      movies (name: $filter) {
        id
        name
        rating
        description
        year
        image
      }
    }
  `,
  variables: { filter }
});

export const getMovie = async (id) => await fetcher({
  query: `#graphql
    query ($id: ID!) {
      movie (id: $id) {
        id
        name
        rating
        description
        duration
        year
        image
        genre {
          id
          name
        }
        actors {
          id
          name
        }
      }
    }
  `,
  variables: { id },
});

const formDataCreateQuery = `#graphql
  query {
    genres {
      id
      name
    }
  }
`;

const formDataEditQuery = `#graphql
  query ($id: ID!) {
    genres {
      id
      name
    }
    movie (id: $id) {
      id
      name
      year
      description
      rating
      duration
      image
      actors {
        id
        name
      }
      genre {
        id
      }
    }
  }
`;

export const getFormData = async (id) => await fetcher({
  query: id ? formDataEditQuery : formDataCreateQuery,
  ...(id && { variables: { id } }),
});

export const createMovie = async (input) => await fetcher({
  query: `#graphql
    mutation CreateMovie($input: MovieInput) {
      movie: createMovie(input: $input) {
        id
        name
        description
      }
    }
  `,
  variables: { input },
});

export const editMovie = async (input) => await fetcher({
  query: `#graphql
    mutation EditMovie($input: MovieInput) {
      movie: editMovie(input: $input) {
        id
        name
        description
      }
    }
  `,
  variables: { input },
});

export const removeImage = async (input) => await fetcher({
  query: `#graphql
    mutation($input: MovieInput) {
      status: removeMovieImage(input: $input)
    }
  `,
  variables: { input },
})
