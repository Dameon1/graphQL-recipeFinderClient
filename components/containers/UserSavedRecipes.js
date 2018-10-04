
import React from 'react';
import UserDisplayedRecipes from '../display/UserDisplayedRecipes';
import { getUserRecipesInBulkFromSpoonacular } from '../../actions/userActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export class UserSavedRecipes extends React.Component {

  componentWillMount() {
    if(this.props.loggedIn) {
      this.props.dispatch(getUserRecipesInBulkFromSpoonacular(this.props.recipes))
    }    
  };

  render() { 
    if(!this.props.loggedIn){ return <Redirect to="/" />}
    if (this.props.loading) {
      return <Spinner spinnername="circle" fadeIn='none' />;
    }
    return (
      <div className='recipesDisplayBox'>
        { this.props.userRecipes.map((recipe,index) => ( 
          <UserDisplayedRecipes {...recipe} key={index} index={index}/>
          )
        )}       
      </div>
      )
    }
  };

const mapStateToProps = state => ({
  userRecipes: state.recipeReducer.userRecipes || [],
  recipes: state.recipeReducer.recipes || [],
  loggedIn: state.authReducer.loggedIn
});

export default connect(mapStateToProps)(UserSavedRecipes);
