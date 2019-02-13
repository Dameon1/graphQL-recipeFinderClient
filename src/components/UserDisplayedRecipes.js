import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  MultiRecipeImage,
  MultiRecipeButton,
  SmallRecipeContainer,
  SmallRecipeTitleText
} from "./styles";

export class UserDisplayedRecipes extends Component {
  render() {
    const { id, title, image } = this.props.item;
    return (
      <SmallRecipeContainer key={id} value={id}>
        <SmallRecipeTitleText>{title}</SmallRecipeTitleText>
        <MultiRecipeImage src={image} alt={`Of ${title}`} />
        <Link to={`/singleRecipe/${id}`}>
          <MultiRecipeButton>Get Recipe</MultiRecipeButton>
        </Link>
      </SmallRecipeContainer>
    );
  }
}

export default UserDisplayedRecipes;
