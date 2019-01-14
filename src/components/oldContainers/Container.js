
import React from 'react';
import Header from '../display/Header';
//import LandingPage from '../display/LandingPage';
// import LoginForm from '../display/userLogin';
// import SignUpForm from '../display/SignUpForm';
//import Dashboard from './Dashboard';
// import Content from './Content';
// import UserSavedRecipes from './UserSavedRecipes';
// import SingleRecipe from './SingleRecipe';
//import Footer from '../display/Footer';
import '../styles/landingPage.css';
import SCRATCH from './SCRATCH';
//import { Route } from 'react-router-dom';

export class Container extends React.Component {
 
  render() {
   return(
    <div>
      <Header />
      <SCRATCH />
      {/* <Route exact path='/' component={ LandingPage } />
      <Route exact path='/dashboard' component={ Dashboard } /> */}
      {/* <footer role="contentinfo">
        <Footer />
      </footer> */}
    {/* //   <header role='banner'> 
         
    //   </header>
    //   <main>
    //     
    //     <Route exact path='/loginPage' component={ LoginForm } />
    //     <Route exact path='/signUp' component={ SignUpForm } /> 
    //     <Route exact path='/dashboard' component={ Dashboard } /> 
    //     <Route exact path='/searchedRecipes' component={ Content } />
    //     <Route exact path='/myRecipes' component={ UserSavedRecipes } />
    //     <Route path='/recipe/:id' component={ SingleRecipe } /> 
    //   </main>
         */}
     </div>
    )
  };
};


