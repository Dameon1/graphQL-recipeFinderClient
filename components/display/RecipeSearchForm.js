
import "../styles/recipeSearchForm.css";
import React from 'react';
import Checkbox from './Checkbox';
import { fetchRecipesFromSpoonacular } from '../../actions/spoonacularActions';
import { userIsSearching } from "../../actions/userActions";
import { connect } from 'react-redux';

export class RecipeSearchForm extends React.Component {
  constructor(props) {
    super(props);
  
      this.state= {
        items : ['Chicken','Eggs',"Cheese","Flour","Salt","Bacon","Honey","Butter","Cayenne","Sugar","Rice","Celery",
                 'Agave','Cilantro','Cinnamon','Dijon','Lemon','Garlic']
          }
      }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } 
    this.selectedCheckboxes.add(label);
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let queryString = '';
    if(this.selectedCheckboxes.size === 0) { return alert('Please select some ingredients') }
    for (const checkbox of this.selectedCheckboxes) {
      queryString += checkbox+ ',';
    };   
    let recipeString = queryString.slice(0,-1);
    this.props.dispatch(userIsSearching());
    this.props.dispatch(fetchRecipesFromSpoonacular(recipeString));
  }
    
  createCheckbox = label => {
       return (
    <Checkbox 
      label= { label }
      handleCheckboxChange= { this.toggleCheckbox }
      key= { label }
    />
  )
  }
  createCheckboxes = () => (
    this.state.items.map(this.createCheckbox)
   )

  addIngredents = (e) => {
    e.preventDefault();
    let value = this.input.value;
    let recipeItemsToLowerCase = this.state.items.map(item => item.toLowerCase());
    let newIngredientToLowerCase = value.toLowerCase();
    if (recipeItemsToLowerCase.includes(newIngredientToLowerCase))
    { return alert("Ingredient already included") }
    if (value.trim().length<3)
    { return alert("Ingredient is invalid") }
    this.setState({
      items:[...this.state.items,value],
    });
    
  }

  render() {
    return (
      <div>
        <form className="addIngredientForm" onSubmit = { (e)=>this.addIngredents(e) } > 
          <label htmlFor="addIngredient" 
                 aria-labelledby="addIngredient"
                 className="addIngredientLabel" >
            Add Your Special Ingredients Here
          </label>
          <input className="addIngredientInputField" 
                 type="text" 
                 placeholder=" Add Ingredient" 
                 name="addIngredient" 
                 id="addIngredient" 
                 ref={ input => (this.input = input) }
                  />
          <button className="addIngredientButton" type="submit" >Add</button>
        </form>
        <form onSubmit = { this.handleFormSubmit } className = "recipeSearchForm" >
          {this.createCheckboxes()}
          <button className = "recipeSearchButton" type = "submit">Search</button>
        </form>         
      </div>
    );
  };

};

const mapStateToProps = state => ({
   isSearching:state.recipeReducer.isSearching
});

export default connect(mapStateToProps)(RecipeSearchForm);
