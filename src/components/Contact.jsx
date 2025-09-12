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
    <footer id="contact">
      <div className="content">
        <h2>Connect with QUASAR</h2>
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
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
