import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from 'react-spinkit';
//import Error from '../components/ErrorMessage';

const USER_SAVED_RECIPES = gql`
  query USER_SAVED_RECIPES {
    fetchRecipesFromSpoonacularInBulk {
      image
      title
    }
  }
`;

export default class UserSavedRecipes extends Component {
  render() {
    return (
     <Query query={USER_SAVED_RECIPES}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner spinnername="circle" fadeIn='none' />;
        if (error) return <p>ERROR: {error.message}</p>;
        console.log(data)
        const results = data.fetchRecipesFromSpoonacularInBulk.map((recipe,i) =>  <p key={i}>{recipe.title}</p>);
        return results;
      }}
     </Query>
    )
  }
}
