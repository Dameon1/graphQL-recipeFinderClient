import gql from 'graphql-tag'


export default gql`
  query {
    CurrentState @client {
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
      number
    }
  }
`