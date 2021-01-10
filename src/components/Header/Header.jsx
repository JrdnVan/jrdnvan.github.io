import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.css';
function Header(props){
  const history = useHistory();
  return(
    <header className="header">
      <div className="header-logo-button-container">
        <a className="header-logo-button" tabIndex={0}>jrdn</a>
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
          className={props.currPage === "Blog" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "Blog"}
          onClick={() => {history.push("/Blog")}}
          tabIndex={0}
        >
          blog
        </a>
        <a
          className={props.currPage === "Instagram" ? "header-redirect-button header-redirect-button-on" : "header-redirect-button"}
          disabled={props.currPage === "Instagram"}
          onClick={() => {history.push("/Instagram")}}
          tabIndex={0}
        >
          instagram
        </a>
      </div>
    </header>
  );
}

export default Header;