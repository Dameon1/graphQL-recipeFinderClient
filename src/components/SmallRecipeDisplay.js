import React from "react";
import { Link } from "@reach/router";
import {
  MultiRecipeButton,
  MultiRecipeImage,
  SmallRecipeContainer,
  SmallRecipeTitleText
} from "./styles";

export class SmallRecipeDisplay extends React.Component {
  render() {
    const {
      index,
      id,
      title,
      image,
      usedIngredientCount,
      missedIngredientCount
    } = this.props.props;
    return (
      <SmallRecipeContainer key={index} value={id}>
        <SmallRecipeTitleText>{title}</SmallRecipeTitleText>
        <MultiRecipeImage src={image} alt={`Of ${title}`} />
        <p>Ingredients used: {usedIngredientCount}</p>
        <p>Missing ingredients: {missedIngredientCount}</p>
        <Link to={`/singleRecipe/${id}`}>
          <MultiRecipeButton>Get Recipe</MultiRecipeButton>
        </Link>
      </SmallRecipeContainer>
    );
  }
}

export default SmallRecipeDisplay;
