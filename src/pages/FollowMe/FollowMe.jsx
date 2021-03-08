import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Socials from '../../components/Socials/Socials';
import './FollowMe.css';
function FollowMe(){
  return(
    <body>
      <Header currPage="Contact"/>
      <div className="main-body">
        <div className="main-body-content">
          <div className="contact-main">
              <p>
                You can contact me via email here: <br/>
              </p>
              <a 
                className="contact-email-href" href="mailto:jrdnvan@gmail.com"
              >
                jrdnvan@gmail.com
              </a>
              <br/>
              <p>
                You can also follow my socials here:
              </p>
              <Socials size="40" margin="0px 2px"/>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default FollowMe;