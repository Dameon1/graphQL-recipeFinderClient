//TODO: ****REMOVE "CURRENT_USER_QUERY" TO ITS OWN ACTION*********

import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import CURRENT_USER from "../actions/currentUserQuery";

const User = props => {
  return (
    <Query {...props} query={CURRENT_USER} fetchPolicy="cache-first">
      {payload => props.children(payload)}
    </Query>
  );
};

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
