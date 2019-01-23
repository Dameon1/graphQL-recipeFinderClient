import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const DELETE_RECIPE = gql`
  mutation DELETE_RECIPE($recipeId:Int){
    deleteRecipe(recipeId:$recipeId) 
  }
`;

const DeleteUserRecipe = props => {
  return (
    <Mutation {...props} mutation={DELETE_RECIPE} variables={props.variables}>
      {payload => props.children(payload)}
    </Mutation>
  ) 
};

DeleteUserRecipe.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DeleteUserRecipe;
export { DELETE_RECIPE };