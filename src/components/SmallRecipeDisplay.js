import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from '@reach/router';


import getState from '../actions/getCurrentState';

export class SmallRecipeDisplay extends React.Component {
  
  render() {
    const {props} = this.props;
    console.log(this.props)
    return (
      
      <div className=" recipeImageBox" 
            key={ props.index } 
            value={ props.id } >
        <h2 className="multipleRecipeTitle">{props.title}</h2>
        <img  className="multipleRecipeImage" 
              src={ props.image } 
              alt={`Of ${props.title}`}>
        </img>
        <p>Ingredients used: { props.usedIngredientCount }</p>
        <p>Missing ingredients: { props.missedIngredientCount }</p>
        <Link to={ `/singleRecipe/${props.id}` }>
          <button className="getRecipeButton" 
                  onClick={ () => console.log('Query Component needed') }>
            Get Recipe
          </button>
        </Link> 
      </div>
            )
        };
  }

  
export default compose(
  //graphql(updateNumber,{name:'updateNumber'}),
  graphql(getState,{
    props: ({ data: { currentState }
    }) => ({   
     currentState
   })  
 })
)(SmallRecipeDisplay)