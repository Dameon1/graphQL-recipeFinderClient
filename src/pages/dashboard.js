import React from 'react';
import RecipeSearchForm  from '../components/RecipeSearchForm';

export default function Dashboard() { 
  return (
    <RecipeSearchForm />
    );
};

// export default compose(
//   //graphql(updateNumber,{name:'updateNumber'}),
//   graphql(getState,{
//     props: ({ data: { currentState }
//     }) => ({   
//      currentState
//    })  
//  })
// )(Dashboard)

// ** TRANSFER INTO HOOKS?
//     componentWillMount() {
//         if(this.props.loggedIn) {
//           this.props.dispatch(userIsSigningIn())
//           this.props.dispatch(fetchRecipeIdsFromDatabase(this.props.userId,this.props.authToken))
//         } @local
//     }; 
  
    
      // if(this.props.isSearching) { 
      //     return <Redirect to='/searchedRecipes' /> 
      //   }