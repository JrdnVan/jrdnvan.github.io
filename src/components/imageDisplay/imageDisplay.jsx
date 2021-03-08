import React from 'react';
import './imageDisplay.css';
function ImageDisplay(props) {
  return (
    <img src={props.img} className="image-display"/>
  );
}

export default ImageDisplay;