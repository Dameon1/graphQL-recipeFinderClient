import React, { Fragment } from 'react';
import { Query, graphql, compose, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from 'react-spinkit';
import getState from '../actions/getCurrentState';
import './styles/singleRecipe.css';

export const GET_RECIPE_BY_ID = gql`
  query fetchRecipesFromSpoonacularById ($id: Int!){
    fetchRecipesFromSpoonacularById(id:$id){
      image
      title
      id
      analyzedInstructions {
        steps {
          step
        }
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation SAVE_RECIPE($recipeId:Int){
    saveRecipe(recipeId:$recipeId) {
      recipeId
    }
  }
`;

export class SingleRecipeDisplay extends React.Component {
  
  render() {
   let location = window.location.pathname.split('/')
   console.log(this.props)
    //const isLoggedIn = this.props.me.username
    return (
      <Query query={GET_RECIPE_BY_ID}
           variables= {{
             id: parseInt(location[2],10)
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
                <Mutation mutation={SAVE_RECIPE} variables={{recipeId:item.id}} >
                {(saveRecipe,{ data, loading, error }) => {

                  console.log(data)
                  return (
                    <button onClick={()=>saveRecipe(item.id)}>Click Me</button>
                  )
                }}
                </Mutation>
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
    props: ({ data: { currentState,me }
    }) => ({   
     currentState,me   
   })  
 })
)(SingleRecipeDisplay)