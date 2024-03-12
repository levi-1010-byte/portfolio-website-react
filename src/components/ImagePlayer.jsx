import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage} from '@cloudinary/react';


const ImagePlayer = ({ productId }) => {
  // Replace 'your_cloud_name' with your actual Cloudinary cloud name
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const cld = new Cloudinary({ cloud: { cloudName } });


    // Construct public IDs based on the folder structure and filename
    
  
    // Construct Cloudinary image and video objects
    const image = cld.image( productId );
   
  
  // Replace 'your_folder_path' with the path to your folder in Cloudinary


  // Resize to 250 x 250 pixels using the 'fill' crop mode.


  // Render the image in a React component.
  return (
    <div>
      {/* Display image */}
      <AdvancedImage cldImg={image} />

     
    </div>
  )
};

export default ImagePlayer;
