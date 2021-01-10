import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About(){
  return(
    <body>
      <Header currPage="About"/>
      <div className="main-body">
        <div className="main-body-content">
          <p>ABOUT PAGE</p>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default About;