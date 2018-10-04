
export const FETCH_RECIPES_FROM_SPOONACULAR_REQUEST = 'FETCH_RECIPES_FROM_SPOONACULAR_REQUEST';
export const fetchRecipesFromSpoonacularRequest = () => ({
  type: FETCH_RECIPES_FROM_SPOONACULAR_REQUEST,
})

export const FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS = 'FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS';
export const fetchRecipesFromSpoonacularSuccess = recipes => ({
    type: FETCH_RECIPES_FROM_SPOONACULAR_SUCCESS,
    recipes
});

export const FETCH_RECIPES_FROM_SPOONACULAR_ERROR = 'FETCH_RECIPES_FROM_SPOONACULAR_ERROR';
export const fetchRecipesFromSpoonacularError = error => ({
    type: FETCH_RECIPES_FROM_SPOONACULAR_ERROR, 
    error
});

export const FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST = 'FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST';
export const fetchSingleRecipeFromFromSpoonacularRequest = () => ({
  type: FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_REQUEST,
});

export const FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS = 'FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS';
export const fetchSingleRecipeFromSpoonacularSuccess = recipe => ({
    type:FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_SUCCESS,
    viewingSingleItem:true,
    recipe
});

export const FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR = 'FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR';
export const fetchSingleRecipeFromSpoonacularError = error => ({
    type: FETCH_SINGLE_RECIPE_FROM_SPOONACULAR_ERROR, 
    error
});

export const FETCH_RECIPES_INBULK_FROM_SPOONACULAR_REQUEST = 'FETCH_RECIPES_INBULK_FROM_SPOONACULAR_REQUEST';
export const fetchRecipesInbulkFromSpoonacularRequest = () => ({
  type: FETCH_RECIPES_INBULK_FROM_SPOONACULAR_REQUEST,
});

export const  FETCH_RECIPES_INBULK_FROM_SPOONACULAR_SUCCESS = ' FETCH_RECIPES_INBULK_FROM_SPOONACULAR_SUCCESS';
export const fetchRecipesInbulkFromSpoonacularSuccess = recipes => ({
    type: FETCH_RECIPES_INBULK_FROM_SPOONACULAR_SUCCESS,
    recipes
});

export const  FETCH_RECIPES_INBULK_FROM_SPOONACULAR_ERROR = ' FETCH_RECIPES_INBULK_FROM_SPOONACULAR_ERROR';
export const fetchRecipesInbulkFromSpoonacularError = error => ({
    type:  FETCH_RECIPES_INBULK_FROM_SPOONACULAR_ERROR, 
    error
});


export const fetchRecipesFromSpoonacular = (queryString) => (dispatch) =>  {
    dispatch(fetchRecipesFromSpoonacularRequest());    
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${queryString}&limitLicense=false&number=20&ranking=1`, {
              cache: 'no-cache', 
              credentials: 'same-origin',
              headers: { 'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
                         'content-type': 'application/json' },
              method: 'GET', 
              mode: 'cors', 
              redirect: 'follow', 
              referrer: 'no-referrer', 
              })
    .then(response => response.json())
    .then(response => dispatch(fetchRecipesFromSpoonacularSuccess(response))) 
    .catch(error => dispatch(fetchRecipesFromSpoonacularError(error)));
};
  
export const fetchRecipesFromSpoonacularById = (id) => (dispatch) => {
    dispatch(fetchSingleRecipeFromFromSpoonacularRequest());
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`, {
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: { 'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
                    'content-type': 'application/json' },
            method: 'GET', 
            mode: 'cors', 
            redirect: 'follow', 
            referrer: 'no-referrer', 
            })
    .then(results => results.json() )        
    .then(recipe =>  dispatch(fetchSingleRecipeFromSpoonacularSuccess(recipe)))
    .catch(error => dispatch(fetchSingleRecipeFromSpoonacularError(error)));
};

export const fetchRecipesFromSpoonacularInBulk = (idString) => (dispatch) => {
    dispatch(fetchRecipesInbulkFromSpoonacularRequest());
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=${idString}`, {
              cache: 'no-cache', 
              credentials: 'same-origin',
              headers: { 'X-Mashape-Key': 'KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY',
                         'content-type': 'application/json' },
              method: 'GET', 
              mode: 'cors', 
              redirect: 'follow', 
              referrer: 'no-referrer', 
              })
    .then(results => results.json())        
    .then(recipes => dispatch(fetchRecipesInbulkFromSpoonacularSuccess(recipes)))
    .catch(error => dispatch(fetchRecipesInbulkFromSpoonacularError(error)));
};
