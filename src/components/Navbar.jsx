import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
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
    <nav>
      <div>
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/BKBIET.png"
            className="w-10 h-10 rounded-full border-2 border-[#D6C3A1] bg-white"
            alt="BKBIET logo"
          />

          <p>QUASAR</p>
          <img
            src="/images/logo1.png"
            className="w-10 h-10"
            alt="QUASAR logo"
          />
        </a>

        <ul>
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
      </div>
    </nav>
  );
};
export default Navbar;
