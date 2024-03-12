import React, { useEffect, useRef ,useCallback} from 'react';

const VideoPlayer = ({ publicIds }) => {
  const cloudinaryRef = useRef();
  const videoRefs = useRef([]);

  const handleVideoPlayer = useCallback((publicId, index) => {
    const videoRef = videoRefs.current[index];
  
    if (videoRef.current) {
        const player = cloudinaryRef.current.videoPlayer(videoRef.current, {
          cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
          fluid: true, // Responsive video player
          controls: true, // Show controls
          autoplay: true, // Autoplay the video
          muted: true, // Mute the video initially
        });
  
    
        player.source(publicId);
      // You can perform other video player operations here
    }
  }, []);
  
  useEffect(() => {
    if (!cloudinaryRef.current) {
      cloudinaryRef.current = window.cloudinary;
    }
  
    if (videoRefs.current.length !== publicIds.length) {
      videoRefs.current = publicIds.map(() => React.createRef());
    }
  
    publicIds.forEach((publicId, index) => {
      handleVideoPlayer(publicId, index);
    });
  }, [publicIds, handleVideoPlayer]);

  return (
    <div className="grid grid-cols-3 gap-3 mx-40">
      {publicIds.map((publicId, index) => (
        <div key={index} className="pb-[10%] cursor-pointer overflow-hidden">
          <video
            ref={videoRefs.current[index]}
            className="cld-video-player cld-fluid rounded-md hover:scale-105 transition-transform duration-300"
            controls
            data-cld-public-id={publicId}  // Set dynamic public ID
          />
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
