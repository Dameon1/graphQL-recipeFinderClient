
import React from 'react';
import '../styles/landingPage.css';
import {Link} from 'react-router-dom';

export default function LandingPage() {

  return (
    <div className='landingPage'>
      <div className="landingPageBox">
        <h2 className='landingPageHeader'>You Have Ingredients?</h2>
        <p className='smallPrint'> (Find recipes for those ingredients!) </p>
        <p className="onBoarding">Sign up today to enjoy full features</p>
        <Link to='/signUp' >
          <button className="buttonStyle">SignUp</button>
        </Link>
        <p className="onBoarding">or preview the experience</p>
        <Link to='/dashboard' >
          <button className="buttonStyle">Preview</button>
        </Link>    
      </div>
    </div>
  )
};
