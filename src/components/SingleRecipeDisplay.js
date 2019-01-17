import React, { Fragment } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-spinkit';

import getState from '../actions/getCurrentState';
import './styles/singleRecipe.css';

export const GET_RECIPE_BY_ID = gql`
  query fetchRecipesFromSpoonacularById ($id: Int!){
    fetchRecipesFromSpoonacularById(id:$id){
      instructions
      usedIngredientCount
      image
      title
      id
      missedIngredientCount
      analyzedInstructions {
        steps {
          step
        }
      }
    }
  }
`;

export class SingleRecipeDisplay extends React.Component {

  render() {
    return (
      <Query query={GET_RECIPE_BY_ID}
           variables= {{
             id: this.props.currentState.currentRecipe
           }} >
      {({ data, loading, error }) => {
        if (loading) return <Spinner spinnername="circle" fadeIn='none' />;
        if (error) return <p>ERROR: {error.message}</p>;


        let item = data.fetchRecipesFromSpoonacularById;
        let instructions = "No instructions available at this time";
        if (!item) { return }
        if (item.analyzedInstructions.length !== 0) {
            instructions = item.analyzedInstructions[0].steps.map((item,index) => {
              return (        
                <div key={index} className='recipeInstructionsText'>
                  {" " + (index+1) + ". " + item.step + "\n"}
                </div>
                )
              });
            }
        return (
          <div className='recipesDisplayBox'>
            <Fragment> 
              <div className='recipeOverview'>
                <h2 className='singleRecipeDisplayTitleText'>{ item.title }</h2>
                <img className="sigleRecipeImage" 
                    src={ item.image } 
                    alt={ item.title } 
                />
                <div className='recipeInstructions'>         
                  { instructions }        
                </div>
              </div>
            </Fragment>
          </div>
          )
          }}     
    </Query>
    )
  }
}

export default compose(
  graphql(getState,{
    props: ({ data: { currentState }
    }) => ({   
     currentState
   })  
 })
)(SingleRecipeDisplay)