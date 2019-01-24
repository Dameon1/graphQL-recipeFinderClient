import ApolloClient, { InMemoryCache } from "apollo-boost";
import { resolvers } from "./resolvers";
import API_BASE_URL from "./config";
const cache = new InMemoryCache();

const defaultState = {
  currentState: {
    __typename: "currentState",
    currentSearchTerm: "",
    currentUser: "myself",
    currentRecipe: 0,
    me: ""
  }
};

export const client = new ApolloClient({
  clientState: {
    defaults: defaultState,
    resolvers
  },
  uri: API_BASE_URL,
  credentials: "include",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  cache
});
