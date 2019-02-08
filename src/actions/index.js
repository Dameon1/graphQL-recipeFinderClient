//CREATE MUTATION AND QUERY FILES

export { default as GET_CURRENT_STATE } from "./getCurrentState";

export { default as CURRENT_USER_QUERY } from "./currentUserQuery";
export { default as GET_MULTIPLE_API_RECIPES_QUERY } from "./getMultipleApiRecipesQuery";
export { default as GET_RECIPE_BY_ID_QUERY } from "./getRecipeByIdQuery";
export { default as GET_USER_SAVED_RECIPES_QUERY } from "./getUserSavedRecipesQuery";
export { default as USER_SAVED_RECIPES_QUERY } from "./userSavedRecipesQuery";

export { default as DELETE_USER_RECIPE_MUTATION } from "./deleteUserRecipeMutation";
export { default as SAVE_USER_RECIPE_MUTATION } from "./saveUserRecipeMutation";
export { default as SIGNIN_MUTATION } from "./signInMutation";
export { default as SIGN_OUT_MUTATION } from "./signOutMutation";
export { default as SIGNUP_MUTATION } from "./signUpMutation";
export { default as UPDATE_CURRENT_RECIPE_MUTATION } from "./updateCurrentRecipeMutation";
export { default as UPDATE_CURRENT_SEARCH_TERM_MUTATION } from "./updateCurrentSearchTermMutation";