import { fetcher } from '../../fetcher';

export const getList = async (filter) => await fetcher({
  query: `#graphql
    query ($filter: String = "") {
      actors (name: $filter) {
        id
        name
        image
        movies {
          id
          name
        }
      }
    }
  `,
  variables: { filter }
});

export const getActor = async (id) => await fetcher({
  query: `#graphql
    query ($id: ID!) {
      actor (id: $id) {
        id
        name
        bio
        birthday
        image
        movies {
          id
          name
        }
      }
    }
  `,
  variables: { id },
});
