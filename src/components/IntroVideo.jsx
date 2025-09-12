import { useState, useEffect, useRef } from "react";

const textAnimationStyle = {
  animation: "textGlow 2s infinite alternate",
};

const buttonAnimationStyle = {
  animation: "buttonPulse 1.5s infinite alternate",
};

const IntroVideo = ({ onVideoEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntroText, setShowIntroText] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      setIsVisible(false);
      if (onVideoEnd) onVideoEnd();
    }
  }, [onVideoEnd]);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsVisible(false);
    if (onVideoEnd) onVideoEnd();
  };

  const handleSkip = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsVisible(false);
    if (onVideoEnd) onVideoEnd();
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (!showIntroText && videoRef.current && videoLoaded && !isPlaying) {
      videoRef.current.play().catch((error) => {
        console.error("Error auto-playing video:", error);
      });
      setIsPlaying(true);
    }
  }, [showIntroText, videoLoaded, isPlaying]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <style jsx>{`
        @keyframes textGlow {
          0% {
            text-shadow: 0 0 10px rgba(231, 211, 147, 0.7),
              0 0 20px rgba(231, 211, 147, 0.5),
              0 0 30px rgba(231, 211, 147, 0.3);
          }
          100% {
            text-shadow: 0 0 15px rgba(231, 211, 147, 0.9),
              0 0 30px rgba(231, 211, 147, 0.7),
              0 0 40px rgba(231, 211, 147, 0.5);
          }
        }
        @keyframes buttonPulse {
          0% {
            box-shadow: 0 0 5px rgba(231, 211, 147, 0.5);
          }
          100% {
            box-shadow: 0 0 15px rgba(231, 211, 147, 0.8),
              0 0 20px rgba(231, 211, 147, 0.5);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .intro-text-container {
          animation: fadeIn 1.5s ease-in;
        }
      `}</style>

      {showIntroText && (
        <div className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center intro-text-container">
          <h1
            className="text-[#e7d393] font-modern-negra text-4xl md:text-6xl lg:text-7xl text-center mb-10"
            style={textAnimationStyle}
          >
            Enter The Game of Ice and Fire
          </h1>
          <button
            onClick={() => setShowIntroText(false)}
            className="mt-12 px-8 py-3 bg-transparent border-2 border-[#e7d393] text-[#e7d393] font-bold rounded-lg hover:bg-[#e7d393] hover:text-black transition-all duration-300 text-lg"
            style={buttonAnimationStyle}
          >
            Continue
          </button>
        </div>
      )}

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

      {!showIntroText && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-6 py-2 bg-[#e7d393] text-black font-bold rounded hover:bg-[#d4a853] transition-all duration-300 flex items-center"
        >
          Skip
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {!videoLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
          <div className="text-[#e7d393] font-modern-negra text-6xl md:text-8xl mb-4 pulse-animation">
            QUASAR
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#e7d393] to-transparent"></div>
          <div className="text-white text-sm mt-4 tracking-[0.3em] uppercase">
            Loading Experience
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroVideo;
