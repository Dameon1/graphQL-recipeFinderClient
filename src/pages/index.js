import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';

import '../components/styles/landingPage.css';
import Dashboard from './dashboard';
import SearchResults from './searchResults';
import SingleRecipe from './singleRecipe';
import SignIn from './signIn';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Header />        
        <Router primary={false} component={Fragment}>
          <LandingPage path='/' /> 
          <Dashboard path="/dashboard" />
          <SearchResults path="/searchResults" />
          <SingleRecipe path="/singleRecipe/*" />
          <SignIn path='/signIn' />          
        </Router>
      </PageContainer>      
    </Fragment>
  );
}

/*********  TODO
         <Route exact path='/signUp' component={ SignUpForm } /> 
         <Route exact path='/searchedRecipes' component={ Content } />
         <Route exact path='/myRecipes' component={ UserSavedRecipes } />
         <Route path='/recipe/:id' component={ SingleRecipe } />
*/ 