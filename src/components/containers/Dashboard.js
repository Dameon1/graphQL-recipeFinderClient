import React from 'react';
import { graphql, compose} from 'react-apollo'
import RecipeSearchForm  from '../display/RecipeSearchForm';
import '../styles/dashboard.css';
import getState from './scratchImport';
//import updateNumber from './scratchUpdate';

export class Dash extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="dashboard">
        <div className="">
          <h2 className="dashboardHeading">
            Welcome  to what2eat 
          </h2>
        </div>
        
        <RecipeSearchForm />
      
      </div>
    );
  };

};
export default compose(
//graphql(updateNumber,{name:'updateNumber'}),
graphql(getState,{
props: ({ data: { currentState }
}) => ({   
 currentState
})  
})
)(Dash)
//import Scratch from './SCRATCH';

// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {
//   fetchRecipeIdsFromDatabase,
//   userIsSigningIn } from '../../actions/userActions';


    
//     componentWillMount() {
//         if(this.props.loggedIn) {
//           this.props.dispatch(userIsSigningIn())
//           this.props.dispatch(fetchRecipeIdsFromDatabase(this.props.userId,this.props.authToken))
//         } @local
//     }; 
    
    
      // if(this.props.isSearching) { 
      //     return <Redirect to='/searchedRecipes' /> 
      //   }
    

// const mapStateToProps = state => {
//     return {
//       userId: state.authReducer.currentUser.id || "",
//       authToken:state.authReducer.authToken,
//       loggedIn:state.authReducer.loggedIn,
//       username:state.authReducer.currentUser.username,
//       isSearching:state.recipeReducer.isSearching  
//     };  
// };

// export default connect(mapStateToProps)(Dashboard);
