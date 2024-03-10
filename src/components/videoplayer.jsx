import { useEffect, useRef } from 'react';



const VideoPlayer = ({ id, publicId, ...props }) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
 

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;

    playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: cloudName,
      secure: true
    });
  }, [cloudName]);

  return (
    <div style={{ width: '100%', aspectRatio: `${props.width} / ${props.height}`}}>
      <video
        ref={videoRef}
        id={id}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
      />
    </div>
  )
}

export default VideoPlayer;
