// import { ApolloClient } from 'apollo-client'

// import gql from 'graphql-tag'

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'https://graphql.example.com' }),
//   cache: new InMemoryCache()
// })



// this.props.client.query({
//   query: gql`
//     query fetchRecipesFromSpoonacular($queryString: String!) {
//     recipes(name: $queryString){
//       instructions,
//       image,
//       sourceUrl,
//       id,
//       title,  
//       usedIngredientCount,
//       missedIngredientCount,
//     }
//   `,
// })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));