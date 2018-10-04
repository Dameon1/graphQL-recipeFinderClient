
import React from 'react';
import "../styles/multipleRecipesDisplay.css";
import { fetchRecipesFromSpoonacularById } from '../../actions/spoonacularActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export function MultipleRecipesDisplay (props) {
 
  return (
    <div className=" recipeImageBox" 
         key={ props.index } 
         value={ props.id } >
      <h2 className="multipleRecipeTitle">{props.title}</h2>
      <img className="multipleRecipeImage" 
           src={ props.image } 
           alt={`Of ${props.title}`}>
      </img>
      <p>Ingredients used: { props.usedIngredientCount }</p>
      <p>Missing ingredients: { props.missedIngredientCount }</p>
      <Link to={ `/recipe/${props.id}` }>
        <button className="getRecipeButton" 
                onClick={ () => props.dispatch(fetchRecipesFromSpoonacularById(props.id)) }>
          Get Recipe
        </button>
      </Link> 
    </div>
    )
};
   
export default connect()(MultipleRecipesDisplay);
  