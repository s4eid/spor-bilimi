import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";
import createApolloClient from "./apolloBlogClient";

let apolloClient: ApolloClient<NormalizedCacheObject>;

export function initializeApolloB(initialStateB = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialStateB) {
    // Get existing cache, loaded during client side data fetching
    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore(initialStateB);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApolloB(initialStateB: any) {
  const store = useMemo(
    () => initializeApolloB(initialStateB),
    [initialStateB]
  );
  return store;
}
