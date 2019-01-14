import "../styles/recipeSearchForm.css";
import React from 'react';
import Checkbox from './Checkbox';
import { Query, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import getState from '../../actions/getCurrentState';
import { Link, navigate } from '@reach/router';
import updateCurrentSearchTerm from '../../actions/updateCurrentSearchTerm';

export const Query_Recipes = gql`
  query($queryString: String!){
    fetchRecipesFromSpoonacular(queryString:$queryString){
      instructions
      usedIngredientCount
      image
      title
      id      
    }
  }
`;

export class RecipeSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      items : ['Chicken','Eggs',"Cheese","Flour","Salt","Bacon","Honey","Butter","Cayenne","Sugar","Rice","Celery",
                'Agave','Cilantro','Cinnamon','Dijon','Lemon','Garlic'],
      queryString : "",
    }
  }
  
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } 
    this.selectedCheckboxes.add(label);
  }

  createCheckbox = label => {
    return (
      <Checkbox 
        label= { label }
        handleCheckboxChange= { this.toggleCheckbox }
        key= { label } />
    )
  }
  
  createCheckboxes = () => (
    this.state.items.map(this.createCheckbox)
  )

  addIngredents = (e) => {
    e.preventDefault();
    let value = this.input.value.trim();
    let recipeItemsToLowerCase = this.state.items.map(item => item.toLowerCase());
    let newIngredientToLowerCase = value.toLowerCase();
    if (recipeItemsToLowerCase.includes(newIngredientToLowerCase)) {
      return alert("Ingredient already included") 
    }
    if (value.length<3) { 
      return alert("Ingredient is invalid") 
    }
    this.setState({
      items:[...this.state.items,value],
    });
    this.input.value="";      
  }

    handleFormSubmit = async formSubmitEvent => {
      formSubmitEvent.preventDefault();    
      if(this.selectedCheckboxes.size === 0) { return alert('Please select some ingredients') }
      for (const checkbox of this.selectedCheckboxes) {
        this.setState({queryString: this.state.queryString + checkbox + ','});
      };
      // this.props.updateCurrentSearchTerm({
      //   variables: {
      //     value: this.state.queryString
      //   }
      // })
      //updateCurrentSearchTerm({value:this.state.queryString});  
    //let recipeString = this.state.queryString.slice(0,-1);
    //this.props.dispatch(userIsSearching());
    //this.props.dispatch(fetchRecipesFromSpoonacular(recipeString));
    //navigate('/searchResults');
  }

  render() {
    const {currentUser} = this.props.currentState;
    return (
      <div className="dashboard">
        <div className="">
          <h2 className="dashboardHeading">
            Welcome {currentUser} to what2eat 
          </h2>
        </div>
      <div>
        <form className="addIngredientForm" onSubmit = { (e)=>this.addIngredents(e) } > 
          <label htmlFor="addIngredient" 
                 aria-labelledby="addIngredient"
                 className="addIngredientLabel" >
            Add Your Special Ingredients Here
          </label>
          <input className="addIngredientInputField" 
                 type="text" 
                 placeholder=" Add Ingredient" 
                 name="addIngredient" 
                 id="addIngredient" 
                 ref={ input => (this.input = input) }
                  />
          <button className="addIngredientButton" type="submit" >Add</button>
        </form>
        <form onSubmit = { this.handleFormSubmit } className = "recipeSearchForm" >
          {this.createCheckboxes()}
          <button className = "recipeSearchButton" type = "submit">Search</button>
        </form>         
      </div>
        {/* <Query query={Query_Recipes}
               variables={ { queryString:this.state.queryString } }
        >
        {({ loading, error, data }) => {
          console.log(this.props) 
          console.log(data)    
          if (loading) return <p>Loading...</p>;
          if (error) return `${error.message}`;        
          return  (
            <div>
              <form onSubmit={this.handleFormSubmit} className="recipeSearchForm">
                {this.createCheckboxes()}
                <button className="recipeSearchButton" type="submit">Search</button>
              </form>
            </div>
          )
        }}
        </Query> */}
      </div>
      
    )
  }
}

export default compose(
  graphql(updateCurrentSearchTerm,{name:'updateCurrentSearchTerm'}),
  graphql(getState,{
    props: ({ data: { currentState }
    }) => ({   
     currentState
   })  
 })
)(RecipeSearchForm)
// import { fetchRecipesFromSpoonacular } from '../../actions/spoonacularActions';
// import { userIsSearching } from "../../actions/userActions";
// import { connect } from 'react-redux';

//  export default class RecipeSearchForm extends React.Component {
//   constructor(props) {
//     super(props);
  
     
 
  

//   handleFormSubmit = formSubmitEvent => {
//     formSubmitEvent.preventDefault();
    
//     if(this.selectedCheckboxes.size === 0) { return alert('Please select some ingredients') }
//     for (const checkbox of this.selectedCheckboxes) {
//       this.setState({queryString: this.state.queryString + checkbox + ','});
//     };   
//     //let recipeString = this.state.queryString.slice(0,-1);
//     //this.props.dispatch(userIsSearching());
//     //this.props.dispatch(fetchRecipesFromSpoonacular(recipeString));
    
//   }
    
  

 
//   render() {
//     return (
//       <div>
//       <form className="addIngredientForm" onSubmit = { (e)=>this.addIngredents(e) } > 
//       <label htmlFor="addIngredient" 
//             aria-labelledby="addIngredient"
//             className="addIngredientLabel" >
//        Add Your Special Ingredients Here
//      </label>
//      <input className="addIngredientInputField" 
//             type="text" 
//             placeholder=" Add Ingredient" 
//             name="addIngredient" 
//             id="addIngredient" 
//             ref={ input => (this.input = input) }
//              />
//      <button className="addIngredientButton" type="submit" >Add</button>
//    </form>
      
    
                    
//               <form onSubmit = { this.handleFormSubmit } className = "recipeSearchForm" >
//                 {this.createCheckboxes()}
//                 <button className = "recipeSearchButton" type = "submit">Search</button>
//               </form> 
               
              
//           {/* {data.song.map((item, i) => (
//             <div key={i} className="songBox">
//               <img src={item.image} alt='fix'/>
//               <div>
//               <h3>{item.artist}</h3>
//               <a href={item.songUrl} target='blank'>{item.title}</a>
//               </div>
//             </div>
//           ))}          */}
//        </div> 
//       );
//     }}
//   </Query>
//        </div>
//        )
//   }
// }
 // {/* //       query={Query_Recipes}
  //       variables={this.state.queryString}
  //       //refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  //     >
  //       {(query, { data, error, loading }) => { */}
 // {/* //        if(data){console.log(query)}
  //         return (
  //           <div>
  //                 <form className="addIngredientForm" onSubmit = { (e)=>this.addIngredents(e) } > 
  //         <label htmlFor="addIngredient" 
  //                aria-labelledby="addIngredient"
  //                className="addIngredientLabel" >
  //           Add Your Special Ingredients Here
  //         </label>
  //         <input className="addIngredientInputField" 
  //                type="text" 
  //                placeholder=" Add Ingredient" 
  //                name="addIngredient" 
  //                id="addIngredient" 
  //                ref={ input => (this.input = input) }
  //                 />
  //         <button className="addIngredientButton" type="submit" >Add</button>
  //       </form>
  //       <form onSubmit = { this.handleFormSubmit } className = "recipeSearchForm" >
  //         {this.createCheckboxes()}
  //         <button className = "recipeSearchButton" type = "submit">Search</button>
  //       </form> 
  //       </div> 
  //       )}}
  //     </Query>
  //   );
  // }
  // render() {
  //   return (
  //     <div>
  //       <form className="addIngredientForm" onSubmit = { (e)=>this.addIngredents(e) } > 
  //         <label htmlFor="addIngredient" 
  //                aria-labelledby="addIngredient"
  //                className="addIngredientLabel" >
  //           Add Your Special Ingredients Here
  //         </label>
  //         <input className="addIngredientInputField" 
  //                type="text" 
  //                placeholder=" Add Ingredient" 
  //                name="addIngredient" 
  //                id="addIngredient" 
  //                ref={ input => (this.input = input) }
  //                 />
  //         <button className="addIngredientButton" type="submit" >Add</button>
  //       </form>
  //       <form onSubmit = { this.handleFormSubmit } className = "recipeSearchForm" >
  //         {this.createCheckboxes()}
  //         <button className = "recipeSearchButton" type = "submit">Search</button>
  //       </form>         
  //     </div>
  //   );
  // };



// const mapStateToProps = state => ({
//    isSearching:state.recipeReducer.isSearching
// });

// export default connect(mapStateToProps)(RecipeSearchForm); *///}
