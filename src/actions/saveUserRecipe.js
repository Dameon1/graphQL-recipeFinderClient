import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const SAVE_RECIPE = gql`
  mutation SAVE_RECIPE($recipeId:Int){
    saveRecipe(recipeId:$recipeId) {
      recipeId
    }
  }
`;

const SaveUserRecipe = props => {
  return (
    <Mutation {...props} mutation={SAVE_RECIPE} variables={props.variables}>
      {payload => props.children(payload)}
    </Mutation>
  ) 
};

SaveUserRecipe.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SaveUserRecipe;
export { SAVE_RECIPE };