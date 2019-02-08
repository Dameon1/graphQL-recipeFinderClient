import casual from 'casual';

const testRecipe = {
  id: 47891,
  image: "https://spoonacular.com/recipeImages/47891-312x231.jpg",
  imageType: "jpg",
  index: 4,
  likes: 0,
  missedIngredientCount: 1,
  title: "Apple Tart",
  usedIngredientCount: 3
};

const testUser = () => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
});

const store = {
  currentState: {
    __typename: "currentState",
    //currentSearchTerm: "",
  },
  getState: jest.fn(),
 
};

const configs = {
   apiRecipes: [12232, 1221]
};

module.exports = {
  configs,
  store,
  testUser,
  testRecipe
}