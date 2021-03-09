import React from 'react';
import './imageDisplay.css';
function ImageDisplay(props) {
  return (
    <img src={props.img} className={props.class}/>
  );
}

export default ImageDisplay;