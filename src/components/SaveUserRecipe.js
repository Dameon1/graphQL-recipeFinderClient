import React from "react";
import { Mutation } from "react-apollo";
import {SAVE_USER_RECIPE_MUTATION} from "../actions";
import PropTypes from "prop-types";



const SaveUserRecipe = props => {
  return (
    <Mutation {...props} mutation={SAVE_USER_RECIPE_MUTATION} variables={props.variables}>
      {payload => props.children(payload)}
    </Mutation>
  );
};

SaveUserRecipe.propTypes = {
  children: PropTypes.func.isRequired
};

export default SaveUserRecipe;