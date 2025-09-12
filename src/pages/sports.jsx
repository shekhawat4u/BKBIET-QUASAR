import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { maleSportsLists, femaleSportsLists } from "../../constants/index.js";

const Sports = () => {
  useEffect(() => {
    const heroSplit = new SplitText(".sports-title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".sports-subtitle", { type: "lines" });

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

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundElements = document.querySelectorAll(".parallax-bg");

      backgroundElements.forEach((element) => {
        element.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prizePoolSports = {
    boys: maleSportsLists,
    girls: femaleSportsLists,
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-1/4 opacity-30 parallax-bg z-0">
        <img
          src="/images/assets/hero-left-leaf.webp"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/4 opacity-30 parallax-bg z-0">
        <img
          src="/images/assets/hero-right-leaf.webp"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>

      {/* Floating decoration elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20 parallax-bg z-0 animate-float-slow">
        <img
          src="/images/assets/cocktail-left-leaf.webp"
          alt=""
          className="w-full rotate-45"
        />
      </div>
      <div className="absolute top-1/3 right-10 w-16 h-16 opacity-20 parallax-bg z-0 animate-float-medium">
        <img
          src="/images/assets/cocktail-right-leaf.webp"
          alt=""
          className="w-full -rotate-45"
        />
      </div>

      <section className="relative pt-40 pb-20 px-6 md:px-20 z-10 noisy">
        <div className="mx-auto">
          <div className="relative text-center mb-16">
            <div className="text-center mb-4">
              <h1 className="sports-title text-4xl md:text-6xl lg:text-7xl font-modern-negra uppercase mb-8">
                QUASAR SPORTS
              </h1>
              <p className="sports-subtitle max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                Explore all the exciting sports events happening at QUASAR. From
                cricket to table tennis, we have a wide range of competitions
                for everyone.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div>
            {Object.entries(prizePoolSports).map(([key, sports]) => (
              <div key={key} className="mt-10">
                <p className="text-2xl font-bold mb-2.5">{key.toUpperCase()}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sports.map((sport, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:bg-white/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-70"></div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-modern-negra mb-2">
                          {sport.name}
                        </h3>
                        <p className="text-gray-300 mb-1">
                          Venue: {sport.country}
                        </p>
                        <p className="text-gray-300 mb-3">
                          Location: {sport.detail}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-yellow-400 font-bold">
                              Price Pool: {sport.price}
                            </span>
                            <div className="text-yellow-400 text-xs">
                              (Up to)
                            </div>
                          </div>
                          <a
                            href="https://forms.gle/tChC48TeBZ9En16y6"
                            className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold transform transition-transform duration-300 group-hover:scale-105"
                          >
                            Register Now
                          </a>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                        <img
                          src="/images/assets/cocktail-right-leaf.webp"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-gray-400">
            THE AMOUNTS ARE SUBJECT TO CHANGE BASED ON THE NUMBER OF
            PARTICIPANTS
          </div>
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="relative py-20 px-6 md:px-20 z-10 noisy">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
              <img
                src="/images/assets/cocktail-left-leaf.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
              <img
                src="/images/assets/cocktail-right-leaf.webp"
                alt=""
                className="w-full"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-modern-negra mb-4">
              Ready to Compete
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us for an exciting sports festival at QUASAR. Register now to
              participate in your favorite sports events and win amazing prizes!
            </p>
            <a
              href="https://forms.gle/tChC48TeBZ9En16y6"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-bold transform transition-transform duration-300 hover:scale-105"
            >
              Register for Sports Events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sports;
