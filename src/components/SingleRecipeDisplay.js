/* 
TODO: ****MAKE LINK TO FULL RECIPE******
      ****SEPERATE "DELETE AND SAVE" user recipes******** 
      ****Better Display using styled components **********
      ****Fix refresh error****
*/

import React from "react";
import { Query, graphql, compose } from "react-apollo";
import Spinner from "react-spinkit";
import getState from "../actions/getCurrentState";
import {
  SingleRecipeContainer,
  SingleRecipeImage,
  SingleRecipeTitleText,
  SingleRecipeInstructionText,
  RecipeInstructionText,
  SingleRecipeActionButton
} from "./styles";
import UserSavedRecipes from "../actions/getUserSavedRecipes";
import SaveUserRecipe from "../actions/saveUserRecipe";
import DeleteUserRecipe from "../actions/deleteUserRecipe";
import GET_RECIPE_BY_ID from "../actions/getRecipeByIdQuery";

//********TODO MODULARIZE THIS COMPONENT */
export class SingleRecipeDisplay extends React.Component {
  render() {
    let location = window.location.pathname.split("/");
    return (
      <Query
        query={GET_RECIPE_BY_ID}
        fetchPolicy="cache and network"
        variables={{
          id: parseInt(location[2], 10)
        }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Spinner spinnername="circle" fadeIn="none" />;
          if (error) return <p>ERROR: {error.message}</p>;
          let {title,image,id,analyzedInstructions} = data.fetchRecipesFromSpoonacularById;
          let instructions = "No instructions available at this time";
          if (!title) {
            return;
          }
          if (analyzedInstructions.length !== 0) {
            instructions = analyzedInstructions[0].steps.map(
              ({step}, index) => {
                return (
                  <RecipeInstructionText key={index}>
                    {" " + (index + 1) + ". " + step + "\n"}
                  </RecipeInstructionText>
                );
              }
            );
          }
          return (
            <SingleRecipeContainer>
              <SingleRecipeTitleText>{title}</SingleRecipeTitleText>
              <SingleRecipeImage src={image} alt={title} />
              <SingleRecipeInstructionText>
                {instructions}
              </SingleRecipeInstructionText>
              {console.log(this.props)}
              {!this.props.me ? null : (
                <UserSavedRecipes>
                  {({ data, loading, error, refetch }) => {
                    if (data.recipesForUser !== undefined) {
                      if (
                        data.recipesForUser
                          .map(recipe => recipe.recipeId)
                          .includes(id)
                      ) {
                        return (
                          <DeleteUserRecipe variables={{ recipeId: id }}>
                            {deleteRecipe => {
                              return (
                                <SingleRecipeActionButton
                                  onClick={async () => {
                                    await deleteRecipe(id);
                                    refetch();
                                  }}
                                >
                                  REMOVE
                                </SingleRecipeActionButton>
                              );
                            }}
                          </DeleteUserRecipe>
                        );
                      } else {
                        return (
                          <SaveUserRecipe variables={{ recipeId: id }}>
                            {saveRecipe => {
                              return (
                                <SingleRecipeActionButton
                                  onClick={async () => {
                                    await saveRecipe(id);
                                    refetch();
                                  }}
                                >
                                  ADD
                                </SingleRecipeActionButton>
                              );
                            }}
                          </SaveUserRecipe>
                        );
                      }
                    }
                    return null;
                  }}
                </UserSavedRecipes>
              )}
            </SingleRecipeContainer>
          );
        }}
      </Query>
    );
  }
}

export default compose(
  graphql(getState, {
    props: ({ data: { currentState, me, recipesForUser } }) => ({
      currentState,
      me,
      // recipesForUser
    })
  })
)(SingleRecipeDisplay);
