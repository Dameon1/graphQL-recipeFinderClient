
import { API_BASE_URL } from '../config';
import { fetchRecipesFromSpoonacularInBulk } from './spoonacularActions';

export const FETCH_RECIPES_FROM_DATABASE_REQUEST = 'FETCH_RECIPES_FROM_DATABASE_REQUEST';
export const fetchRecipesFromDatabaseRequest = () => ({
    type: FETCH_RECIPES_FROM_DATABASE_REQUEST,
});

export const FETCH_RECIPES_FROM_DATABASE_SUCCESS = 'FETCH_RECIPES_FROM_DATABASE_SUCCESS';
export const fetchRecipesFromDatabaseSuccess = recipes => ({
    type: FETCH_RECIPES_FROM_DATABASE_SUCCESS,
    recipes
});

export const FETCH_RECIPES_FROM_DATABASE_ERROR = 'FETCH_RECIPES_FROM_DATABASE_ERROR';
export const fetchRecipesFromDatabaseError = error => ({
    type: FETCH_RECIPES_FROM_DATABASE_ERROR, 
    error
});

export const POST_RECIPE_TO_DATABASE_REQUEST = 'POST_RECIPE_TO_DATATBASE_REQUEST';
export const postRecipeToDatabaseRequest = () => ({
    type:POST_RECIPE_TO_DATABASE_REQUEST, 
});

export const POST_RECIPE_TO_DATABASE_SUCCESS = 'POST_RECIPE_TO_DATATBASE_SUCCESS';
export const postRecipeToDatabaseSuccess = () => ({
	type: POST_RECIPE_TO_DATABASE_SUCCESS,
});

export const POST_RECIPE_TO_DATABASE_ERROR = 'POST_RECIPE_TO_DATATBASE_ERROR';
export const postRecipeToDataBaseError = error => ({
    type: POST_RECIPE_TO_DATABASE_ERROR, 
    error
});

export const REMOVE_RECIPE_FROM_DATABASE_REQUEST = 'REMOVE_RECIPE_FROM_DATABASE_REQUEST';
export const removeRecipeFromDatabaseRequest = () => ({
    type:REMOVE_RECIPE_FROM_DATABASE_REQUEST,
});

export const REMOVE_RECIPE_FROM_DATABASE_SUCCESS = 'REMOVE_RECIPE_FROM_DATABASE_SUCCESS';
export const removeRecipeFromDatabaseSuccess = () => ({
    type: REMOVE_RECIPE_FROM_DATABASE_SUCCESS,
});

export const REMOVE_RECIPE_FROM_DATABASE_ERROR = 'REMOVE_RECIPE_FROM_DATABASE_ERROR';
export const removeRecipeFromDatabaseError = error => ({
    type: REMOVE_RECIPE_FROM_DATABASE_ERROR, 
    error
});

export const CHANGE_RECIPE_SEARCH_OPTIONS = 'CHANGE_RECIPE_SEARCH_OPTIONS';
export const changeRecipeSearchOptions = checkboxItem => ({
    type: CHANGE_RECIPE_SEARCH_OPTIONS, 
    checkboxItem
});

export const CHANGING_SINGLE_ITEM_VIEW = 'CHANGING_SINGLE_ITEM_VIEW';
export const changingSingleItemView = () => ({
    type: CHANGING_SINGLE_ITEM_VIEW, 
});

export const USER_IS_NOT_SEARCHING = 'USER_IS_NOT_SEARCHING';
export const userIsNotSearching = ()=> ({
    type: USER_IS_NOT_SEARCHING, 
});

export const USER_IS_SEARCHING = 'USER_IS_SEARCHING';
export const userIsSearching = () => ({
    type: USER_IS_SEARCHING, 
});

export const USER_IS_SIGNING_IN = 'USER_IS_SIGNING_IN';
export const userIsSigningIn = () => ({
    type: USER_IS_SIGNING_IN, 
});

export const USER_IS_SIGNING_OUT = 'USER_IS_SIGNING_OUT';
export const userIsSigningOut = () => ({
    type: USER_IS_SIGNING_OUT, 
});

export const fetchRecipeIdsFromDatabase = (userId,authToken) => (dispatch) => {
    dispatch(fetchRecipesFromDatabaseRequest());
    return fetch(`${API_BASE_URL}/api/recipes/?userId=${userId}`,{
      headers: { 'Authorization': `Bearer ${authToken}` }})
    .then(res => {            
      if (!res.ok) { return dispatch(fetchRecipesFromDatabaseError(res.statusText))}
      return res.json() })
    .then(recipes => dispatch(fetchRecipesFromDatabaseSuccess(recipes)))
    .catch(error => dispatch(fetchRecipesFromDatabaseError(error)));
}

export const postRecipeToDatabase = (recipeId,userId,authToken) => (dispatch) => {
    dispatch(postRecipeToDatabaseRequest());
    return fetch(`${API_BASE_URL}/api/recipes`, {
        body: JSON.stringify({recipeId:recipeId,}), 
        cache: 'no-cache', 
        headers: { 'Authorization': `Bearer ${authToken}`,
                   'content-type': 'application/json' },
        method: 'POST',
        mode: 'cors', 
        redirect: 'follow', 
        referrer: 'no-referrer',})
    .then(res => {
        if (!res.ok) { return Promise.reject(res.statusText)}
        return res.json();
        })
    .then(response => dispatch(postRecipeToDatabaseSuccess()))
    .catch(error => dispatch(postRecipeToDataBaseError(error)));
};

export const removeRecipeFromDatabase = (id,userId,authToken) => (dispatch) => {
    dispatch(removeRecipeFromDatabaseRequest());
    return fetch(`${API_BASE_URL}/api/recipes/${id}`, {
        cache: 'no-cache', 
        headers: { 'Authorization': `Bearer ${authToken}`,
                   'content-type': 'application/json' },
        method: 'DELETE',
        mode: 'cors', 
        redirect: 'follow',
        referrer: 'no-referrer', 
      })
    .then(() => dispatch(fetchRecipeIdsFromDatabase(userId,authToken)) )
    .catch(error => dispatch(fetchRecipesFromDatabaseError(error)));
};

export const getUserRecipesInBulkFromSpoonacular = (recipes) => (dispatch) => {

        let recipeBulkString="";
        for (let i =0;i<recipes.length;i++){
          recipeBulkString += recipes[i].recipeId+",";
        }

        let recipeString = recipeBulkString.slice(0,-1);
        dispatch(fetchRecipesFromSpoonacularInBulk(recipeString))
};

export const signingUserOut = () => (dispatch) => {
    dispatch(userIsSigningOut());
};

export const updateStateWithDatabaseResults = (userId,authToken) => (dispatch) => {
    dispatch(fetchRecipeIdsFromDatabase(userId,authToken))
};
