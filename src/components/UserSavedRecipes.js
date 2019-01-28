import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Spinner from "react-spinkit";
import UserDisplayedRecipes from "./UserDisplayedRecipes";
//import Error from '../components/ErrorMessage';
import {RecipeDisplayContainer} from './styles'
export const USER_SAVED_RECIPES = gql`
  query USER_SAVED_RECIPES {
    fetchRecipesFromSpoonacularInBulk {
      image
      title
      id
    }
  }
`;

export class UserSavedRecipes extends Component {
  render() {
    return (
      <Query query={USER_SAVED_RECIPES} fetchPolicy="network-only">
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          if (data && data.fetchRecipesFromSpoonacularInBulk[0].id === null) {
            return <p>TODO: BETTER NO SAVED RECIPES PAGE</p>;
          }
          const results = data.fetchRecipesFromSpoonacularInBulk.map(
            (recipe, i) => (
              <UserDisplayedRecipes props={recipe} key={i}>
                {recipe.title}
              </UserDisplayedRecipes>
            )
          );
          return (<RecipeDisplayContainer>{results}</RecipeDisplayContainer>);
        }}
      </Query>
    );
  }
}

export default UserSavedRecipes;
