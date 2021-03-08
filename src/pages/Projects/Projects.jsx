import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay';
import calendarPlannerDisplay from '../../data/calendarPlannerDisplay.JPG';
import digicardDisplay from '../../data/digicardDisplay.JPG';
import personalWebsiteDisplay from '../../data/personalWebsiteDisplay.JPG';
import './Projects.css';

function Projects(){
  return(
    <body>
      <Header currPage="Projects"/>
      <div className="main-body">
        <div className="main-body-content">
          <div className="projects-display">
            <ProjectDisplay 
              img={personalWebsiteDisplay} 
              title="Personal Website"
              description="a"
              demo="https://jrdnvan.github.io/Calendar-Planner/"
              github="https://github.com/JrdnVan/Calendar-Planner/tree/master/calendar-planner"
            />
            <ProjectDisplay 
              img={digicardDisplay} 
              title="Business Card Reader" 
              description="a"
              demo="https://expo.io/@rseteam2/projects/test2"
              github="https://github.com/JrdnVan/business-card-wallet"
            />
            <ProjectDisplay 
              img={calendarPlannerDisplay} 
              title="Calendar Planner" 
              description="a"
              demo="https://jrdnvan.github.io/Calendar-Planner/"
              github="https://github.com/JrdnVan/Calendar-Planner/tree/master/calendar-planner"
            />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Projects;