import React, { Component } from 'react'
import { Link } from '@reach/router';
import updateCurrentRecipe from '../actions/updateCurrentRecipe';
import { graphql, compose } from 'react-apollo';

import getState from '../actions/getCurrentState';

export class UserDisplayedRecipes extends Component {
  render() {
    const item = this.props.props;
    return (
      <div className="recipeImageBox" 
           key={ item.index }
           value={ item.id } >
        { item.title }
        <img className="multipleRecipeImage" 
             src={ item.image } 
             alt={ `Of ${item.title}` }>
        </img>
        
        <Link to={ `/singleRecipe/${this.props.props.id}` }>
          <button className="getRecipeButton" 
                  onClick={ () => this.props.updateCurrentRecipe({ variables: { value: item.id } }) }>
            Get Recipe
          </button>
        </Link> 
      </div>
      
    );
  };
}

  export default compose(
    graphql(updateCurrentRecipe,{name:'updateCurrentRecipe'}),
    graphql(getState,{
      props: ({ data: { currentState }
      }) => ({   
       currentState
     })  
   })
  )(UserDisplayedRecipes)