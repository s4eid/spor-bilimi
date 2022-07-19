import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(message);
      });
    }
  }
);
const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_URI,
  credentials: "include",
  // headers: {
  //   Origin: process.env.NEXT_PUBLIC_URL,
  // },
  // fetchOptions: {
  //   credentials: "same-origin",
  // },
});

export default function createApolloClient() {
  return new ApolloClient({
    credentials: "same-origin",
    ssrMode: typeof window === "undefined",
    link: from([errorLink, link]),
    cache: new InMemoryCache({
      // typePolicies: {
      // products: {
      //   keyFields: ["product_id"],
      // },
      // },
    }),
  });
}

const _link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BLOG_URI,
  // credentials: "include",
  // headers: {
  //   Origin: process.env.NEXT_PUBLIC_URL,
  // },
  // fetchOptions: {
  //   credentials: "same-origin",
  // },
});
export const blogApi = new ApolloClient({
  credentials: "same-origin",
  ssrMode: typeof window === "undefined",
  link: _link,
  cache: new InMemoryCache(),
  // typePolicies: {
  // products: {
  //   keyFields: ["product_id"],
  // },
  // },
});
