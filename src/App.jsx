import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import PrizePool from "./components/PrizePool.jsx";
import IntroVideo from "./components/IntroVideo.jsx";
import AboutUs from "./pages/about-us.jsx";
import Archives from "./pages/archives.jsx";
import OurTeam from "./pages/team.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // If intro is not showing, make sure content is loaded
    if (!showIntro) {
      setContentLoaded(true);
    }
  }, [showIntro]);

  const handleVideoEnd = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro && <IntroVideo onVideoEnd={handleVideoEnd} />}
      
      {/* Only render the main content after intro video ends or is skipped */}
      {(!showIntro || contentLoaded) && (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <PrizePool />
                  <About />
                  {/* <Art /> */}
                  <Menu />
                  <Contact />
                </>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/team" element={<OurTeam />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
