import { useEffect } from "react";

const Archives = () => {
  const allImages = [
    "/images/sports/1.webp",
    "/images/sports/2.webp",
    "/images/sports/3.webp",
    "/images/sports/4.webp",
    "/images/sports/5.webp",
    "/images/sports/6.webp",
    "/images/sports/7.webp",
    "/images/sports/8.webp",
    "/images/sports/9.webp",
    "/images/sports/10.webp",
    "/images/sports/11.webp",
    "/images/sports/12.webp",
    "/images/sports/13.webp",
    "/images/sports/14.webp",
    "/images/sports/15.webp",
    "/images/sports/16.webp",
    "/images/sports/17.webp",
    "/images/sports/18.webp",
    "/images/sports/19.webp",
    "/images/sports/20.webp",
    "/images/sports/21.webp",
    "/images/sports/22.webp",
    "/images/sports/23.webp",
  ];

  useEffect(() => {
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
          src="/images/hero-left-leaf.webp"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/4 opacity-30 parallax-bg z-0">
        <img
          src="/images/hero-right-leaf.webp"
          alt="Decorative leaf"
          className="w-full"
        />
      </div>

      {/* Header section */}
      <section className="relative w-full pt-40 pb-20 px-6 md:px-20 z-10 noisy">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <h1 className="font-modern-negra text-5xl md:text-7xl text-center mb-6 relative">
              <span className="inline-block relative">
                QUASAR ARCHIVES
                <div className="absolute -bottom-4 left-0 right-0 mx-auto w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#e7d393] to-transparent"></div>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 my-10">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e7d393]"></div>
              <div className="w-3 h-3 rounded-full bg-[#e7d393]"></div>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e7d393]"></div>
            </div>

            <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-serif">
              "A collection of moments frozen in time, celebrating the spirit of
              QUASAR"
            </p>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="relative z-10 px-6 md:px-20 pb-32 noisy">
        <div className="max-w-7xl mx-auto">
          {/* Modern masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 md:space-y-8">
            {allImages.map((image, index) => {
              const heights = ["40vh", "50vh", "30vh", "45vh", "36vh", "60vh"];
              const height = heights[index % heights.length];

              return (
                <div
                  key={index}
                  className="relative group inline-block w-full mb-6 md:mb-8 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    height: index % 7 === 0 ? "65vh" : height,
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeIn 0.8s ease-in-out forwards",
                  }}
                >
                  <img
                    src={image}
                    alt={`QUASAR Archives`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-lg mb-1 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      QUASAR Archives
                    </span>
                    <span className="text-gray-300 text-sm transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0 transition-delay-100">
                      Memories worth capturing
                    </span>
                  </div>

                  {/* Aesthetic border accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e7d393] to-[#d4a853] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full opacity-40 z-0">
        <div className="flex justify-between items-end">
          <img
            src="/images/footer-left-leaf.webp"
            alt="Decorative element"
            className="w-1/3 md:w-1/4 opacity-70"
          />
        </div>
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 z-[-1] opacity-[0.04] pointer-events-none mix-blend-overlay">
        <img
          src="/images/noise.webp"
          alt="Noise texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient vignette for aesthetic effect */}
      <div className="fixed inset-0 z-[-2] bg-radial-gradient pointer-events-none opacity-60"></div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.8) 80%,
            rgba(0, 0, 0, 1) 100%
          );
        }
      `}</style>
    </main>
  );
};

export default Archives;
