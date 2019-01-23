import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_RECIPES = gql` 
  query {
    recipesForUser {
      recipeId
    }      
  }      
`;


const UserSavedRecipes = props => {
  return (
    <Query {...props} query={CURRENT_USER_RECIPES} fetchPolicy="network-only">
      {payload => props.children(payload)}
    </Query>
  ) 
};

UserSavedRecipes.propTypes = {
  children: PropTypes.func.isRequired,
};

export default UserSavedRecipes;
export { CURRENT_USER_RECIPES };