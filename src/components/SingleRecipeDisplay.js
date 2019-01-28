/* 
TODO: 
      ****SEPERATE "DELETE AND SAVE" user recipes******** 
      ****CREATE STYLED COMPONENT FOR "recipesDisplayBox" **********
*/

import React, { Fragment } from "react";
import { Query, graphql, compose } from "react-apollo";
import Spinner from "react-spinkit";
import getState from "../actions/getCurrentState";
import "./styles/singleRecipe.css";
import UserSavedRecipes from "../actions/getUserSavedRecipes";
import SaveUserRecipe from "../actions/saveUserRecipe";
import DeleteUserRecipe from "../actions/deleteUserRecipe";
import GET_RECIPE_BY_ID from '../actions/getRecipeByIdQuery';


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
          let item = data.fetchRecipesFromSpoonacularById;
          let instructions = "No instructions available at this time";
          if (!item) {
            return;
          }
          if (item.analyzedInstructions.length !== 0) {
            instructions = item.analyzedInstructions[0].steps.map(
              (item, index) => {
                return (
                  <div key={index} className="recipeInstructionsText">
                    {" " + (index + 1) + ". " + item.step + "\n"}
                  </div>
                );
              }
            );
          }
          return (
            <div className="recipesDisplayBox">
              <Fragment>
                <div className="recipeOverview">
                  <h2 className="singleRecipeDisplayTitleText">{item.title}</h2>
                  <img
                    className="singleRecipeImage"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="recipeInstructions">{instructions}</div>
                  {!this.props.me ? null : (
                    <UserSavedRecipes>
                      {({ data, loading, error, refetch }) => {
                        if (data.recipesForUser !== undefined) {
                          if (
                            data.recipesForUser
                              .map(recipe => recipe.recipeId)
                              .includes(item.id)
                          ) {
                            return (
                              <DeleteUserRecipe
                                variables={{ recipeId: item.id }}
                              >
                                {deleteRecipe => {
                                  return (
                                    <button
                                      onClick={async () => {
                                        await deleteRecipe(item.id);
                                        refetch();
                                      }}
                                    >
                                      REMOVE
                                    </button>
                                  );
                                }}
                              </DeleteUserRecipe>
                            );
                          } else {
                            return (
                              <SaveUserRecipe variables={{ recipeId: item.id }}>
                                {saveRecipe => {
                                  return (
                                    <button
                                      onClick={async () => {
                                        await saveRecipe(item.id);
                                        refetch();
                                      }}
                                    >
                                      ADD
                                    </button>
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
                </div>
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
    props: ({ data: { currentState, me, recipesForUser } }) => ({
      currentState,
      me,
      recipesForUser
    })
  })
)(SingleRecipeDisplay);
