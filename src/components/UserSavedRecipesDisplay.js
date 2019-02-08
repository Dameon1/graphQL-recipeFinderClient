import React, { Component } from "react";
import { Query } from "react-apollo";
import Spinner from "react-spinkit";
import UserDisplayedRecipes from "./UserDisplayedRecipes";
//import Error from '../components/ErrorMessage';
import {
  RecipeDisplayContainer,
  UserNoSavedRecipes,
  NoSavedRecipeText
} from "./styles";

import { USER_SAVED_RECIPES_QUERY } from "../actions";

export class UserSavedRecipesDisplay extends Component {
  render() {
    return (
      <Query query={USER_SAVED_RECIPES_QUERY} fetchPolicy="network-only">
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          if (data && data.fetchRecipesFromSpoonacularInBulk[0].id === null) {
            return (
              <UserNoSavedRecipes>
                <NoSavedRecipeText>
                  You currently have no saved recipes.
                </NoSavedRecipeText>
              </UserNoSavedRecipes>
            );
          }
          const results = data.fetchRecipesFromSpoonacularInBulk.map(
            (recipe, i) => <UserDisplayedRecipes item={recipe} key={i} />
          );
          return <RecipeDisplayContainer>{results}</RecipeDisplayContainer>;
        }}
      </Query>
    );
  }
}

export default UserSavedRecipesDisplay;
