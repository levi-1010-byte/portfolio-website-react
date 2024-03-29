import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
// import cover1 from '../assets/images/cover1.jpg';
// import cover2 from '../assets/videos/chatgptt 1.mp4';
// import cover3 from '../assets/videos/go stor.mp4';

const MediaCard = ({ mediaType, mediaUrl, title, description }) => {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    if (mediaType === 'video' && videoRef.current) {
      if (videoRef.current.play) {
        videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (mediaType === 'video' && videoRef.current) {
      if (videoRef.current.pause) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative group">
        {mediaType === 'video' ? (
          <ReactPlayer
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
            url={mediaUrl}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        ) : (
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
            src={mediaUrl}
          />
        )}
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CardsWithMedia = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
      </div>
      <div className="flex m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
              <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  );
};

export default CardsWithMedia;
