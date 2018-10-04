
import React from 'react';
import { connect } from 'react-redux';
import '../styles/singleRecipe.css';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';
import { 
  changingSingleItemView, 
  postRecipeToDatabase, 
  updateStateWithDatabaseResults, 
  removeRecipeFromDatabase, 
  } from '../../actions/userActions';


export class SingleRecipe extends React.Component {

  handleNewRecipeSubmit(recipeId){
      this.props.dispatch(postRecipeToDatabase(recipeId,this.props.userId,this.props.authToken))
      .then(() =>  this.props.dispatch(updateStateWithDatabaseResults(this.props.userId,this.props.authToken)));      
  };

  handleRemoveRecipeSubmit(recipeId){
    this.props.dispatch(removeRecipeFromDatabase(recipeId,this.props.userId,this.props.authToken))
    .then(() => this.props.dispatch(updateStateWithDatabaseResults(this.props.userId,this.props.authToken)));
  };

  componentWillUnmount(){
    this.props.dispatch(changingSingleItemView());
  };

  handleBackButtonClicked(){
    this.props.dispatch(changingSingleItemView());
  };
  
  render() {
    if (this.props.loading) {
      return <Spinner spinnername="circle" fadeIn='none' />;
    }
    const arrayOfRecipesFromSavedRecipes = this.props.recipes.map((recipe)=>recipe.recipeId);
    if(this.props.viewingSingleItem) {
    let instructions = "No instructions Available at this time";
    let currentItem = this.props.currentApiRecipeDisplayed[0];
    if (!currentItem) { return }
    if (currentItem.analyzedInstructions[0]) {
        instructions = currentItem.analyzedInstructions[0].steps.map((item,index) => {
          return (        
            <div key={index}>
              {" " + (index+1) + ". " + item.step + "\n"}
            </div>
            )
          });
        }
    if(instructions === undefined) { return }
   
    return (
      <div className='recipeOverview'>
        <h2 className='singleRecipeDisplayTitleText'>{ currentItem.title }</h2>
        <img className="sigleRecipeImage" 
            src={ currentItem.image } 
            alt={ currentItem.title } 
            />
        <div className='recipeInstructions'>         
        { instructions }        
       </div>
       
       <a href={ currentItem.sourceUrl } target="blank" className="recipeLink">Full Recipe</a>
       { (this.props.loggedIn && !arrayOfRecipesFromSavedRecipes.includes(currentItem.id)) ?
          <button onClick={ () => this.handleNewRecipeSubmit(currentItem.id) } className='singleRecipeUserSaveButton'>Save</button> 
           : (this.props.loggedIn && arrayOfRecipesFromSavedRecipes.includes(currentItem.id)) ?
              <button onClick={ () => this.handleRemoveRecipeSubmit(currentItem.id)} className='singleRecipeUserSaveButton'>UnSave</button> 
               : null}
        
       { (this.props.loggedIn && this.props.apiRecipes.length === 0) ?
         <Link to="/myRecipes">
           <button className="singleRecipeBackButton">Back</button>
         </Link> 
       : <Link to="/searchedRecipes">
          <button className="singleRecipeBackButton">Back</button>
         </Link> }        
      </div>
    )
    }
  return null
  };

};

const mapStateToProps = state => ({
  currentApiRecipeDisplayed:state.recipeReducer.currentApiRecipeDisplayed,
  viewingSingleItem:state.recipeReducer.viewingSingleItem,
  loggedIn: state.authReducer.loggedIn,
  userId: state.authReducer.currentUser.id || "",
  authToken:state.authReducer.authToken,
  recipes:state.recipeReducer.recipes || [],
  apiRecipes:state.recipeReducer.apiRecipes,
  loading: state.recipeReducer.loading,
});

export default connect(mapStateToProps)(SingleRecipe);
