import { initialState } from "../reducers/userReducer";

export const testObj = {
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
  state: {
    recipeReducer: jest.fn(),
    ...initialState
  },
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn()
};

export const configs = {
  default: true,
  label: "My Label",
  element: "myElement",
  apiRecipes: [12232, 1221]
};

export const dispatch = jest.fn();

export const props = {
  apiRecipes: configs.apiRecipes,
  dispatch
};
