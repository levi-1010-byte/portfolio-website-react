import React, {  useState } from "react";
import { Video } from "cloudinary-react";

const VideoPlayer = ({ publicIds }) => {
  const [videoIndex, setVideoIndex] = useState(0);

  const getNextIndex = () => {
    return (videoIndex + 1) % publicIds.length;
  };

  const getPrevIndex = () => {
    return videoIndex === 0 ? publicIds.length - 1 : videoIndex - 1;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <button
          className="absolute top-0 left-0 z-10 bg-white bg-opacity-50 px-4 py-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none"
          onClick={() => setVideoIndex(getPrevIndex())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-0 right-0 z-10 bg-white bg-opacity-50 px-4 py-2 rounded-full transition-transform transform hover:scale-110 focus:outline-none"
          onClick={() => setVideoIndex(getNextIndex())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <Video
          key={publicIds[videoIndex]}
          controls
          cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
          publicId={publicIds[videoIndex]}
          width={400}
          muted
          autoPlay
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
