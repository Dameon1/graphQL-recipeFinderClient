import React from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { DELETE_USER_RECIPE_MUTATION } from '../actions';

const DeleteUserRecipe = props => {
  return (
    <Mutation {...props} mutation={DELETE_USER_RECIPE_MUTATION} variables={props.variables}>
      {payload => props.children(payload)}
    </Mutation>
  );
};

DeleteUserRecipe.propTypes = {
  children: PropTypes.func.isRequired
};

export default DeleteUserRecipe;