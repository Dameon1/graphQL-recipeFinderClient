//TODO    ****CREATE STYLED COMPONENT FOR "recipeImageBox" and "multipleRecipeTitle"**********

import React from "react";
import { Link } from "@reach/router";
import "./styles/multipleRecipesDisplay.css";
import { MultiRecipeButton, MultiRecipeImage } from "./styles";

export class SmallRecipeDisplay extends React.Component {
  render() {
    const { props } = this.props;
    return (
      <div className="recipeImageBox" key={props.index} value={props.id}>
        <h2 className="multipleRecipeTitle">{props.title}</h2>
        <MultiRecipeImage src={props.image} alt={`Of ${props.title}`} />
        <p>Ingredients used: {props.usedIngredientCount}</p>
        <p>Missing ingredients: {props.missedIngredientCount}</p>
        <Link to={`/singleRecipe/${props.id}`}>
          <MultiRecipeButton>Get Recipe</MultiRecipeButton>
        </Link>
      </div>
    );
  }
}

export default SmallRecipeDisplay;
