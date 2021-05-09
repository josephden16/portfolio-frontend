import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getStrapiURL } from './lib/api';

const client = new ApolloClient({
  uri: getStrapiURL("/graphql"),
  cache: new InMemoryCache(),
});

export default client;
