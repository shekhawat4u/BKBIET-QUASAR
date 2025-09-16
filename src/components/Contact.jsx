import { socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer
      id="contact"
      className="relative mt-10 px-4 text-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-10">
        <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra">
          Connect with <span className="text-primary">QUASAR</span>
        </h2>

        <div>
          <h3>Venue</h3>
          <p>BKBIET, Pilani, Rajasthan, 333031</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>+91 6350142804</p>
          <p>+91 9950050535</p>
          <p>quasar@bkbiet.ac.in</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="flex justify-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-transform hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
