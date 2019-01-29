
import React from "react";
import { Link } from "@reach/router";
import "./styles/multipleRecipesDisplay.css";
import { MultiRecipeButton, MultiRecipeImage, SmallRecipeContainer,SmallRecipeTitleText } from "./styles";

export class SmallRecipeDisplay extends React.Component {
  render() {
    const { props } = this.props;
    return (
      <SmallRecipeContainer key={props.index} value={props.id}>
        <SmallRecipeTitleText>{props.title}</SmallRecipeTitleText>
        <MultiRecipeImage src={props.image} alt={`Of ${props.title}`} />
        <p>Ingredients used: {props.usedIngredientCount}</p>
        <p>Missing ingredients: {props.missedIngredientCount}</p>
        <Link to={`/singleRecipe/${props.id}`}>
          <MultiRecipeButton>Get Recipe</MultiRecipeButton>
        </Link>
      </SmallRecipeContainer>
    );
  }
}

export default SmallRecipeDisplay;
