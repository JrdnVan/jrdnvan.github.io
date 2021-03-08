import React from 'react';
import { useHistory } from "react-router-dom";
import Socials from '../Socials/Socials';

import './Header.css';
function Header(props){
  const history = useHistory();
  return(
    <header className="header">
      <div className="header-socials-float">
        <Socials size="40" margin="0px 5px"/>
      </div>
      <div className="header-logo-button-container">
        <a 
          className={props.currPage === "Main" ? "header-logo-button header-logo-button-on" : "header-logo-button"}
          disabled={props.currPage === "Main"}
          onClick={() => {history.push("/")}}
          tabIndex={0}
        >
          jordan
        </a>
      </div>
      <div className="header-redirect-button-container">
        <a
          className={props.currPage === "About" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "About"}
          onClick={() => {history.push("/about")}}
          tabIndex={0}
        >
          about
        </a>
        <a
          className={props.currPage === "Projects" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "Projects"}
          onClick={() => {history.push("/projects")}}
          tabIndex={0}
        >
          projects
        </a>
        <a
          className={props.currPage === "Resume" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "Resume"}
          onClick={() => {history.push("/resume")}}
          tabIndex={0}
        >
          resume
        </a>
        <a
          className={props.currPage === "Contact" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "Contact"}
          onClick={() => {history.push("/contact")}}
          tabIndex={0}
        >
          contact
        </a>
      </div>
    </header>
  );
}

export default Header;