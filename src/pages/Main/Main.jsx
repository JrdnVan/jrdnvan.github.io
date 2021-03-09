import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import mainPortraitPhoto from '../../data/mainPortraitPhoto.jpg';
import mainOnomichiPhoto from '../../data/mainOnomichiPhoto.jpg';
import mainGreatWallPhoto from '../../data/mainGreatWallPhoto.jpg';
import mainKyotoPhoto from '../../data/mainKyotoPhoto.jpg';
import mainHongKongPhoto from '../../data/mainHongKongPhoto.jpg';
import ImageDisplay from '../../components/imageDisplay/imageDisplay';

import './Main.css';
function Main(){
  return(
    <body>
      <Header currPage="Main"/>
      <div className="main-body">
        <div className="main-body-content main-portrait-photo">
          <ImageDisplay img={mainOnomichiPhoto} class="image-display main-image" />
          <ImageDisplay img={mainKyotoPhoto} class="image-display main-image" />
          <ImageDisplay img={mainPortraitPhoto} class="image-display main-image" />
          <ImageDisplay img={mainGreatWallPhoto} class="image-display main-image" />
          <ImageDisplay img={mainHongKongPhoto} class="image-display main-image" />
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Main;