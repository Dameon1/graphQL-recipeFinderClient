import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import PageContainer from '../components/containers/pageContainer';
import Header from '../components/display/Header';
import LandingPage from '../components/display/LandingPage';
import '../components/styles/landingPage.css';
import Dashboard from './dashboard';
import SearchResults from './searchResults';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Header />        
        <Router primary={false} component={Fragment}>
          <LandingPage path='/' /> 
          <Dashboard path="/dashboard" />
          <SearchResults path="/searchResults" />          
        </Router>
      </PageContainer>      
    </Fragment>
  );
}

/*********  TODO
          <Route exact path='/' component={ LandingPage } />
         <Route exact path='/dashboard' component={ Dashboard } />
         <Route exact path='/loginPage' component={ LoginForm } />
         <Route exact path='/signUp' component={ SignUpForm } /> 
         <Route exact path='/searchedRecipes' component={ Content } />
         <Route exact path='/myRecipes' component={ UserSavedRecipes } />
         <Route path='/recipe/:id' component={ SingleRecipe } />
*/

//import Dashboard from './dashboard';
//import Scratch from '../components/containers/SCRATCH';
// import React, { Fragment } from 'react';
// //import { Router } from '@reach/router';
// //import Launch from './launch';
// //import Launches from './launches';
// //import Cart from './cart';
// //import Profile from './profile';
// import Footer from '../components/display/Footer';// 
//  import LoginForm from '../components/display/userLogin';
//  import SignUpForm from '../components/display/SignUpForm'; 
//  import Content from '../components/containers/Content';
//  import UserSavedRecipes from '../components/containers/UserSavedRecipes';
//  import Scratch from '../components/containers/Scratch';
// //import Footer from '../display/Footer';
// export default function Pages() {
//   {console.log(this.props)}
//   return (
//     <Fragment>
//         <Header />

//       <Footer />
//     </Fragment>
//   );
// }


    