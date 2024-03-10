import React from 'react';


const ImageGallery = ({ images , displayCount }) => {
  const fixedWidth = 100; // Replace with your desired width
  const fixedHeight = 100; // Replace with your desired height

  // Modify the images array to include width and height properties
  
  

  // Modify the images array to include width and height properties
  const modifiedImages = images.map((src, index) => ({
    src,
    width: fixedWidth,
    height: fixedHeight,
  }));

  return (
    <>
    <div  className="grid grid-cols-5 gap-4 md:grid-cols-3 md:grid-rows-4 lg:grid-rows-3 mx-40">
      {modifiedImages.map((photo, index) => (
        <div data-tilt  key={index} className="relative">
          <img 
            src={photo.src}
            alt={` ${index}`}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        
        
       
      ))}
    </div>
   
     </>
  );
};

export default ImageGallery;
