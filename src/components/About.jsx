import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Annual Sports Fest • BKBIET Pilani, Pilani</p>
            <h2>Where champions rise from tryouts to trophies</h2>
          </div>

          <div className="sub-content">
            <p>
              QUASAR is BKBIET Pilani Pilani’s flagship annual sports fest,
              uniting athletes across disciplines to compete, celebrate, and
              push limits. From track to team sports, every match, set, and
              sprint is a shot at glory.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>20+</span> Events
              </p>
              <p className="text-sm text-white-100">
                Boys & Girls categories • See Prize Pool above
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div />
          <img src="/images/sports/1.webp" alt="quasar-grid-1" />
        </div>

        <div className="md:col-span-6">
          <div />
          <img src="/images/sports/2.webp" alt="quasar-grid-2" />
        </div>

        <div className="md:col-span-3">
          <div />
          <img src="/images/sports/3.webp" alt="quasar-grid-3" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div />
          <img src="/images/sports/4.webp" alt="quasar-grid-4" />
        </div>

        <div className="md:col-span-4">
          <div />
          <img src="/images/sports/5.webp" alt="quasar-grid-5" />
        </div>
      </div>

      {/* See All Sports Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/sports"
          className="px-8 py-3 bg-[#e7d393] text-black font-bold rounded-lg hover:bg-[#d4a853] transition-all duration-300 text-lg flex items-center"
        >
          See All Sports
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
        </Link>
      </div>
    </div>
  );
};
export default About;
