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
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
