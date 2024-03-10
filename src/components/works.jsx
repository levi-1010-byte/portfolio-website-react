import React, { useState } from 'react';
import ImageGallery from './project_images';
import VideoGallery from './project_videos';
import Navbar from './navbar';
import ImagePlayer from './ImagePlayer';
import VideoPlayer from './videoplayer';
const Work = (  ) => {
 

  const videoContext = require.context('../assets/videos', false, /\.(mp4)$/);
  const videos = videoContext.keys().map(videoContext);

  const imageContext = require.context('../assets/images', false, /\.(jpg|jpeg|png)$/);
  const images = imageContext.keys().map(imageContext);
  
  const motionContext = require.context('../assets/motion_graphics', false, /\.(mp4)$/);
  
  const motion = motionContext.keys().map(motionContext);

  const [selectedGallery, setSelectedGallery] = useState('image'); // 'image' or 'video'

  const handleImageRetouchingClick = () => {
    setSelectedGallery('image');
  };

  const handleMotionGraphicClick = () => {
    setSelectedGallery('motion');
  };
   const handleVideoClick = () => {
    setSelectedGallery('video');
  };

  return (
    <>
      <Navbar isOnWork={true} />
      <div className=" relative work flex flex-col ">
        <section className=' relative min-h-screen w-full '>
          <div className='absolute h-[65%] w-full bg-[#a2d9ff] flex items-center justify-center'>
            <h1 className='text-8xl font-poppins'>
              Works
            </h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"style={{ transform: 'rotate(180deg)',  }} className="absolute -bottom-20 w-full">
  <path fill="#a2d9ff" fill-opacity="1" d="M0,160L21.8,144C43.6,128,87,96,131,106.7C174.5,117,218,171,262,202.7C305.5,235,349,245,393,261.3C436.4,277,480,299,524,309.3C567.3,320,611,320,655,298.7C698.2,277,742,235,785,229.3C829.1,224,873,256,916,229.3C960,203,1004,117,1047,106.7C1090.9,96,1135,160,1178,197.3C1221.8,235,1265,245,1309,229.3C1352.7,213,1396,171,1418,149.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
</svg>

        </section>
       

        <div className=" absolute  h-[2%] w-[90%] mx-4   mb-16 flex justify-center gap-2 align-top z-20" style={{ top: '70vh' }}>
          <button
            className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none"
            onClick={handleImageRetouchingClick}
          >
            Image Retouching
          </button>
          <button
            className="rounded-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none"
            onClick={handleVideoClick}
          >
            Video editing
          </button>
          <button
            className="rounded-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none"
            onClick={handleMotionGraphicClick}
          >
            Motion Graphics
          </button>
        </div>

        {selectedGallery === 'image' ? (
          <div>
          {images.map((image, index) => (
            <ImagePlayer key={index} imagePublicID={image.public_id} />
          ))}
          </div>
        ) : selectedGallery === 'video' ? (
          <div>
          {videos.map((video, index) => (
            <VideoPlayer key={index} videoPublicID={video.public_id} />
          ))}
        </div>
        ) : (
          <div>
          {/* Assuming you have a MotionPlayer component */}
          {motion.map((motion, index) => (
            <VideoPlayer key={index} motionPublicID={motion.public_id} />
          ))}
        </div>
        )}
      </div>
    </>
  );
};

export default Work;
