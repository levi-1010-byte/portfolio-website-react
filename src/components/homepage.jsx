import React, { useState } from 'react';
import '../components/hompage.css'
import Lottie from 'lottie-react';
import characterImage from '../character-image.png';

import { Parallax } from 'react-parallax';
import videoanimation from '../assets/Animation - 1708753267832.json';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './navbar';

import BrandsSlider from './brannd_marquee';
import services from '../assets/services.jpg'
import { ContactUs } from './ContactUs';
import image_animation from '../assets/image editing.json'
import motion_animation from '../assets/motion_animation.json'
import avtar_background_animation from '../assets/avtar_background.json'





const Home = () => {

const imageretouching='https://res.cloudinary.com/dgq0bnxp7/image/upload/assets/cover images and videos/image_editing_slotiq.jpg';
const motion='https://res.cloudinary.com/dgq0bnxp7/video/upload/assets/cover images and videos/motion_graphics_tenutn.mp4';
const editing='https://res.cloudinary.com/dgq0bnxp7/video/upload/assets/cover images and videos/video_editing_mzt0h2.mp4';

  const [isModalOpen, setIsModalOpen] = useState(false);

 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const backgroundStyle = {
    backgroundColor: 'hsl(218, 41%, 15%)',
    backgroundImage: 'radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)',
  };
  
  return (<>
   <div className="home ">
    <Navbar/>
    <section className='hero  bg-[#002b44] overflow-hidden '>
  <Parallax strength={300}>
    <section className=" relative sticky h-screen text-[#FBF7FF] font-[Poppins] flex flex-col items-center justify-end relative z-10">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="mb-2 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-7xl dark:text-white">Transforming Ideas <span className="text-green-500 mx-1 font-extrabold text-7xl relative inline-block stroke-current">
        Into
        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
        </svg>
    </span> </h1>
        </div>
        <div className="mb-4">
          <h1 className="text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
            Visual
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden mx-2">
        <span className="animate-word bg-yellow-700 col-span-full row-span-full">Marvels</span>
        <span className="animate-word-delay-1 bg-purple-800 col-span-full row-span-full">Gems</span>
        <span className="animate-word-delay-2 bg-gray-400 col-span-full row-span-full">Creations</span>
        <span className="animate-word-delay-3 bg-[#00cba9] col-span-full row-span-full">Epics</span>
        <span className="animate-word-delay-4 bg-[#7355ec] col-span-full row-span-full">Masterpieces</span>
        </div>
          </h1>
        </div>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Unleashing Creativity through Pixels and Passion</p>
      </div>
      <Link
  to="/about" // Specify the route path of the target component
  className="mb-3 group inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-[#29b078] rounded-lg hover:bg-[#002b44] border border-[#29b078] md:rounded-3xl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-colors"
>
  <span className="group-hover:text-[#29b078]">Contact me</span>
  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path className="group-hover:stroke-[#29b078]" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</Link>
    
    </section>
  
   
    
  </Parallax>
  {/* Add the semi-circle */}
  </section>
  
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Lottie
    animationData={avtar_background_animation}
  className='absolute -top-4 opacity-70'
  />

  {/* Image positioned on top */}
  <img
    className=" relative object-cover object-center rounded z-1000"
    alt="hero"
    src={characterImage}
    
  />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:px-24 md:px-16 flex flex-col md:items-start md:text-left items-center text-center ">
    <div className="h-[110px] w-full bg-green-500 mb-4 md:mb-0 flex items-center justify-end border rounded-md">
      <h1 className='text-4xl  mr-2 text-white font-bold '>My story</h1>
      <div className=' relative h-4/5 w-1/3 mx-1  overflow-hidden bg-gray-200 rounded-full'>
        <img src={characterImage} alt="myimage" className='object-cover w-full h-full ' />
        </div>
      
    </div>
      {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1> */}
      <p className="my-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      
    </div>
  </div>
</section>
<section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto">
   
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">200+</h2>
          <p className="leading-relaxed">Projects</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
          <p className="leading-relaxed">Clients</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">10+</h2>
          <p className="leading-relaxed">Brands</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">2+</h2>
          <p className="leading-relaxed">Years experience</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
     <BrandsSlider/>
     </section>


      <section className='relative bg-[#FFFADE] min-h-screen flex flex-col   items-center z-10'>
      <div className="h-1/6 w-4/5 bg-green-500 mx-8 my-8 md:mb-0 flex items-center justify-center border rounded-md ">
      <h1 className='text-7xl my-1 mr-2 text-white font-bold font-Montserrat'>My Services</h1>
      <div className=' relative h-90 w-1/3 mx-2 my-2 py-2 overflow-hidden bg-gray-200 rounded-full'>
        <img src={services} alt="myimage" className='object-cover w-full h-full ' /></div>
      
    </div>
    <div className="relative flex min-h-screen  justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 gap-2">
    <Link to="/services">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-purple-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-purple-500 transition-all duration-300 group-hover:bg-purple-400">
            <Lottie animationData={image_animation}/>
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h1 className=" text-3xl title-font font-medium mb-4">Pixel Perfection Package</h1>
                <p>Our expert team will enhance colors, fix imperfections, and apply advanced editing techniques for stunning results. Perfect for professional portraits, product shots, or social media content..</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    
                </p>
            </div>
        </div>
    </div>
      </Link>
      <Link to="/services">
      <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
           
            <Lottie animationData={videoanimation}/>
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                 <h1 className=" text-3xl title-font font-medium mb-4">Cinematic Reels Masterpiece</h1>
                <p>Transform your raw footage into a cinematic masterpiece with our Video Editing and Reels Making service. Whether it's a vlog, promotional video, or social media reels, we'll turn your content into a visual storytelling sensation.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                   
                </p>
            </div>
        </div>
    </div>
      </Link>
      <Link to="/services">
      <div
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400">
            <Lottie animationData={motion_animation}/>
            </span>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                   <h1 className=" text-3xl title-font font-medium mb-4">Dynamic Motion Designs</h1>  
                <p>Our team combines creativity and technical expertise to craft eye-catching motion graphics tailored to your brand. Stand out in the digital landscape with animated content that leaves a lasting impact.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  
                </p>
            </div>
        </div>
    </div>
      </Link>

  
   
   
</div>

        


        {/* <div className="h-[10%] w-[90%] mx-auto my-2 flex justify-center gap-2">
          <button
            className=" bg-indigo-600 text-[#FBF7FF] border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-400 
          duration-500 rounded text-lg font-[Poppins]"
            onClick={handleImageRetouchingClick}
          >
            Image Retouching
          </button>
          <button
            className=" bg-indigo-600 text-[#FBF7FF] border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-400 
          duration-500 rounded text-lg font-[Poppins]"
            onClick={handleMotionGraphicClick}
          >
            Motion Graphic
          </button>
        </div>
        {selectedGallery === 'image' ? (
          <ImageGallery images={images} displayCount={8} />
        ) : (
          <VideoGallery videos={slicevideos} />
        )} */}
      </section>
      
      <section className='relative bg-[#FFFADE] min-h-screen flex flex-col   items-center z-10'>
   
      <h1 className='text-9xl my-5 mr-2    font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]'>My Work</h1>
     
      <div className="grid grid-cols-1 gap-3   lg:grid-cols-3 mx-5 ">
        <Link to='/work'>
        
        <button  className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-0 pb-1">Image Retouching</h2>
                                {/* <p className="text-lg font-light text-white">Elevate your visual storytelling with my creative touch in image retouching. Using my expertise in Photoshop, I meticulously enhance colors, correct imperfections, and bring out the best in your photos, ensuring a captivating and polished result.</p> */}
                            </div>
                        </div>
                    </div>
                    <img className="w-full h-full object-cover" src={imageretouching} alt="Profile"/>
                </div>
            </button>
        </Link>
        <Link to='/work'>
          
        <button className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-0 pb-1">Motion Graphics</h2>
                                {/* <p className="text-lg font-light text-white">Immerse your audience in captivating visuals crafted by my expertise in motion graphics rendering. Through innovative design and animation techniques, I transform static concepts into dynamic and engaging content that leaves a lasting impression.</p> */}
                            </div>
                        </div>
                    </div>
                    <video className="w-full h-full object-cover"  autoPlay muted>
      <source src={motion} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
                </div>
            </button>
          
          </Link>
          <Link to='/work'>
          
          <button  className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group ">
                    <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-0 pb-1">Video editing</h2>
                                {/* <p className="text-lg font-light text-white">Explore the art of storytelling through my personalized video editing skills using Adobe Premiere Pro. From conceptualization to execution, I bring your ideas to life, seamlessly weaving together footage, effects, and audio for a compelling viewing experience.</p> */}
                            </div>
                        </div>
                    </div>
                    <video className="w-full h-full object-cover"  autoPlay muted>
      <source src={editing} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
                </div>
            </button> 
          </Link>
          
          
            


        </div>  
    
   

        


        {/* <div className="h-[10%] w-[90%] mx-auto my-2 flex justify-center gap-2">
          <button
            className=" bg-indigo-600 text-[#FBF7FF] border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-400 
          duration-500 rounded text-lg font-[Poppins]"
            onClick={handleImageRetouchingClick}
          >
            Image Retouching
          </button>
          <button
            className=" bg-indigo-600 text-[#FBF7FF] border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-400 
          duration-500 rounded text-lg font-[Poppins]"
            onClick={handleMotionGraphicClick}
          >
            Motion Graphic
          </button>
        </div>
        {selectedGallery === 'image' ? (
          <ImageGallery images={images} displayCount={8} />
        ) : (
          <VideoGallery videos={slicevideos} />
        )} */}
      </section>  
    
  
      <div className="container my-24 mx-auto md:px-6">
      <section style={backgroundStyle} className="mb-32 px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="flex grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-16 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                The best offer <br /><span className="text-[hsl(218,81%,75%)]">for your business</span>
              </h1>
              <button
        className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0 rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        data-te-ripple-init
        data-te-ripple-color="light"
       
        onClick={openModal}
      >
        Get started
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="absolute inset-0  bg-opacity-50"
              onClick={closeModal}
            ></div>
            <div className="relative z-50 max-w-md w-full p-4">
              <ContactUs />
            </div>
          </div>
        </div>
      )}
            
               
            </div>
            <div className="mb-12 lg:mb-0">
              <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/horizontal/058.jpg"
                className="w-full rounded-lg shadow-lg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div> 
   
    <footer className="relative bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, I respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
  <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-twitter"></i>
    </button>
  </a>
  
  <a href="https://facebook.com/your_username" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-facebook-square"></i>
    </button>
  </a>

  <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-instagram"></i>
    </button>
  </a>

  <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
      <i className="fab fa-linkedin"></i>
    </button>
  </a>
</div>

      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
         
          
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        
      </div>
    </div>
  </div>
</footer>
    </div>
  </>
  );
};

export default Home;
