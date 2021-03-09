import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import portraitPhoto from '../../data/mainPortraitPhoto2.jpg';
import ImageDisplay from '../../components/imageDisplay/imageDisplay';
import './About.css';
function About(){
  return(
    <body>
      <Header currPage="About"/>
      <div className="main-body">
        <div className="main-body-content">
          <div className="about-main">
            <div className="about-text">
              <h1>
                Hi, I am Jordan! 
              </h1>
              <div className="easy-read">
                <h3>
                  I am currently in my final year at the University of New South Wales studying a 
                  Bachelors Degree in Computer Science.
                </h3>
                <p>
                  I enjoy tackling complex problems affecting society and creating tech solutions
                  to solve such problems. Because of this, I've found a passion for full stack development
                  where understanding both frontend and backend technologies have assisted my ability
                  to design better solutions for these problem statements. <br/> 
                  Knowing that the tech space is constantly evolving, I have built the ability to thoroughly and 
                  efficiently learn new technologies. <br/> 
                  I'm also a logical thinker and have great attention to detail, allowing me to write efficient 
                  and elegant code.
                  <br/>
                  <br/>
                  When I am not coding or nudging pixels, I am often seen admiring the beauty nature has to offer.
                </p>
              </div>
            </div>
            <ImageDisplay img={portraitPhoto} class="image-display about-image" />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default About;