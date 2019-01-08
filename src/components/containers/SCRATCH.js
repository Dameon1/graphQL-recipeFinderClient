import {  graphql, compose} from 'react-apollo'
import React from 'react';
import './scratch.css';
//import gql from 'graphql-tag';
import getCurrentState from './scratchImport';
import updateState from './scratchUpdate';
//import { ApolloConsumer } from 'react-apollo';
// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'https://graphql.example.com' }),
//   cache: new InMemoryCache()
// })
console.log(updateState);
export class SCRATCH extends React.Component {
  
  render(){
    //console.log(this.props.updateState)
    const updateState = this.props.updateState
    const {currentUser,
      recipes,
      isSearching,
      userRecipes,
      apiRecipes,
      currentApiRecipeDisplayed,
      loading,
      error,
      returningResults,
      viewingSingleItem ,     
      authToken, 
      loggedIn,
      number} = this.props.CurrentState;
      //console.log(isSearching)
    return(
      <div>
      <h1>
      This is a test to help {currentUser}
      </h1>
     
      <div>
        <h2 className='box'>
        <p className='center'>This is the state</p>
         <br></br>
        Current number is:  {number}  <br></br>
              
        <button type='button'
                onClick={()=>console.log(this)}>
         Click Me       
                </button>
                </h2>
      </div>   
     
      </div>
    )
  }
}

export default compose(
  graphql(updateState,{name:'updateState'}),
  graphql(getCurrentState,{
    props: ({ data: { CurrentState }
    }) => ({   
     CurrentState
   })  
 })
)(SCRATCH)

// this.props.client.query({
//   query: gql`
//     query fetchRecipesFromSpoonacular($queryString: String!) {
//     recipes(name: $queryString){
//       instructions,
//       image,
//       sourceUrl,
//       id,
//       title,  
//       usedIngredientCount,
//       missedIngredientCount,
//     }
//   `,
// })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));