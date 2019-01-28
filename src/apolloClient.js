//TODO **DETERMINE WHAT OF THE DEFAULT STATE IS USED AND CLEAN UP**

import ApolloClient, { InMemoryCache } from "apollo-boost";
import API_BASE_URL from "./config";
const cache = new InMemoryCache();

const defaultState = {
  currentState: {
    __typename: "currentState",
    currentSearchTerm: "",
    currentUser: "myself",
    currentRecipe: 0,   
  }
};

export const client = new ApolloClient({
  clientState: {
    defaults: defaultState,
    //RESOLVERS IF NEEDED GO IN CLIENT STATE
    
  },
  uri: API_BASE_URL,
  credentials: "include",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  cache
});
