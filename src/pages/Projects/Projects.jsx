import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Projects(){
  return(
    <body>
      <Header currPage="Projects"/>
      <div className="main-body">
        <div className="main-body-content">
          <p>PROJECTS PAGE</p>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Projects;