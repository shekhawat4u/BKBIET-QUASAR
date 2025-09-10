import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutUs = () => {
  useEffect(() => {
    const heroSplit = new SplitText(".about-title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".about-subtitle", { type: "lines" });
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

    // Add parallax effect to background images
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

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-1/4 opacity-30 parallax-bg z-0">
        <img
          src="/images/hero-left-leaf.png"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/4 opacity-30 parallax-bg z-0">
        <img
          src="/images/hero-right-leaf.png"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>

      {/* Floating decoration elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20 parallax-bg z-0 animate-float-slow">
        <img
          src="/images/cocktail-left-leaf.png"
          alt=""
          className="w-full rotate-45"
        />
      </div>
      <div className="absolute top-1/3 right-10 w-16 h-16 opacity-20 parallax-bg z-0 animate-float-medium">
        <img
          src="/images/cocktail-right-leaf.png"
          alt=""
          className="w-full -rotate-45"
        />
      </div>

      <>
        <section
          id="about-hero"
          className="relative pt-40 pb-20 px-6 md:px-20 z-10 noisy"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative text-center mb-16">
              <div className="text-center mb-4">
                <span className="inline-block text-sm text-[#e7d393] tracking-[0.5em] uppercase mb-2 opacity-80">
                  Discover
                </span>
              </div>
              <h1 className="about-title font-modern-negra text-5xl md:text-7xl text-center mb-6 relative">
                <span className="inline-block relative">
                  ABOUT QUASAR
                  <div className="absolute -bottom-4 left-0 right-0 mx-auto w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#e7d393] to-transparent"></div>
                </span>
              </h1>

              <div className="flex items-center justify-center gap-4 my-10">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e7d393]"></div>
                <div className="w-3 h-3 rotate-45 bg-[#e7d393]"></div>
                <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e7d393]"></div>
              </div>

              <p className="about-subtitle max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
                QUASAR is the annual sports fest of BKBIET, Pilani, bringing
                together students, athletes, and sports enthusiasts from across
                the region. Our mission is to foster sportsmanship, teamwork,
                and healthy competition through a diverse range of events and
                activities. Whether you are a participant or a spectator, QUASAR
                promises an unforgettable experience filled with excitement,
                camaraderie, and the spirit of sports.
              </p>

              <div className="mt-12">
                <a
                  href="https://forms.gle/tChC48TeBZ9En16y6"
                  className="relative inline-block px-8 py-4 overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-[#e7d393] to-[#d4a853] group-hover:opacity-100"></span>
                  <span className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#e7d393] to-[#d4a853] h-[2px]"></span>
                  <span className="absolute bottom-0 right-0 w-full bg-gradient-to-r from-[#d4a853] to-[#e7d393] h-[2px]"></span>
                  <span className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#e7d393] to-[#d4a853] h-full"></span>
                  <span className="absolute bottom-0 right-0 w-[2px] bg-gradient-to-b from-[#d4a853] to-[#e7d393] h-full"></span>
                  <span className="relative font-bold text-[#e7d393] group-hover:text-black">
                    REGISTER NOW
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="relative py-24 px-6 md:px-20 z-10 border-t border-[#e7d393]/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-[#e7d393] opacity-60"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-[#e7d393] opacity-60"></div>
                <img 
                  src="/images/logo1.png" 
                  alt="QUASAR History" 
                  className="w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-black/40 backdrop-blur-sm p-4 rounded border border-[#e7d393]/20">
                  <p className="text-[#e7d393] font-semibold">EST. 2012</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-6">
                  <span className="inline-block text-sm text-[#e7d393] tracking-[0.3em] uppercase mb-2">Our Legacy</span>
                  <h2 className="text-4xl font-modern-negra mb-6">THE HISTORY OF QUASAR</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#e7d393] to-transparent"></div>
                </div>
                <div className="space-y-6 text-gray-300">
                  <p>Born from a vision to unite sports enthusiasts across the region, QUASAR first illuminated the campus of BKBIET, Pilani in 2012. What began as a modest sporting event has evolved into one of Rajasthan's premier collegiate sports festivals.</p>
                  <p>With each passing year, QUASAR has expanded its horizons, introducing new events, attracting more participants, and raising the standards of competition. From traditional sports like cricket and football to modern athletic challenges, QUASAR has become a platform where talent meets opportunity.</p>
                  <p>Today, QUASAR stands as a testament to BKBIET's commitment to fostering physical excellence alongside academic achievements, bringing together over 1000 participants from 30+ colleges annually.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-24 px-6 md:px-20 z-10 noisy">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-sm text-[#e7d393] tracking-[0.3em] uppercase mb-2">Our Foundation</span>
              <h2 className="text-4xl font-modern-negra mb-6">QUASAR VALUES</h2>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#e7d393] to-transparent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-black/60 p-8 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm hover:border-[#e7d393]/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-[#e7d393]/10 flex items-center justify-center mb-6 group-hover:bg-[#e7d393]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#e7d393]/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#e7d393]/30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#e7d393]">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in all aspects of QUASAR, from organization to competition, pushing boundaries and setting new standards.</p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-black/60 p-8 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm hover:border-[#e7d393]/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-[#e7d393]/10 flex items-center justify-center mb-6 group-hover:bg-[#e7d393]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#e7d393]/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#e7d393]/30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#e7d393]">Inclusivity</h3>
                <p className="text-gray-300">QUASAR welcomes all participants regardless of skill level, promoting a diverse and inclusive environment where everyone can thrive.</p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-black/60 p-8 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm hover:border-[#e7d393]/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-[#e7d393]/10 flex items-center justify-center mb-6 group-hover:bg-[#e7d393]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#e7d393]/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#e7d393]/30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#e7d393]">Sportsmanship</h3>
                <p className="text-gray-300">We believe in fair play, respect for opponents, and gracious conduct whether in victory or defeat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 md:px-20 z-10 noisy">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-sm text-[#e7d393] tracking-[0.3em] uppercase mb-2">Questions</span>
              <h2 className="text-4xl font-modern-negra mb-6">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#e7d393] to-transparent mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-black/60 p-6 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#e7d393]">How can I register for QUASAR?</h3>
                <p className="text-gray-300">Registration is available through our online portal. Click on the "Register Now" button at the top of the page to fill out the registration form. Team registrations should be completed by the team captain.</p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-black/60 p-6 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#e7d393]">What sports are included in QUASAR?</h3>
                <p className="text-gray-300">QUASAR features a wide range of sports including cricket, football, basketball, volleyball, badminton, table tennis, chess, athletics, and more. The full list of events is available on our Events page.</p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-black/60 p-6 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#e7d393]">Is accommodation provided for participants?</h3>
                <p className="text-gray-300">Yes, accommodation is provided for participants from other colleges on a first-come, first-served basis. You can select the accommodation option during registration. A nominal fee applies for the duration of the fest.</p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-black/60 p-6 rounded-lg border border-[#e7d393]/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#e7d393]">What is the prize pool for competitions?</h3>
                <p className="text-gray-300">QUASAR offers attractive cash prizes and trophies across all sporting events. The total prize pool exceeds ₹3,00,000, with individual event prizes detailed on the Events page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 px-6 md:px-20 z-10 noisy">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-black to-[#191919] p-12 rounded-lg border border-[#e7d393]/20 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
                <img src="/images/cocktail-left-leaf.png" alt="" className="w-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                <img src="/images/cocktail-right-leaf.png" alt="" className="w-full" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-modern-negra mb-6 text-[#e7d393]">JOIN THE QUASAR EXPERIENCE</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Be part of something extraordinary. Whether as a participant, volunteer, or spectator, QUASAR 2025 awaits you with unforgettable moments and lifetime memories.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a
                  href="https://forms.gle/tChC48TeBZ9En16y6"
                  className="relative inline-block px-8 py-4 overflow-hidden group bg-[#e7d393] text-black font-bold rounded-md hover:bg-[#d4a853] transition-all duration-300"
                >
                  REGISTER NOW
                </a>
                <a
                  href="mailto:quasar@bkbiet.ac.in"
                  className="relative inline-block px-8 py-4 overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-[#e7d393] to-[#d4a853] group-hover:opacity-100"></span>
                  <span className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#e7d393] to-[#d4a853] h-[2px]"></span>
                  <span className="absolute bottom-0 right-0 w-full bg-gradient-to-r from-[#d4a853] to-[#e7d393] h-[2px]"></span>
                  <span className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#e7d393] to-[#d4a853] h-full"></span>
                  <span className="absolute bottom-0 right-0 w-[2px] bg-gradient-to-b from-[#d4a853] to-[#e7d393] h-full"></span>
                  <span className="relative font-bold text-[#e7d393] group-hover:text-black">
                    CONTACT US
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
};

export default AboutUs;
