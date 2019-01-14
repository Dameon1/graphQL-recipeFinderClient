import React from 'react';
import { Link } from '@reach/router';
import { graphql, compose } from 'react-apollo';
import getState from '../../actions/getCurrentState';



export class MultipleRecipesDisplay extends React.Component {

  render() {
    const {props} = this;
    console.log(this.props)
    return (
      <div className=" recipeImageBox" 
            key={ props.index } 
            value={ props.id } >
        <h2 className="multipleRecipeTitle">{props.title}</h2>
        <img  className="multipleRecipeImage" 
              src={ props.image } 
              alt={`Of ${props.title}`}>
        </img>
        <p>Ingredients used: { props.usedIngredientCount }</p>
        <p>Missing ingredients: { props.missedIngredientCount }</p>
        <Link to={ `/recipe/${props.id}` }>
          <button className="getRecipeButton" 
                  onClick={ () => console.log('Query Component needed') }>
            Get Recipe
          </button>
        </Link> 
      </div>
            )
        };
  }

export default compose(
  //graphql(updateNumber,{name:'updateNumber'}),
  graphql(getState,{
    props: ({ data: { currentState }
    }) => ({   
     currentState
   })  
 })
)(MultipleRecipesDisplay)




// import React from 'react';
// import "../styles/multipleRecipesDisplay.css";
// import { fetchRecipesFromSpoonacularById } from '../../actions/spoonacularActions';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// export function MultipleRecipesDisplay (props) {
 

   
// export default connect()(MultipleRecipesDisplay);
  