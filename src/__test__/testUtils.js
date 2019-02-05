import { initialState } from "../reducers/userReducer";

export const testRecipe = {
  id: 47891,
  image: "https://spoonacular.com/recipeImages/47891-312x231.jpg",
  imageType: "jpg",
  index: 4,
  likes: 0,
  missedIngredientCount: 0,
  title: "Apple Tart",
  usedIngredientCount: 3
};

export const store = {
  currentState: {
    __typename: "currentState",
    //currentSearchTerm: "",
  },
  getState: jest.fn(),
 
};

export const configs = {
   apiRecipes: [12232, 1221]
};