//TODO    ****CREATE STYLED COMPONENT FOR "recipeImageBox"

import React, { Component } from "react";
import { Link } from "@reach/router";
import { MultiRecipeImage, MultiRecipeButton } from "./styles";

export class UserDisplayedRecipes extends Component {
  render() {
    const item = this.props.props;
    return (
      <div className="recipeImageBox" key={item.id} value={item.id}>
        {console.log(item.id)}
        {item.title}
        <MultiRecipeImage src={item.image} alt={`Of ${item.title}`} />

        <Link to={`/singleRecipe/${this.props.props.id}`}>
          <MultiRecipeButton>Get Recipe</MultiRecipeButton>
        </Link>
      </div>
    );
  }
}

export default UserDisplayedRecipes;
