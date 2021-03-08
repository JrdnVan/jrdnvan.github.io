import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ResumePDF from '../../data/publicResume.pdf';
import Button from '@material-ui/core/Button';
import './Resume.css';
function Resume(){
  return(
    <body>
      <Header currPage="Resume"/>
      <div className="main-body">
        <div className="main-body-content">
          <div className="resume-main">
              <p>
                You can view my resume below, please note that some information has been taken out<br/>
                for this website specifically for privacy reasons and is available upon request.
              </p>
              <Button 
                variant="contained" 
                color="secondary" 
                href={ResumePDF} 
                without 
                rel="noopener noreferrer" 
                target="_blank"
              >
                View resume
              </Button>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Resume;