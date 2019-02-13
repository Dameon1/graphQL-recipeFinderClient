import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { GET_USER_SAVED_RECIPES_QUERY } from "../actions";

const UserSavedRecipes = props => {
  return (
    <Query
      {...props}
      query={GET_USER_SAVED_RECIPES_QUERY}
      fetchPolicy="network-only"
    >
      {payload => props.children(payload)}
    </Query>
  );
};

UserSavedRecipes.propTypes = {
  children: PropTypes.func.isRequired
};

export default UserSavedRecipes;
