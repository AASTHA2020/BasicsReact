import React, { useState } from 'react';
import images from './image';
import './App.css'; // Assuming you will create a separate CSS file for styling

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
            className="thumbnail"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="selected-image-container">
          <p>Selected Image</p>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="selected-image"
          />
          <p>Selected</p>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
