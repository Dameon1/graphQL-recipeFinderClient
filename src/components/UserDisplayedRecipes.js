import React, { Component } from "react";
import { Link } from "@reach/router";

export class UserDisplayedRecipes extends Component {
  render() {
    const item = this.props.props;
    return (
      <div className="recipeImageBox" key={item.index} value={item.id}>
        {item.title}
        <img
          className="multipleRecipeImage"
          src={item.image}
          alt={`Of ${item.title}`}
        />

        <Link to={`/singleRecipe/${this.props.props.id}`}>
          <button className="getRecipeButton">Get Recipe</button>
        </Link>
      </div>
    );
  }
}

export default UserDisplayedRecipes;
