import React, { useState ,useEffect} from 'react';
import ImageGallery from './project_images';
import Navbar from './navbar';
import VideoPlayer from './videoplayer';
const Work = (  ) => {
 

 
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
