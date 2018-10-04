
import React from 'react';
import RecipeSearchForm  from '../display/RecipeSearchForm';
import '../styles/dashboard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchRecipeIdsFromDatabase,
  userIsSigningIn } from '../../actions/userActions';

export class Dashboard extends React.Component {
    
    componentWillMount() {
        if(this.props.loggedIn) {
          this.props.dispatch(userIsSigningIn())
          this.props.dispatch(fetchRecipeIdsFromDatabase(this.props.userId,this.props.authToken))
        } 
    }; 
  
    render() {
      if(this.props.isSearching) { 
          return <Redirect to='/searchedRecipes' /> 
        }
      return (
        <div className="dashboard">
          <div className="">
            <h2 className="dashboardHeading">
              Welcome { (this.props.loggedIn)? <span className="userNameTextForDashboardHeading">{ this.props.username.toUpperCase() } </span> : null } to what2eat 
            </h2>
          </div>
          <RecipeSearchForm />
        </div>
      );
    };

};

const mapStateToProps = state => {
    return {
      userId: state.authReducer.currentUser.id || "",
      authToken:state.authReducer.authToken,
      loggedIn:state.authReducer.loggedIn,
      username:state.authReducer.currentUser.username,
      isSearching:state.recipeReducer.isSearching  
    };  
};

export default connect(mapStateToProps)(Dashboard);
