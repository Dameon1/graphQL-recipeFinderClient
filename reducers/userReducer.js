
import  { 
      FETCH_RECIPES_FROM_DATABASE_REQUEST , FETCH_RECIPES_FROM_DATABASE_SUCCESS, FETCH_RECIPES_FROM_DATABASE_ERROR,
      POST_RECIPE_TO_DATABASE_REQUEST , POST_RECIPE_TO_DATABASE_SUCCESS, POST_RECIPE_TO_DATABASE_ERROR,
      REMOVE_RECIPE_FROM_DATABASE_REQUEST , REMOVE_RECIPE_FROM_DATABASE_SUCCESS, REMOVE_RECIPE_FROM_DATABASE_ERROR,
      CHANGING_SINGLE_ITEM_VIEW, USER_IS_NOT_SEARCHING, USER_IS_SEARCHING,USER_IS_SIGNING_OUT, USER_IS_SIGNING_IN} from '../actions/userActions';
         
import  { FETCH_RECIPES_FROM_SPOONACULAR_REQUEST,FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS,FETCH_RECIPES_FROM_SPOONACULAR_ERROR,
          FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST,FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS,FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR,
          FETCH_RECIPES_INBULK_FROM_SPOONACULAR_REQUEST, FETCH_RECIPES_INBULK_FROM_SPOONACULAR_SUCCESS ,FETCH_RECIPES_INBULK_FROM_SPOONACULAR_ERROR} from '../actions/spoonacularActions';

const initialState = {
    userRecipes:[],//users stored recipes
    apiRecipes:[],//api recipes
    currentApiRecipeDisplayed:[],
    loading: false,
    error: null,
    returningResults:false,
    viewingSingleItem:false,
    isSearching:false,
    recipes:[]
   
    };
    
export function recipeReducer(state=initialState, action) {
  switch (action.type) {

    case FETCH_RECIPES_FROM_DATABASE_REQUEST: 
         return Object.assign({}, state, {
            loading:true
            })

    case FETCH_RECIPES_FROM_DATABASE_SUCCESS: 
          return Object.assign({}, state, {
            recipes: [...action.recipes],
            loading:false,
            })

    case FETCH_RECIPES_FROM_DATABASE_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case POST_RECIPE_TO_DATABASE_REQUEST: 
          return Object.assign({}, state, {
            loading:true
            })

    case POST_RECIPE_TO_DATABASE_SUCCESS: 
          return Object.assign({}, state, {
            loading:false,
            })

    case POST_RECIPE_TO_DATABASE_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case REMOVE_RECIPE_FROM_DATABASE_REQUEST: 
          return Object.assign({}, state, {
            loading:true
            })

    case REMOVE_RECIPE_FROM_DATABASE_SUCCESS: 
          return Object.assign({}, state, {
            ...state,
            recipes: [...state.recipes,action.recipe],
            loading:false
            })

    case REMOVE_RECIPE_FROM_DATABASE_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case FETCH_RECIPES_FROM_SPOONACULAR_REQUEST: 
          return Object.assign({}, state, {
            loading:true
            })

    case FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS: 
          return Object.assign({}, state, {
            apiRecipes: [...action.recipes],
            loading:false
            })

    case FETCH_RECIPES_FROM_SPOONACULAR_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST: 
          return Object.assign({}, state, {
            loading:true
            })

    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS: 
          return Object.assign({}, state, {
            currentApiRecipeDisplayed: [action.recipe],
            loading:false,
            viewingSingleItem:action.viewingSingleItem
            })

    case FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case FETCH_RECIPES_INBULK_FROM_SPOONACULAR_REQUEST: 
          return Object.assign({}, state, {
            loading:true
            })

    case FETCH_RECIPES_INBULK_FROM_SPOONACULAR_SUCCESS: 
          return Object.assign({}, state, {
            ...state,
            userRecipes: [...action.recipes],
            loading:false
            })

    case FETCH_RECIPES_INBULK_FROM_SPOONACULAR_ERROR: 
          return Object.assign({}, state, {
            error:action.error,
            loading:false
            })

    case CHANGING_SINGLE_ITEM_VIEW:
          return Object.assign({},state,{
            viewingSingleItem:false,
            currentApiRecipeDisplayed:[]
            })

    case USER_IS_NOT_SEARCHING:
          return Object.assign({},state,{
            isSearching:false
            })

    case USER_IS_SEARCHING:
          return Object.assign({},state,{
            isSearching:true,
            })

    case USER_IS_SIGNING_IN:
          return Object.assign({},state,{
            userRecipes:[],
            apiRecipes:[],
            currentApiRecipeDisplayed:[],
            viewingSingleItem:false
            })

    case USER_IS_SIGNING_OUT:
          return Object.assign({},state,{
            recipes:[],
            userRecipes:[],
            apiRecipes:[],
            currentApiRecipeDisplayed:[],
            viewingSingleItem:false
            })

    default:
      return state
  }
};
