import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoGallery = ({ videos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const openModal = (video) => {
    setSelectedVideo(video);
    console.log("model open")
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo('');
    setModalOpen(false);
  };

  // Log the videos array to the console for debugging
  useEffect(() => {
    console.log('Videos:', videos);
  }, [videos]);

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mx-40">
        {videos.map((video, index) => (
          <div key={index} className="pb-[10%] cursor-pointer overflow-hidden">
            
            <ReactPlayer
              url={video}
              width="100%"
              height="100%"
              playing={false}
              muted={true}
              className=" rounded-md hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(video)}/>
          </div>
        ))}
      </div>

      {/* Modal for playing the video */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto min-h-screen">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>
            <div className="relative  h-screen z-50 max-w-2xl w-full p-4 ">
              <ReactPlayer
                url={selectedVideo}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                className='cover '
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
