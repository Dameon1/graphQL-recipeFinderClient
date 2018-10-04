
import React from 'react';
import Header from '../display/Header';
import LandingPage from '../display/LandingPage';
import LoginForm from '../display/userLogin';
import SignUpForm from '../display/SignUpForm';
import Dashboard from './Dashboard';
import Content from './Content';
import UserSavedRecipes from './UserSavedRecipes';
import SingleRecipe from './SingleRecipe';
import Footer from '../display/Footer';
import '../styles/landingPage.css';
import { connect } from 'react-redux';
import { 
  Route, 
  withRouter } from 'react-router-dom';


export class Container extends React.Component {
 
  render() {
   return(
    <div>
      <header role='banner'> 
        <Header />
      </header>
      <main>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/loginPage' component={ LoginForm } />
        <Route exact path='/signUp' component={ SignUpForm } /> 
        <Route exact path='/dashboard' component={ Dashboard } /> 
        <Route exact path='/searchedRecipes' component={ Content } />
        <Route exact path='/myRecipes' component={ UserSavedRecipes } />
        <Route path='/recipe/:id' component={ SingleRecipe } />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>    
    </div>
    )
  };
};

export default withRouter(connect()(Container));
