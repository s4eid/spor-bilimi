import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

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
export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: _link,
    cache: new InMemoryCache(),
    // typePolicies: {
    // products: {
    //   keyFields: ["product_id"],
    // },
    // },
  });
}
