import React from "react";
import { Link } from "@reach/router";

export class SmallRecipeDisplay extends React.Component {
  render() {
    const { props } = this.props;
    return (
      <div className=" recipeImageBox" key={props.index} value={props.id}>
        <h2 className="multipleRecipeTitle">{props.title}</h2>
        <img
          className="multipleRecipeImage"
          src={props.image}
          alt={`Of ${props.title}`}
        />
        <p>Ingredients used: {props.usedIngredientCount}</p>
        <p>Missing ingredients: {props.missedIngredientCount}</p>
        <Link to={`/singleRecipe/${props.id}`}>
          <button className="getRecipeButton">Get Recipe</button>
        </Link>
      </div>
    );
  }
}

export default SmallRecipeDisplay;
