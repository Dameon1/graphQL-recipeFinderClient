import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_RECIPES =  gql` 
query{
fetchRecipesFromSpoonacular(queryString:"chicken"){
 id
 title
 
}
}`
//     # query fetchRecipesFromSpoonacular($queryString: String!) {
//     # recipes(name: $queryString){
//     #   instructions,
//     #   image,
//     #   sourceUrl,
//     #   id,
//     #   title,  
//     #   usedIngredientCount,
//     #   missedIngredientCount,
//     # }
//     # }
//   `;
  

  


export function RecipeQuery (props){ 
 
    return (
      <div>
      <h1>Hello</h1>
      <Query query={GET_RECIPES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          console.log(data);
    
          return (
            <div>
              {data.fetchRecipesFromSpoonacular.map((item, i) => {
               return( <p key={i}>{item.title}</p>)
              })}
             </div>
          )
        }}
      </Query>
      </div>
    )
  }
  // return ( 
  //   <Query query={GET_RECIPES}
  //         variables={ { name:'chicken' } }>
  //    {({ loading, error, data }) => {
  //      console.log(data)}
  //    }
  // </Query>
  // <Query    
  //             query={GET_RECIPES}
  //             variables={ { name:'chicken' } }
  //           >
  //   {({ loading, error, data }) => {
  //     console.log(data);
  //     console.log(error)
  //     //if(data.status === 204) return <p>WORKING</p>     
  //     if (loading) return <p>Loading...</p>;
  //     //if (error) return <p>{console.log(error)}Error :(</p>;        
  //     return  (
  //       <div>
  //         {/* {data.fetchRecipesFromSpoonacular.map((item, i) => (
  //           <div key={i} className="songBox">
  //             <img src={item.image} alt='fix'/>
  //             <div>
  //             <h3>{item.artist}</h3>
  //             <a href={item.sourceUrl} target='blank'>{item.title}</a>
  //             </div>
  //           </div>
  //         ))}          */}
  //       </div>
  //     );
  //   }}
  // </Query>
  //)
//};

const mapStateToProps = state => ({
  apiRecipes: state.recipeReducer.apiRecipes || [],
  loading: state.recipeReducer.loading,
 
});
