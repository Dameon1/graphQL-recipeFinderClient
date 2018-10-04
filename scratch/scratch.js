






import React from 'react';
import {connect} from 'react-redux';
import "./styles/recipeImages.css";


export function SearchedRecipes (props) {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>

  return (
    
    <div className="recipeImageBox">
      <li key={props.id} value={props.id}> 
        {props.title}
        {/* <button onClick={()=>props.dispatch(postRecipe(props.id))}>recipeId</button>  */}
        <img src={props.image} alt="Some recipe"></img>
        <p>Ingredients used {props.usedIngredientCount}
        Missing {props.missedIngredientCount} ingredients</p>
        <button onClick={()=>console.log("hi")}>Recipe info</button>
      </li> 
    </div>
    )
  }

export default connect()(SearchedRecipes) 

  userId: state.authReducer.currentUser.id || "",
  authToken:state.authReducer.authToken,
  user:state.authReducer.currentUser.username
  // user:state.authReducer
  {/* return(
            <li key={recipe.id} >
              {recipe.recipeId} <p>ppppppppppppppppppppppp</p>
              <button onClick={()=>this.props.dispatch(removeRecipe(recipe.id))}>Delete</button> 
            </li> )   })} */}

{/* // 
      //     <div className="recipeImageBox" key={props.index} value={props.id} onClick={()=>console.log(props.id)}>
      // {props.title}
      // <img src={props.image} alt="Some recipe"></img>
      // <p>Ingredients used: {props.usedIngredientCount}</p>
      // <p>Missing ingredients: {props.missedIngredientCount}</p>
      // <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button>
      // </div> */}
 // let usersSavedRecipesFetch = this.props.recipes.map((recipe,index) => { return  `${recipe.recipeId}`});
  // console.log(recipeRetrieveString);
  //   console.log("this props is:",this.props);

  
// export default withRouter(connect(mapStateToProps)(Container));











































// import './form.css';
// import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
// import Input from './input';
// import {required, nonEmpty,validatorsForNumbers,lengthValid} from '../validators';

// export class ContactForm extends React.Component {
  
//   onSubmit(values) {
//     console.log(values);
//     return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
//       method: 'POST',
//       body: JSON.stringify(values),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//       .then(res => {
//         console.log("This is the res:",res.json());
//           if (!res.ok) {
//               if (
//                   res.headers.has('content-type') &&
//                   res.headers
//                       .get('content-type')
//                       .startsWith('application/json')
//               ) {
//                   // It's a nice JSON error returned by us, so decode it
//                   return res.json().then(err => Promise.reject(err));
//               }
//               // It's a less informative error returned by express
//               return Promise.reject({
//                   code: res.status,
//                   message: res.statusText
//               });
//           }
//           return;
//       })
//       .then(() => console.log('Submitted with values', values))
//       .catch(err => {
//           const {reason, message, location} = err;
//           if (reason === 'ValidationError') {
//               // Convert ValidationErrors into SubmissionErrors for Redux Form
//               return Promise.reject(
//                   new SubmissionError({
//                       [location]: message
//                   })
//               );
//           }
//           return Promise.reject(
//               new SubmissionError({
//                   _error: 'Error submitting message'
//               })
//           );
//       });
   
//   }
//   render() {
//     let successMessage;
//     if (this.props.submitSucceeded) {
//         successMessage = (
//             <div className="message message-success">
//                 Message submitted successfully
//             </div>
//         );
//     }

//     let errorMessage;
//     if (this.props.error) {
//         errorMessage = (
//             <div className="message message-error">{this.props.error}</div>
//         );
//     }
//     let reason=["not-delivered", "wrong-item", "missing-part", "damaged", "other"];
//       return (
    
//         <form  onSubmit={this.props.handleSubmit(values =>
//           this.onSubmit(values)
//       )}>
//         <h2>{errorMessage}{successMessage}</h2>
//         <label htmlFor="tracking-number">Tracking number</label>
//         <Field
//           component={Input}
//           id="trackingNumber"
//           name="trackingNumber"
//           type="type"
//           validate={[required, nonEmpty,validatorsForNumbers,lengthValid]} />
//         <label htmlFor="issue">What is your issue?</label>
//         <Field 
//          id="issue"
//          name="issue"
//          component="select"
         
//         >
//           <option value={reason[0]}>My delivery hasn't arrived</option>
//           <option value={reason[1]}>The wrong item was delivered</option>
//           <option value={reason[2]}>Part of my order was missing</option>
//           <option value={reason[3]}>Some of my order arrived damaged</option>
//           <option value={reason[4]}>Other (give details below)</option>
//         </Field >
//         <label htmlFor="additional-details">Give more details (optional)</label>
//         <Field
//         component="textarea"
//           id="details"
//           name="details"
//           value="textarea"
//           >
//         </Field>
//         <button type="submit">Submit</button>
//       </form>
//       )
//   }




        //          
//               onSubmit={this.props.handleSubmit(values =>
//                   this.onSubmit(values)
//               )}>
//               <label htmlFor="name">Name</label>
//               <Field name="name" id="name" type="text" component="input" />
//               <label htmlFor="email">Email address</label>
//               <Field name="email" id="email" type="email" component="input" />
//               <label htmlFor="message">Message</label>
//               <Field name="message" id="message" component="textarea" />
//               <label htmlFor="magicWord">What's the magic word?</label>
//               <Field
//                   name="magicWord"
//                   id="magicWord"
//                   type="text"
//                   component="input"
//               />
//               <button type="submit">Send message</button>
//           </form>
//       );
//   }
// }

// export default reduxForm({
//   form: 'contact'
// })(ContactForm);
// import React from 'react';
// import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
// import Input from './input';
// import {required, nonEmpty, email} from '../validators';

// export class ContactForm extends React.Component {
//     onSubmit(values) {
//         return fetch('/api/messages', {
//             method: 'POST',
//             body: JSON.stringify(values),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(res => {
//                 if (!res.ok) {
//                     if (
//                         res.headers.has('content-type') &&
//                         res.headers
//                             .get('content-type')
//                             .startsWith('application/json')
//                     ) {
//                         // It's a nice JSON error returned by us, so decode it
//                         return res.json().then(err => Promise.reject(err));
//                     }
//                     // It's a less informative error returned by express
//                     return Promise.reject({
//                         code: res.status,
//                         message: res.statusText
//                     });
//                 }
//                 return;
//             })
//             .then(() => console.log('Submitted with values', values))
//             .catch(err => {
//                 const {reason, message, location} = err;
//                 if (reason === 'ValidationError') {
//                     // Convert ValidationErrors into SubmissionErrors for Redux Form
//                     return Promise.reject(
//                         new SubmissionError({
//                             [location]: message
//                         })
//                     );
//                 }
//                 return Promise.reject(
//                     new SubmissionError({
//                         _error: 'Error submitting message'
//                     })
//                 );
//             });
//     }

//     render() {
//         let successMessage;
//         if (this.props.submitSucceeded) {
//             successMessage = (
//                 <div className="message message-success">
//                     Message submitted successfully
//                 </div>
//             );
//         }

//         let errorMessage;
//         if (this.props.error) {
//             errorMessage = (
//                 <div className="message message-error">{this.props.error}</div>
//             );
//         }

//         return (
//             <form
//                 onSubmit={this.props.handleSubmit(values =>
//                     this.onSubmit(values)
//                 )}>
//                 {successMessage}
//                 {errorMessage}
//                 <Field
//                     name="name"
//                     type="text"
//                     component={Input}
//                     label="Name"
//                     validate={[required, nonEmpty]}
//                 />
//                 <Field
//                     name="email"
//                     type="email"
//                     component={Input}
//                     label="Email address"
//                     validate={[required, nonEmpty, email]}
//                 />
//                 <Field
//                     name="message"
//                     element="textarea"
//                     component={Input}
//                     label="Message"
//                     validate={[required, nonEmpty]}
//                 />
//                 <Field
//                     name="magicWord"
//                     type="text"
//                     component={Input}
//                     label="What's the magic word?"
//                     validate={[required, nonEmpty]}
//                 />
//                 <button
//                     type="submit"
//                     disabled={this.props.pristine || this.props.submitting}>
//                     Send message
//                 </button>
//             </form>
//         );
//     }
// }



// export default reduxForm({
//     form: 'contact',
//     onSubmitFail: (errors, dispatch) =>
//         dispatch(focus('contact', Object.keys(errors)[0]))
// })(ContactForm);























 
      {/* <a href={props.dispatch(getLinkToRecipe(props.id))} target="_blank">Recipe Link</a> */}
      {/* <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button> */}
     
// export function MultipleRecipesDisplay (props){
//  {
 // this.props.dispatch(postRecipe(recipeId,this.props.userId,this.props.authToken))
//     return (
     
//       <div className="recipeImageBox" key={props.index} value={props.id} onClick={()=>console.log(props.id)}>
//       {props.title}
//       <img src={props.image} alt="Some recipe"></img>
//       <p>Ingredients used: {props.usedIngredientCount}</p>
//       <p>Missing ingredients: {props.missedIngredientCount}</p>
//       <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button>
      
//       {/* <a href={props.dispatch(getLinkToRecipe(props.id))} target="_blank">Recipe Link</a> */}
//       {/* <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button> */}
// let instructions = props.currentApiRecipeDisplayed[0].analyzedInstructions[0].steps.map((item,index) => {
//   return (<div key={index}>{" "+(index+1)+" "+ item.step }</div>)});
//       </div>
//     )
  
//   //if true ending tag
//     }
//   return null;
  
  
//   }
  
  
  
  
//   const mapStateToProps = state => ({  
//     recipes: state.recipes || [],
//     returningResults:state.returningResults,
//     viewingSingleItem:state.viewingSingleItem
//   })
  
//   export default connect(mapStateToProps)(MultipleRecipesDisplay) 
import React from 'react';
//import {fetchRecipeIds,postRecipe,removeRecipe} from "../actions/userActions";
import {postRecipe,removeRecipe} from "../actions/userActions";
import {connect} from 'react-redux';

export class ScratchComponent extends React.Component {


handleNewRecipeSubmit(e){
  e.preventDefault();
  let recipeId=this.input.value;
  console.log(recipeId);
  this.input.value = "";
   this.props.dispatch(postRecipe(recipeId,this.props,this.props.authToken))
 }

  handleRecipeRemoval(e){
    e.preventDefault();
    let recipeId=this.input.value;
    console.log(recipeId);
    this.input.value = "";
    this.props.dispatch(removeRecipe(recipeId,this.props.userId,this.props.authToken))
  }

 
render(){
  return (
    <div>
  
  
   
    {/* <form className="testingDatabase" onSubmit={(e)=>this.handleNewRecipeSubmit(e)}> 
      <input type="text" placeholder="addRecipeId" id="addRecipeById" ref={input => (this.input = input)}/>
      <button type="submit" onClick={(e)=>this.handleNewRecipeSubmit(e)}>addRecipeId</button>
      <label htmlFor="addRecipeById"></label><br/>
    </form> */}
    {/* <div>
    <form className="testingDatabase" onSubmit={(e)=>this.handleRecipeRemoval(e)}> 
      <input type="text" placeholder="removeRecipeId" id="removeRecipeById" ref={input => (this.input = input)}/>
      <button type="submit" onClick={(e)=>this.handleRecipeRemoval(e)}>removeRecipeId</button>
      <label htmlFor="removeRecipeById"></label><br/>
    </form>
    </div>
  <ul>
    {this.props.recipes.map((recipe,index) => ( 
      <li key={recipe.id} >
        {recipe.recipeId} 
        <button onClick={()=>this.props.dispatch(removeRecipe(recipe.id))}>Delete</button> 
      </li> ))}
  </ul> */}

    
    
    </div>
  )
}

}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.userRecipes || [],
  userId: state.authReducer.currentUser.id || "",
  authToken:state.authReducer.authToken

});

export default connect(mapStateToProps)(ScratchComponent) 




// {/* <a href={props.dispatch(getLinkToRecipe(props.id))} target="_blank">Recipe Link</a> */}
//     {/* //<button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button> */}
    
    

userRecipes: state.recipeReducer.userRecipes || [],
apiRecipes:state.recipeReducer.apiRecipes,
returningResults:state.recipeReducer.returningResults,
{/* <a href={props.dispatch(getLinkToRecipe(props.id))} target="_blank">Recipe Link</a> */}
      {/* <button className="getRecipeButton" onClick={()=>props.dispatch(fetchRecipesById(props.id))}>Get Recipe</button> */}
     

////////////////////////////////////////LANDING PAGE//////////////////////
import React from 'react';
import {connect} from 'react-redux'
///import {Link, Redirect} from 'react-router-dom';  
import {Link} from 'react-router-dom';
import './styles/landingPage.css';
export class LandingPage extends React.Component{

  

    render(){
    return(
      <div className="landingPage">
      <h1>something</h1>
      <Link to="/loginPage">
        <button>Login</button>
      </Link>
      <Link to="/signUpPage">
        <button>Sign up</button>
      </Link>  
      <Link to="/dashboard">
        <button>Continue</button>
      </Link>
      {/*IF USER IS LOGIN IN DISPLAY THIS BUTTON SOMEWHERE*/}
      <Link to="/dashboard">
        <button>My recipes</button>
      </Link>

    </div>
    )}
}


const mapStateToProps = state => ({
  //loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

////////////////////////////////////END OF LANDING PAGE////////////////////////////////////////////
  // const {currentUser} = state.auth;
    // return {
    //     username:currentUser.username,
    //     recipeIds:[...currentUser.recipeIds],
        
    // };

 //export default requiresLogin()(connect(mapStateToProps)(Dashboard));
      //  this.props.dispatch(fetchRecipeIds(this.props.userId,this.props.authToken))
    //     console.log("first");
    //   this.props.dispatch(fetchRecipeIds(this.props.userId,this.props.authToken))
    //   .then(()=>{
    //       if(this.props.username){
    //         let recipeString = this.recipeFetchString(this.props.recipes); 
    //       return  console.log(recipeString)
            
            
    //       }})
    //       //this.props.dispatch(fetchRecipesInBulk(recipeString))}})
    //       .then(() => 
    //       { console.log("done");
     
        //   })
const mapStateToProps = state => ({
  userRecipes: state.recipeReducer.userRecipes || [],
  apiRecipes:state.recipeReducer.apiRecipes,
  //userId: state.authReducer.currentUser.id || "",
  authToken:state.authReducer.authToken
})

export default connect(mapStateToProps)(Content);
import {fetchRecipeIds} from '../actions/userActions';
import RecipeSearchForm from "./recipeSearchForm";
import SearchedRecipes from './searchedRecipes';
import ScratchComponent from './scratch';
// import React from 'react';
// import {connect} from 'react-redux';
// import "./recipeImages.css";
// import RecipeSearchForm from "../components/recipeSearchForm";

// import {postRecipe} from '../actions/userActions';
// import {ScratchComponent} from './scratch';




// console.log(postRecipe);

// export class Content extends React.Component {
  
//   render(){
//     // if (!props.dispatch) return <h1>UNCONNECTED</h1>
//     // return(
//     //   <div>
//     //    
      
      //  <ScratchComponent />  
//     //   </div>
//   return (<div>hello</div>) 
//   }
// }
// const mapStateToProps = state => ({
//   recipes: state.recipes
// })

//  export default connect(mapStateToProps)(SearchedRecipes) ;

//   {/* <button onClick={()=>this.props.dispatch(fetchRecipes())}>Hello</button> */}
//             {/* <button onClick={()=>this.props.dispatch(fetchRecipes())}>Fetch</button>
//             <h2>Add a Cheese</h2>
//             <form id="cheeseForm" onSubmit={(e)=>{this.handleSubmit(e);}}>
//             <input id='cheese' type="text"  ref={input => (this.input = input)}/>
//             <button type="submit" onClick={(e)=>{this.handleSubmit(e);}} >Add cheese</button>
//             </form>  */}
//             {/* {this.props.cheeses.map((cheese,index) => (
//             <li key={index} ref={index => (this.index = index)}>
//               {cheese.title}
//             <button onClick={()=>{this.props.dispatch(removeCheese(cheese.id))}}   className="delete" id="delete" >x</button>
//                </li>
//             ))} */}
//             {/* <button onClick={()=>this.handleBulkRecipes(this.state.recipeIds)}>Get Recipes in Bulk</button>*/}
//             {/* <form id="recipeForm" onSubmit={(e)=>{this.handleSubmit(e);}}> 
//               <input id='recipeSearch' placeholder="Enter recipe Id#" type="text"  ref={input => (this.input = input)}/>
//               <button type="submit" >Search Recipes by Id</button>
//             </form> */}
            
            
//             {this.props.recipes.map((recipe,index) => (
//               <RecipeImages {...recipe} key={index} index={index}>
              
//                <img src="https://spoonacular.com/recipeImages/556470-312x231.jpg" alt="Some recipe"></img> 
//               {recipe.title}
//              {/* </RecipeImages>)} */}
              
//             ))} */}
            
           
//            {/* <Route exact path='/recipeSearchOverview' component={RecipeOverview}/> */}
//            {/* {this.props.recipes.map((recipe,index) => (
//              <RecipeOverview {...recipe} key={index} index={index}>
              
//              <img src="https://spoonacular.com/recipeImages/556470-312x231.jpg" alt="Some recipe"></img>
//              {recipe.title}
//              </RecipeOverview>
//            ))}  */}






// export function Content (props) {
//   if (!props.dispatch) return <h1>UNCONNECTED</h1>

//   if(true){
//    return (
    
//     <div className="recipeImageBox">
//       <li key={props.id} value={props.id}> 
//       {props.title}
//       <button onClick={()=>props.dispatch(postRecipe(props.id))}>recipeId</button> 
//       <img src={props.image} alt="Some recipe"></img>
//       <p>Ingredients used {props.usedIngredientCount}
//       Missing {props.missedIngredientCount} ingredients</p>
//       <button onClick={()=>console.log("hi")}>Recipe info</button>
//       </li> 
//     </div>
//     )
//   }
// return null;
// }

// export default connect()(Content) 










//////

  {/* display of searched recipes    */}
          {/* {this.props.apiRecipes.map((recipe,index) => (
         <SearchedRecipes {...recipe} key={index} index={index} />))} */}

  {/* <button onClick={()=>this.props.dispatch(fetchRecipeIds(this.props.userId,this.props.authToken))}>Get My Recipes</button> */}
         {/*search spoonacular*/}
         {/* <RecipeSearchForm /> */}
         {/*endpoints for database*/}
         {/* <ScratchComponent />   */}
         {/*endpoints for spoonacular*/}




  // // componentDidMount() {
  // //   this.props.dispatch(fetchRecipes());
  // // }
  // handleSubmit(e){
  //   e.preventDefault();
  //   const value = this.input.value;
  //   console.log(value);
  //   //this.props.dispatch(fetchRecipesById(value));
  //   this.props.dispatch(postRecipeId({recipeId:value}));
  //   this.input.value = '';
  //   this.input.focus();
  // }

  // render(){
  //   console.log("This props:",this.props.recipes);
  // let recipeIds = this.props.recipes.map((item,index) => { return (
  //   <li key={index} value={item}>{item.recipeId}<button onClick={()=>this.props.dispatch(deleteRecipeId(item.id))}>x</button>  </li>) });
    
  //   return (
  //     <div>
  //          <ul>
  //           <button onClick={()=>this.props.dispatch(fetchRecipes())}>Hello</button>
                      
  //           <form id="recipeIdSubmit" onSubmit={(e)=>{this.handleSubmit(e);}}>
  //           <input id='cheese' type="text"  ref={input => (this.input = input)}/>
  //           <button type="submit" onClick={(e)=>{this.handleSubmit(e);}} >Add Recipe</button>
  //           </form>
            
  //           {recipeIds}
           

  //         </ul>
         
  //     </div>   
  //     )
  //   }


 {/* if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
       */}

    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      {/* {console.log(this.props)} */}
      {/* {(!this.props.loggedIn)?  <LoginForm /> :  null} */}
      {/* {(!this.props.currentUser)?  <SignUpForm /> : null}  */}
      {/*<Route exact path="/register" component={RegistrationPage} /> */}
{/* <LandingPage/> */}

        {/* <Route exact path='/' component={LandingPage} />  */}



componentWillMount() {
  console.log("this.props.user",this.props.user);
    // let recipeRetrieveString = "";
    // console.log(this.props.recipes);
    // for (let i = 0 ; i < this.props.recipes.length ; i++){
    //   recipeRetrieveString  +=  this.props.recipes[i].recipeId+",";}
      
    // if(this.props.user)  { this.props.dispatch(fetchRecipesInBulk("986172,909454"))}
    



console.log("Did mount");

}











































































































































//let obj = [
// {
//   id:556470,
//   image:'https://spoonacular.com/recipeImages/556470-312x231.jpg',
//   imageType:'jpg',
//   likes:243,
//   missedIngredientCount:0,
//   title:'Apple fritters',
//    usedIngredientCount:3},

//    {"body":
//    {
//      "vegetarian":true,
//      "vegan":true,
//      "glutenFree":true,
//      "dairyFree":true,
//      "veryHealthy":false,
//      "cheap":false,
//      "veryPopular":false,
//      "sustainable":false,
//      "weightWatcherSmartPoints":5,
//      "gaps":"no",
//      "lowFodmap":false,
//      "ketogenic":false,
//      "whole30":false,
//      "preparationMinutes":5,
//      "cookingMinutes":1,
//      "sourceUrl":"https://gimmedelicious.com/2018/05/23/the-best-chunky-guacamole/",
//      "spoonacularSourceUrl":"https://spoonacular.com/the-best-chunky-guacamole-1009265",
//      "aggregateLikes":57,
//      "spoonacularScore":97,
//      "healthScore":28,
//      "creditText":"Gimme Delicious",
//      "sourceName":"Gimme Delicious",
//      "pricePerServing":90.87,
//      "extendedIngredients":[{"id":9037,"aisle":"Produce","image":"avocado.jpg","consitency":"solid","name":"hass avocados","original":"2 large Hass avocados halved and pitted","originalString":"2 large Hass avocados halved and pitted","originalName":"Hass avocados halved and pitted","amount":2,"unit":"","meta":["pitted","large","halved"],"metaInformation":["pitted","large","halved"],"measures":{"us":{"amount":2,"unitShort":"","unitLong":""},"metric":{"amount":2,"unitShort":"","unitLong":""}}},{"id":11529,"aisle":"Produce","image":"roma-tomatoes.png","consitency":"solid","name":"tomato","original":"1/2 cup tomato finely chopped or diced","originalString":"1/2 cup tomato finely chopped or diced","originalName":"tomato finely chopped or diced","amount":0.5,"unit":"cup","meta":["diced","finely chopped"],
//      "metaInformation":["diced","finely chopped"],"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,"unitShort":"g","unitLong":"grams"}}}, {"id":11282,"aisle":"Produce","image":"brown-onion.jpg","consitency":"solid","name":"onion","original":"1/4 cup red onion finely chopped or diced","originalString":"1/4 cup red onion finely chopped or diced","originalName":"red onion finely chopped or diced","amount":0.25,"unit":"cup","meta":["diced","red","finely chopped"],"metaInformation":["diced","red","finely chopped"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":59.147,"unitShort":"g","unitLong":"grams"}}},{"id":11165,"aisle":"Produce","image":"cilantro.png","consitency":"solid","name":"cilantro leaves","original":"2-3 tablespoons cilantro leaves finely chopped","originalString":"2-3 tablespoons cilantro leaves finely chopped","originalName":"cilantro leaves finely chopped","amount":2,"unit":"tablespoons","meta":["finely chopped"],"metaInformation":["finely chopped"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":11979,"aisle":"Canned and Jarred;Produce;Ethnic Foods","image":"jalapeno-pepper.png","consitency":"solid","name":"jalapeno pepper","original":"1/2 jalapeno pepper seeds included, minced","originalString":"1/2 jalapeno pepper seeds included, minced","originalName":"jalapeno pepper seeds included, minced","amount":0.5,"unit":"","meta":["minced"],"metaInformation":["minced"],"measures":{"us":{"amount":0.5,"unitShort":"","unitLong":""},"metric":{"amount":0.5,"unitShort":"","unitLong":""}}},{"id":9160,"aisle":"Produce","image":"lime-juice.jpg","consitency":"liquid","name":"juice of lime","original":"1 tablespoon lime juice or juice of 1/2 lime","originalString":"1 tablespoon lime juice or juice of 1/2 lime","originalName":"lime juice or juice of 1/2 lime","amount":1,"unit":"","meta":[],"metaInformation":[],"measures":{"us":{"amount":1,"unitShort":"","unitLong":""},"metric":{"amount":1,"unitShort":"","unitLong":""}}},{"id":2047,"aisle":"Spices and Seasonings","image":"salt.jpg","consitency":"solid","name":"table salt","original":"1/4 teaspoon salt table or kosher","originalString":"1/4 teaspoon salt table or kosher","originalName":"salt table or kosher","amount":0.25,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":1002030,"aisle":"Spices and Seasonings","image":"pepper.jpg","consitency":"solid","name":"pepper","original":"1/4 teaspoon black pepper optional","originalString":"1/4 teaspoon black pepper optional","originalName":"black pepper optional","amount":0.25,"unit":"teaspoon","meta":["black"],"metaInformation":["black"],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}}],
//      "id":1009265,
//      "title":"The Best Chunky Guacamole",
//      "readyInMinutes":6,
//      "servings":4,
//      "image":"https://spoonacular.com/recipeImages/1009265-556x370.jpg",
//      "imageType":"jpg",
//      "cuisines":["mexican"],
//      "dishTypes":["antipasti","condiment","starter","snack","appetizer","dip","antipasto","hor d'oeuvre","spread"],
//      "diets":["gluten free","dairy free","paleolithic","lacto ovo vegetarian","primal","vegan"],
//      "occasions":[],
//      "winePairing":{"pairedWines":["pinot noir","riesling","sparkling rose"],
//      "pairingText":"Guacamole on the menu? Try pairing with Pinot Noir, Riesling, and Sparkling rosé. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too. You could try Garnet Monterey Pinot Noir. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 16 dollars per bottle.","productMatches":[{"id":444323,"title":"Garnet Monterey Pinot Noir","description":"This is a Pinot with power, but also with finesse. Aromas include ripe blackberries, cherry preserves, vanilla toffee and toasted French oak. You'll love the velvety richness of the attack. The flavors of dark red fruits and exotic spices just make this a juicy, delicious mouthful of wine.","price":"$15.99","imageUrl":"https://spoonacular.com/productImages/444323-312x231.jpg","averageRating":0.8400000000000001,"ratingCount":6,"score":0.7873684210526317,"link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgarnet-monterey-pinot-noir-2011%2F123633"}]},
//      "instructions":"Instructions\n\n\n\nIn a large bowl, gently mash the avocado into large chunks.\n\n\nAdd the tomato, onion, cilantro, jalapeno, lime juice, and salt & pepper to taste. Gently stir to combine. \n\n\nServe with your favorite tortilla chips or on tacos, salads, burrito bowls.",
//       "analyzedInstructions":[
//         {"name":"","steps":[
//           {"number":1,"step":"In a large bowl, gently mash the avocado into large chunks.","ingredients":[{"id":9037,"name":"avocado","image":"avocado.jpg"}],"equipment":[{"id":404783,"name":"bowl","image":"bowl.jpg"}]},
//           {"number":2,"step":"Add the tomato, onion, cilantro, jalapeno, lime juice, and salt & pepper to taste. Gently stir to combine.","ingredients":[{"id":1102047,"name":"salt and pepper","image":"salt-and-pepper.jpg"},{"id":9160,"name":"lime juice","image":"lime-juice.jpg"},{"id":11165,"name":"cilantro","image":"cilantro.png"},{"id":11979,"name":"jalapeno pepper","image":"jalapeno-pepper.png"},{"id":11529,"name":"tomato","image":"tomato.jpg"},{"id":11282,"name":"onion","image":"brown-onion.jpg"}],"equipment":[]},
//           {"number":3,"step":"Serve with your favorite tortilla chips or on tacos, salads, burrito bowls.","ingredients":[],"equipment":[{"id":404783,"name":"bowl","image":"bowl.jpg"}]
//         }]}]}}
//       ];

   
  


        


// //,
// // {
// //   id:47950,
// //   image:'https://spoonacular.com/recipeImages/47950-312x231.jpg',
// //   imageType:'jpg',
// //   likes:35,
// //   missedIngredientCount:0,
// //   title:'Cinnamon Apple Crisp',
// //   usedIngredientCount:3}
// // ,{
// //   id:534573,
// //   image:'https://spoonacular.com/recipeImages/534573-312x231.jpg',
// //   imageType:'jpg',
// //   missedIngredientCount:0,
// //   title:'Brown Butter Apple Crumble',
// //   usedIngredientCount:3},
 
// // {
// //   id:47891,
// //   image:'https://spoonacular.com/recipeImages/47891-312x231.jpg',
// //   imageType:'jpg',
// //   index:4,
// //   likes:0,
// //   missedIngredientCount:0,
// //   title:'Apple Tart',
// //   usedIngredientCount:3}];

// export default obj;

//   //GEThttps://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information
//   unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/977701/information?includeNutrition=false")
// .header("X-Mashape-Key", "KIpcxoopqbmshgBnI6jbDfqaTFdep1CtFMajsnNSg0vp2OPTmY")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });