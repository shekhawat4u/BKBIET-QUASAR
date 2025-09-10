import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when user clicks on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className={`${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
      <div>
        <a href="/" className="flex items-center gap-3 z-20">
          <img
            src="/images/BKBIET.png"
            className="w-10 h-10 rounded-full border-2 border-[#D6C3A1] bg-white"
            alt="BKBIET Pilani logo"
          />

          <p>QUASAR</p>
          <img
            src="/images/logo1.png"
            className="w-10 h-10"
            alt="QUASAR logo"
          />
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-20 absolute right-5 top-7"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
          <li>
            <a 
              href="/BROCHURE.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#e7d393] text-black px-2 py-1 rounded-md hover:bg-[#d4a853] transition-all duration-300 flex items-center font-medium text-sm"
            >
              Brochure
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-10 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path} className="text-center">
                <a 
                  href={link.path} 
                  className="text-xl font-medium"
                  onClick={closeMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a 
                href="/BROCHURE.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#e7d393] text-black px-4 py-2 rounded-md hover:bg-[#d4a853] transition-all duration-300 flex items-center font-medium"
                onClick={closeMenu}
              >
                Brochure
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
