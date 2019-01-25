import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spinner from "react-spinkit";
import SmallRecipeDisplay from "../components/SmallRecipeDisplay";

import "../components/styles/multipleRecipesDisplay.css";

export const GET_MULTIPLE_API_RECIPES = gql`
  query getApiRecipes($queryString: String!) {
    fetchRecipesFromSpoonacular(queryString: $queryString) {
      instructions
      usedIngredientCount
      image
      title
      id
      missedIngredientCount
      errorMessage
    }
  }
`;

export default class SearchResults extends React.Component {
  render() {
    return (
      <Query
        fetchPolicy="cache-first"
        query={GET_MULTIPLE_API_RECIPES}
        variables={{
          queryString: window.location.search.slice(3, -1) || ""
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          return (
            <div className="recipesDisplayBox">
              <Fragment>
                {data.fetchRecipesFromSpoonacular.map((item, index) => {
                  return <SmallRecipeDisplay props={{ ...item }} key={index} />;
                })}
              </Fragment>
            </div>
          );
        }}
      </Query>
    );
  }
}
