import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

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
            <p className="badge">Annual Sports Fest • BKBIET, Pilani</p>
            <h2>Where champions rise from tryouts to trophies</h2>
          </div>

          <div className="sub-content">
            <p>
              QUASAR is BKBIET Pilani’s flagship annual sports fest, uniting
              athletes across disciplines to compete, celebrate, and push
              limits. From track to team sports, every match, set, and sprint is
              a shot at glory.
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
          <img src="/images/1.jpg" alt="quasar-grid-1" />
        </div>

        <div className="md:col-span-6">
          <div />
          <img src="/images/2.jpg" alt="quasar-grid-2" />
        </div>

        <div className="md:col-span-3">
          <div />
          <img src="/images/3.jpg" alt="quasar-grid-3" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div />
          <img src="/images/4.jpg" alt="quasar-grid-4" />
        </div>

        <div className="md:col-span-4">
          <div />
          <img src="/images/5.jpg" alt="quasar-grid-5" />
        </div>
      </div>
    </div>
  );
};
export default About;
