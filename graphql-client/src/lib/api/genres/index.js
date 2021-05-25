import { fetcher } from '../../fetcher';

export const getList = async (filter) => await fetcher({
  query: `#graphql
    query ($filter: String = "") {
      genres (name: $filter) {
        id
        name
      }
    }
  `,
  variables: { filter }
});

export const getGenre = async (id) => await fetcher({
  query: `#graphql
    query ($id: ID!) {
      genre (id: $id) {
        id
        name
        description
      }
    }
  `,
  variables: { id },
});
