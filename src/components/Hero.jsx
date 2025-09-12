import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
// import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

const Hero = () => {
  // const videoRef = useRef();

  // const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
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

    // const startValue = isMobile ? "top 50%" : "center 60%";
    // const endValue = isMobile ? "120% top" : "bottom top";

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "video",
    //     start: startValue,
    //     end: endValue,
    //     scrub: true,
    //     pin: true,
    //   },
    // });

    // videoRef.current.onloadedmetadata = () => {
    //   tl.to(videoRef.current, {
    //     currentTime: videoRef.current.duration,
    //   });
    // };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">QUASAR</h1>

        {/* <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        /> */}

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

      <div className="w-full top-1/2 max-md:top-[65%] absolute md:items-center justify-center flex">
        <img
          src="/images/ice-dragon.png"
          alt="ice-dragon"
          className="w-[350px] max-md:w-[500px] aspect-square"
        />
        <img
          src="/images/fire-dragon.png"
          alt="fire-dragon"
          className="w-[350px] max-md:w-[500px] aspect-square"
        />
      </div>

      {/* <div className="video absolute inset-0">
        <video
          // ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div> */}
    </>
  );
};

export default Hero;
