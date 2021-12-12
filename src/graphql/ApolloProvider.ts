import localStorageKeys from "consts/localStorageKeys";
import { getEnvVariable } from "utils/env";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: getEnvVariable(
    "REACT_APP_GRAPHQL_SERVER",
    "http://localhost:8080/graphql"
  ),
});

const authLink = setContext((_, { headers: passedHeaders }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(localStorageKeys.token);
  // return the headers to the context so httpLink can read them
  const headers = token
    ? { ...passedHeaders, authorization: `Bearer ${token}` }
    : { ...passedHeaders };

  return {
    headers,
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
