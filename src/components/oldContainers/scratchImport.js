import gql from 'graphql-tag'


export default gql`
  query {
    currentState @client {
      currentUser
      recipes
      isSearching
      userRecipes
      apiRecipes
      currentApiRecipeDisplayed
      loading
      error
      returningResults
      viewingSingleItem      
      authToken 
      loggedIn
     
    }
  }
`