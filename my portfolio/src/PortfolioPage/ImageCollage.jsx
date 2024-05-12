// src/components/ImageCollage.js

import React from 'react';
import image from '../assets/my image.jpg'

function ImageCollage({images}){
  // Array of image file paths (assuming they are in the public directory)
  // const images = [
  //   image,
  //   image,
  //   image,
  //   image,
  //   image
  // ];

  return (
    <div className="image-collage">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
      ))}
    </div>
  );
};

export default ImageCollage;
