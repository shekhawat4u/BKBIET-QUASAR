import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">QUASAR</h1>
        <div className="body">
          <div className="content z-[20]">
            <div className="space-y-5 hidden md:block">
              <p>Annual Sports Fest of BKBIET, Pilani</p>
              <p className="subtitle">
                The Game Of <br /> Ice And Fire
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                This fest is more than a contest of skills - it is a proving
                ground where champions are forged.
                <br />
                Here, victory is not merely about a score, but about leaving
                behind a legacy worthy of the throne.
              </p>
              <a
                href="https://forms.gle/tChC48TeBZ9En16y6"
                className="font-semibold opacity-80 2xl:text-start text-center text-gray-900 hover:text-black bg-yellow px-4 py-2 rounded-2xl"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-screen overflow-hidden top-1/2 max-md:top-[65%] absolute md:items-center justify-center flex">
        <img
          src="/images/assets/ice-dragon.webp"
          alt="ice-dragon"
          className="w-[350px] max-md:w-[500px] aspect-square"
        />
        <img
          src="/images/assets/fire-dragon.webp"
          alt="fire-dragon"
          className="w-[350px] max-md:w-[500px] aspect-square"
        />
      </div>
    </>
  );
};

export default Hero;
