import React, { useState } from 'react';
import './style.css'

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-container" onClick={playVideo}>
      {!isPlaying && (
        <div className="poster" />
      )}
      {isPlaying && (
        <div className="iframe-container">
          <iframe
            width="1030"
            height="580"
            src="https://www.youtube.com/embed/hT4uSyRrUE4?autoplay=1"
            title="Understand IELTS Reading in 30 Minutes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
