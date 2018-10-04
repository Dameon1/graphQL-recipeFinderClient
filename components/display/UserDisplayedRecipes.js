
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/multipleRecipesDisplay.css";
import { fetchRecipesFromSpoonacularById } from '../../actions/spoonacularActions';

export function UserDisplayedRecipes (props){

    return (
       
      <div className="recipeImageBox" 
           key={ props.index }
           value={ props.id } >
        { props.title }
        <img className="multipleRecipeImage" 
             src={ props.image } 
             alt={ `Of ${props.title}` }>
        </img>
        <Link to={ `/recipe/${props.id}` }>
          <button className="getRecipeButton" 
                  onClick={ () => props.dispatch(fetchRecipesFromSpoonacularById(props.id)) }>
            Get Recipe
          </button>
        </Link> 
      </div>
      
    );
  };
  
  export default connect()(UserDisplayedRecipes);