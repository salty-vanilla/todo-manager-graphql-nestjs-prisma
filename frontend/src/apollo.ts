import { ApolloClient, InMemoryCache, HttpLink, createHttpLink, ApolloLink } from "@apollo/client";
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { API_SERVER_URI } from "./config/constants";

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: API_SERVER_URI,
    credentials: 'include',
  });

  // const authLink = setContext((_, { headers }) => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : "",
  //     }
  //   }
  // })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
