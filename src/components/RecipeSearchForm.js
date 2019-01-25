import React from "react";
import { navigate } from "@reach/router";
//import { graphql, compose } from "react-apollo";

import "./styles/recipeSearchForm.css";
import Checkbox from "./Checkbox";
//import getState from "../actions/getCurrentState";
//import updateCurrentSearchTerm from "../actions/updateCurrentSearchTerm";

export default class RecipeSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Chicken",
        "Eggs",
        "Cheese",
        "Flour",
        "Salt",
        "Bacon",
        "Honey",
        "Butter",
        "Cayenne",
        "Sugar",
        "Rice",
        "Celery",
        "Agave",
        "Cilantro",
        "Cinnamon",
        "Dijon",
        "Lemon",
        "Garlic"
      ],
      queryString: " "
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  createCheckbox = label => {
    return (
      <Checkbox
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    );
  };

  createCheckboxes = () => this.state.items.map(this.createCheckbox);

  addIngredents = e => {
    e.preventDefault();
    let value = this.input.value.trim();
    let recipeItemsToLowerCase = this.state.items.map(item =>
      item.toLowerCase()
    );
    let newIngredientToLowerCase = value.toLowerCase();
    if (recipeItemsToLowerCase.includes(newIngredientToLowerCase)) {
      return alert("Ingredient already included");
    }
    if (value.length < 3) {
      return alert("Ingredient is invalid");
    }
    this.setState({
      items: [...this.state.items, value]
    });
    this.input.value = "";
  };

  handleFormSubmit = async formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let queryString = "?q=";
    if (this.selectedCheckboxes.size === 0) {
      return alert("Please select some ingredients");
    }
    for (const checkbox of this.selectedCheckboxes) {
      queryString += checkbox + ",";
    }
    //let recipeString = queryString.slice(0, -1);
    // await this.setState({
    //   queryString: recipeString
    // });
    // this.props.updateCurrentSearchTerm({
    //   variables: {
    //     value: this.state.queryString
    //   }
    // });
    navigate(`/search/${queryString}`);
  };

  render() {
    return (
      <div className="dashboard">
        <div className="">
          <h2 className="dashboardHeading">
            Welcome{" "}
            {this.props.currentState === undefined
              ? null
              : this.props.currentState.currentUser}{" "}
            to what2eat
          </h2>
        </div>
        <div>
          <form
            className="addIngredientForm"
            onSubmit={e => this.addIngredents(e)}
          >
            <label
              htmlFor="addIngredient"
              aria-labelledby="addIngredient"
              className="addIngredientLabel"
            >
              Add Your Special Ingredients Here
            </label>
            <input
              className="addIngredientInputField"
              type="text"
              placeholder=" Add Ingredient"
              name="addIngredient"
              id="addIngredient"
              ref={input => (this.input = input)}
            />
            <button className="addIngredientButton" type="submit">
              Add
            </button>
          </form>
          <form onSubmit={this.handleFormSubmit} className="recipeSearchForm">
            {this.createCheckboxes()}
            <button className="recipeSearchButton" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// export default compose(
//   graphql(updateCurrentSearchTerm, { name: "updateCurrentSearchTerm" }),
//   graphql(getState, {
//     props: ({ data: { currentState } }) => ({
//       currentState
//     })
//   })
// )(RecipeSearchForm);
