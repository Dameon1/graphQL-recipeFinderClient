import React, { Fragment } from "react";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Spinner from "react-spinkit";
import getState from "../actions/getCurrentState";
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
    }
  }
`;

export class SearchResults extends React.Component {
  render() {
    return (
      <Query
        query={GET_MULTIPLE_API_RECIPES}
        variables={{
          queryString: this.props.currentState.currentSearchTerm
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          console.log(data.fetchRecipesFromSpoonacular);
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

export default compose(
  graphql(getState, {
    props: ({ data: { currentState } }) => ({
      currentState
    })
  })
)(SearchResults);
