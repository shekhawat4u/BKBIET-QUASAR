import { useState, useEffect, useRef } from "react";

const IntroVideo = ({ onVideoEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if user has already seen the intro video in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onVideoEnd) onVideoEnd();
    }
  }, [onVideoEnd]);

  const handleVideoEnd = () => {
    // Mark that user has seen the intro
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsVisible(false);
    if (onVideoEnd) onVideoEnd();
  };

  const handleSkip = () => {
    // Mark that user has seen the intro
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsVisible(false);
    if (onVideoEnd) onVideoEnd();
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onLoadedData={handleVideoLoaded}
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play button - visible until play is initiated */}
      {!isPlaying && videoLoaded && (
        <button 
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e7d393] text-black rounded-full p-5 hover:bg-[#d4a853] transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      
      {/* Skip button */}
      <button 
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-2 bg-[#e7d393] text-black font-bold rounded hover:bg-[#d4a853] transition-all duration-300 flex items-center"
      >
        Skip
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Loading animation/branding - only shown until video loads */}
      {!videoLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
          <div className="text-[#e7d393] font-modern-negra text-6xl md:text-8xl mb-4 pulse-animation">QUASAR</div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#e7d393] to-transparent"></div>
          <div className="text-white text-sm mt-4 tracking-[0.3em] uppercase">Loading Experience</div>
        </div>
      )}
    </div>
  );
};

export default IntroVideo;
