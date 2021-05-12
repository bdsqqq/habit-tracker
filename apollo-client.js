import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HASURA_URI,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_KEY,
  },
  cache: new InMemoryCache(),
});

export default client;
