import React from 'react';
import logo from './tafe-logo.png';

const Header = (props) => {

  return (

        <header id="header-container">
          <div className="header-main">
            <div className="container">
              <div id="logo-container">
                <img src={logo} alt="Logo" />;
              </div>
            </div>
          </div>
          <div id="top-banner-container">
          <div className="top-banner">
            <div className="container">
              <h1>Enrolment Buddy</h1>
            </div>
          </div>
          </div>
        </header>

      )

};




export default Header;
