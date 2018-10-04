
import React from 'react';
import { connect } from 'react-redux';
import  MultipleRecipesDisplay  from './multipleRecipes';
import { userIsNotSearching  } from '../../actions/userActions';

export class RecipeDisplay extends React.Component {

  componentWillMount() {
      this.props.dispatch(userIsNotSearching());
  };

  render() {
    if (this.props.loading) {
      return <Spinner spinnername="circle" fadeIn='none' />;
      };

    return (
      <div className='recipesDisplayBox'> 
        {this.props.apiRecipes.map((recipe,index) => (
          <MultipleRecipesDisplay { ...recipe } key= { index } index= { index }/>
        ))}
      </div>
    )
  };
};
    
const mapStateToProps = state => ({
  apiRecipes:state.recipeReducer.apiRecipes || [],
  loading:state.recipeReducer.loading
});

export default connect(mapStateToProps)(RecipeDisplay);
