import React from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { SAVE_USER_RECIPE_MUTATION } from "../actions";

const SaveUserRecipe = props => {
  return (
    <Mutation
      {...props}
      mutation={SAVE_USER_RECIPE_MUTATION}
      variables={props.variables}
    >
      {payload => props.children(payload)}
    </Mutation>
  );
};

SaveUserRecipe.propTypes = {
  children: PropTypes.func.isRequired
};

export default SaveUserRecipe;
