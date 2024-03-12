import React, { useState ,useEffect} from 'react';
import ImageGallery from './project_images';
import Navbar from './navbar';
import VideoPlayer from './videoplayer';
const Work = (  ) => {
 
  const [activeButton, setActiveButton] = useState(null);
 
  const [videoPublicIDs, setVideoPublicIDs] = useState([]);
  const [motionPublicIDs, setMotionPublicIDs] = useState([]);

  

  const imageContext = require.context('../assets/images', false, /\.(jpg|jpeg|png)$/);
  const images = imageContext.keys().map(imageContext);
  
  

  const [selectedGallery, setSelectedGallery] = useState('image'); // 'image' or 'video'


  useEffect(() => {

    // Manually input public IDs for videos
    const videoPublicIds = [
      'assets/videos/enoblereel_tshirt_tqykmv',
      'assets/videos/enblereel01-03_z4wtyy',
      // Add more video public IDs as needed
    ];
    setVideoPublicIDs(videoPublicIds);

    // Manually input public IDs for motion graphics
    const motionPublicIds = [
      'assets/motion_graphics/34bagreel11may_r10cuz',
      'assets/motion_graphics/washingmachine-_2_jw4ezc',
      'assets/motion_graphics/topswhatsappreel-_1_akvsoq',
      'assets/motion_graphics/raghavjanmastimi2_harrisonlock_o7hdsj',
      'assets/motion_graphics/newyeargifforharrison_uszydc',
      'assets/motion_graphics/mmtvideo_qvz9rk',
      'assets/motion_graphics/matesiavideo-_vadoqu',
      'assets/motion_graphics/lockgifindepandanceday_u4uqjo',
      'assets/motion_graphics/lockgif_idoduj',
      'assets/motion_graphics/lockanimatedreel18-07_n4oxib',
      'assets/motion_graphics/harrisonlockvideo10-07_ahco30',
      'assets/motion_graphics/HARISSONLOCK-gabbervideo_lhayzw',
      'assets/motion_graphics/harrisonlockanimatedvideo_d10f8a',
      'assets/motion_graphics/goldlocker29-03_pfdnsz',
      'assets/motion_graphics/gostorejanmastimi_hi4ep3',
      'assets/motion_graphics/firstcarscence_k4ajlc',
      'assets/motion_graphics/arzoooindvideo_chprbx',
      'assets/motion_graphics/firsttemplatekitchen_vl29q2'
      
    ];
    setMotionPublicIDs(motionPublicIds);
  }, []);

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
      <div className="  work flex flex-col ">
      <section className='min-h-screen w-full  flex-col items-center justify-center'>
  <div className='min-h-screen w-full  flex flex-col items-center justify-center' style={{ background: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)' }}>
    <h1 className='text-8xl font-poppins text-white shadow-lg'>
      Works
    </h1>
    <div className="mx-4 mb-16 flex justify-center gap-2 align-top z-20" style={{ top: "70vh" }}>
  <button
    className={`rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none`}
    onClick={() => {
      handleImageRetouchingClick();
      setActiveButton("imageRetouching");
    }}
    style={{ 
      border: activeButton === "imageRetouching" ? "2px solid #fff" : "2px solid transparent",
      background: activeButton === "imageRetouching" ? "rgba(255, 255, 255, 0.3)" : "transparent"
    }}
  >
    Image Retouching
  </button>
  <button
    className={`rounded-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none`}
    onClick={() => {
      handleVideoClick();
      setActiveButton("videoEditing");
    }}
    style={{ 
      border: activeButton === "videoEditing" ? "2px solid #fff" : "2px solid transparent",
      background: activeButton === "videoEditing" ? "rgba(255, 255, 255, 0.3)" : "transparent"
    }}
  >
    Video Editing
  </button>
  <button
    className={`rounded-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white hover:scale-105 transform transition-transform duration-300 focus:outline-none`}
    onClick={() => {
      handleMotionGraphicClick();
      setActiveButton("motionGraphics");
    }}
    style={{ 
      border: activeButton === "motionGraphics" ? "2px solid #fff" : "2px solid transparent",
      background: activeButton === "motionGraphics" ? "rgba(255, 255, 255, 0.3)" : "transparent"
    }}
  >
    Motion Graphics
  </button>
</div>


  </div>
</section>


        {selectedGallery === 'image' ? (
         <ImageGallery images={images} displayCount={images.length} />
        ) : selectedGallery === 'video' ? (
          <VideoPlayer publicIds={videoPublicIDs} />
        ) : (
          <VideoPlayer publicIds={motionPublicIDs} />
        )}
      </div>
    </>
  );
};

export default Work;
