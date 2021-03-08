import React from 'react';
import { GitHub, LinkedIn, Instagram } from '@material-ui/icons';
import './Socials.css';
function Socials(props){
  return(
    <div className="socials-main">
      <a href="https://github.com/JrdnVan" without rel="noopener noreferrer" target="_blank">
        <GitHub color="secondary" style={{ fontSize: props.size, margin: props.margin }}/>
      </a>
      <a href="https://www.linkedin.com/in/jordan-van-1aa2a5199/" without rel="noopener noreferrer" target="_blank">
        <LinkedIn color="secondary" style={{ fontSize: props.size, margin: props.margin }}/>
      </a>
      <a href="https://www.instagram.com/jrdnvan/" without rel="noopener noreferrer" target="_blank">
        <Instagram color="secondary" style={{ fontSize: props.size, margin: props.margin }}/>    
      </a>
    </div>
  );
}
export default Socials;