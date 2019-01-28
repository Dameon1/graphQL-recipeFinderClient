//TODO: ****PUT FORMS INTO SEPARATE FILES*******

import React from "react";
import { navigate } from "@reach/router";

import {
  SearchForm,
  DashboardHeading,
  RecipeSearchButton,
  AddIngredientButton,
  AddIngredientForm,
  AddIngredientLabel,
  AddIngredientInput
} from "./styles";

import Checkbox from "./Checkbox";

export class RecipeSearchForm extends React.Component {
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
    navigate(`/search/${queryString}`);
  };

  render() {
    return (
      <div>
        <DashboardHeading>
          Welcome{" "}
          {this.props.currentState === undefined
            ? null
            : this.props.currentState.currentUser}{" "}
          to what2eat
        </DashboardHeading>

        <AddIngredientForm onSubmit={e => this.addIngredents(e)}>
          <AddIngredientLabel
            htmlFor="addIngredient"
            aria-labelledby="addIngredient"
          >
            Add Your Special Ingredients Here
          </AddIngredientLabel>
          <AddIngredientInput
            type="text"
            placeholder=" Add Ingredient"
            name="addIngredient"
            id="addIngredient"
            ref={input => (this.input = input)}
          />
          <AddIngredientButton type="submit">Add</AddIngredientButton>
        </AddIngredientForm>

        <SearchForm onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}
          <RecipeSearchButton type="submit">Search</RecipeSearchButton>
        </SearchForm>
      </div>
    );
  }
}

export default RecipeSearchForm;
