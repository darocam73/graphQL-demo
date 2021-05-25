export const fetcher = async ({ query, variables = {} }) => {
  const response = await fetch(process.env.REACT_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const { data, errors } = await response.json();

  if (errors) {
    const msg = errors.map(({ message }) => message).join('\n');
    throw new Error(`Error on graphQL request: ${msg}`);
  }
  return data;
}
