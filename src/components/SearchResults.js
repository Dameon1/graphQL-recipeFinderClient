import React from "react";
import { Query } from "react-apollo";
import Spinner from "react-spinkit";

import SmallRecipeDisplay from "../components/SmallRecipeDisplay";
import {GET_MULTIPLE_API_RECIPES_QUERY} from "../actions";
import { RecipeDisplayContainer } from "./styles";

export class SearchResults extends React.Component {
  render() {
    return (
      <Query
        fetchPolicy="cache-first"
        query={GET_MULTIPLE_API_RECIPES_QUERY}
        variables={{
          queryString: window.location.search.slice(3, -1) || ""
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          const recipes = data.fetchRecipesFromSpoonacular.map(
            (item, index) => {
              return <SmallRecipeDisplay props={{ ...item }} key={index} />;
            }
          );
          return <RecipeDisplayContainer>{recipes}</RecipeDisplayContainer>;
        }}
      </Query>
    );
  }
}

export default SearchResults;
