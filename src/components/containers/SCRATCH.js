import { graphql, compose} from 'react-apollo'
import React from 'react';
import './scratch.css';
//import gql from 'graphql-tag';
import getState from './scratchImport';
import updateNumber from './scratchUpdate';
//import { ApolloConsumer } from 'react-apollo';
// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'https://graphql.example.com' }),
//   cache: new InMemoryCache()
// })
//console.log(updateState);
class SCRATCH extends React.Component {
  
  render(){
    //console.log(this.props.updateState)
    //const updateState = this.props.updateState
    const {
      updateNumber,
      currentState : {number} } = this.props;
      console.log(this.props)
    return(
      <div>
        <h1>
          This is a test to help 
        </h1>     
          <div>
            <h2 className='box'>
            <p className='center'>This is the state</p>
            <br></br>
            Current number is:  {number}  <br></br>
            <button type='button'
                    onClick={()=>updateNumber({
                      variables: {
                        index:'number',
                        value: parseInt(number,10)+1
                      }
                    })}>
            Click Me       
                    </button>
                    </h2>
          </div>   
     
      </div>
    )
  }
}

export default compose(
  graphql(updateNumber,{name:'updateNumber'}),
  graphql(getState,{
    props: ({ data: { currentState }
    }) => ({   
     currentState
   })  
 })
)(SCRATCH)

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