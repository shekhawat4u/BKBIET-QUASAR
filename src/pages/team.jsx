import { useEffect } from "react";

const OurTeam = () => {
  const teamData = {
    Convenors: [
      {
        name: "Nitin Jangir",
        contact: "+91 9414279109",
        role: "Convenor",
        photo: "/images/nitin.jpeg",
        social: {
          instagram: "https://www.instagram.com/n_jangir_15",
        },
      },
      {
        name: "Yashashvi Jangid",
        contact: "+91 9950050535",
        role: "Co - Convenor",
        photo: "/images/yashashvi.jpg",
        social: {
          instagram: "https://www.instagram.com/yashashvie",
          linkedin: "https://www.linkedin.com/in/yashashvijangid",
        },
      },
      {
        name: "Aman Deg",
        contact: "+91 9314222024",
        role:"Sports Officer",
        photo: "/images/aman.jpg",
        social: {
          instagram: "https://www.instagram.com/amandeg1",
          linkedin: "https://www.linkedin.com/in/aman-deg",
        },
      },
    ],

    "Sports Coordinators": [
      {
        name: "Nitin",
        contact: "+91 8619627761",
        role: "Sports Officer",
        photo: "/images/nitin2.jpeg",
        social: {
          instagram: "https://instagram.com/nitin",
          linkedin: "https://linkedin.com/in/nitin",
          github: "https://github.com/nitin",
        },
      },
      {
        name: "Tanmay",
        contact: "+91 8990617241",
        role: "Sports Officer",
        photo: "/images/tanmay.jpg",
        social: {
          instagram: "https://www.instagram.com/tan__y20",
        },
      },
      {
        name: "Rohit Godara",
        contact: "+91 8824958885",
        role: "Kabaddi Coordinator",
        photo: "/images/rohit.jpg",
        social: {
          instagram: "https://www.instagram.com/rohitgodara345",
          linkedin: "https://www.linkedin.com/in/rohit-godara-050a96381",
        },
      },
      {
        name: "Shivam Sharma",
        contact: "+91 9549928366",
        role: "Kabaddi Coordinator",
        photo: "/images/shivam.jpeg",
        social: {
          instagram: "https://www.instagram.com/shivamsharma7777_",
          linkedin: ":https://www.linkedin.com/in/shivam-sharma-91123127b",
        },
      },
      {
        name: "Parveen Yadav",
        contact: "+91 9518457402",
        role: "E-Sports Coordinator",
        photo: "/images/parveen.jpeg",
        social: {
          instagram: "https://www.instagram.com/parveen__yadv",
        },
      },
      {
        name: "Yash Jangid",
        contact: "+91 9351444977",
        role: "Volleyball Coordinator",
        photo: "/images/yash.jpeg",
        social: {
          instagram: "https://www.instagram.com/jangidyash2782",
        },
      },
      {
        name: "Amit Maan",
        contact: "+91 9358335291",
        role: "Volleyball Coordinator",
        photo: "/images/amit.jpg",
        social: {
          instagram: "https://www.instagram.com/maan_amit_007",
          linkedin: "https://www.linkedin.com/in/amit-maan-3073b3313",
        },
      },
      {
        name: "Harshvardhan Saini",
        contact: "+91 7891280076",
        role: "Football Coordinator",
        photo: "/images/harsh.jpeg",
        social: {
          instagram: "https://www.instagram.com/maan_amit_007",
          linkedin: "https://www.linkedin.com/in/amit-maan-3073b3313",
        },
      },
      {
        name: "Aditya Bhomia",
        contact: "+91 7023043828",
        role: "Cricket Coordinator",
        photo: "/images/aditya.jpeg",
        social: {
          instagram: "https://www.instagram.com/bhomia_aditya_09",
        },
      },
      {
        name: "Abhishek Saini",
        contact: "+91 9887510221",
        role: "Cricket Coordinator",
        photo: "/images/abhishek.jpeg",
        social: {
          instagram: "https://www.instagram.com/exciusive.abhi",
        },
      },
      {
        name: "Puran",
        contact: "+91 8290848992",
        role: "Basketball Coordinator",
        photo: "/images/puran.jpg",
        social: {
          instagram: "https://www.instagram.com/maan_amit_007",
          linkedin: "https://www.linkedin.com/in/amit-maan-3073b3313",
        },
      },
      {
        name: "Himanshu",
        contact: "+91 9416490501",
        role: "Badminton Coordinator",
        photo: "/images/himanshu.jpeg",
        social: {
          instagram: "https://www.instagram.com/h.i.m.a.n.s.h.u.1_",
        },
      },
    ],

    "PCr Coordinators": [
      {
        name: "Urvashi",
        contact: "+91 9256564975",
        role: "PCr Coordinator",
        photo: "/images/urvashi.jpeg",
        social: {
          instagram: "https://instagram.com/urvashi",
          linkedin: "https://linkedin.com/in/urvashi",
          github: "https://github.com/urvashi",
        },
      },
      {
        name: "Chetna Bhardwaj",
        contact: "+91 9868485470",
        role: "PCr Coordinator",
        photo: "/images/chetna.jpeg",
        social: {
          instagram: "https://instagram.com/chetnabhardwaj",
          linkedin: "https://linkedin.com/in/chetnabhardwaj",
          github: "https://github.com/chetnabhardwaj",
        },
      },
      {
        name: "Shashi",
        contact: "+91 8708566355",
        role: "PCr Coordinator",
        photo: "/images/shashi.jpg",
        social: {
          instagram: "https://www.instagram.com/kalkal.shashi",
          linkedin: "https://linkedin.com/in/shashikalkal",
        },
      },
      {
        name: "Praveen Sharma",
        contact: "+91 7231841289",
        role: "PCr Coordinator",
        photo: "/images/praveen.jpg",
        social: {
          instagram: "https://www.instagram.com/ipraveensharma_",
          linkedin: "https://www.linkedin.com/in/praveen-sharma09",
          github: "https://github.com/Praveensharma05",
        },
      },
      {
        name: "Nishant Kumar Bainara",
        contact: "+91 7240662081",
        role: "PCr Coordinator",
        photo: "/images/nishant.jpg",
        social: {
          instagram: "https://www.instagram.com/ms_nishant7781",
          linkedin:
            "https://www.linkedin.com/in/nishant-kumar-bainara-bb91a32aa",
          github: "https://github.com/NKB7781",
        },
      },
      {
        name: "Sudhandhu",
        contact: "+91 9354630669",
        role: "PCr Coordinator",
        photo: "/images/sudhanshu.jpeg",
        social: {
          instagram: "https://www.instagram.com/sudh__m",
        },
      },
      {
        name: "Apoorva Bissa",
        contact: "+91 7878363370",
        role: "PCr Coordinator",
        photo: "/images/apoorva.jpg",
        social: {
          instagram: "https://www.instagram.com/bissa_apoorva",
          linkedin: "https://linkedin.com/in/apoorva-bissa-38117b355",
        },
      },
    ],

    "Event Manager": [
      {
        name: "Lakshy Chauhan",
        contact: "+91 6350142804",
        role: "Event Manager",
        photo: "/images/lakshy.jpg",
        social: {
          instagram: "https://instagram.com/lakshy",
          linkedin: "https://linkedin.com/in/lakshy",
          github: "https://github.com/lakshy",
        },
      },
    ],

    Editor: [
      {
        name: "Pranav",
        contact: "+91 9928180571",
        role: "Editor",
        photo: "/images/pranav.jpeg",
        social: {
          instagram: "https://www.instagram.com/prannavvxd",
        },
      },
    ],

    "Web Designer & Developers": [
      {
        name: "Divya Raghav",
        role: "Web Designer & Developer",
        photo: "/images/divya.jpeg",
        social: {
          linkedin: "https://linkedin.com/in/divyaraghav",
          github: "https://github.com/divyaraghav",
        },
      },
      {
        name: "Harshvardhan Singh Shekhawat",
        role: "Web Designer & Developer",
        photo: "/images/harsh.jpg",
        social: {
          instagram: "https://instagram.com/_shekhawat4u_",
          linkedin: "https://linkedin.com/in/shekhawat4u",
          github: "https://github.com/shekhawat4u",
        },
      },
      {
        name: "Sumit Singh Rathore",
        role: "Web Designer & Developer",
        photo: "https://github.com/developer-sumit.png",
        social: {
          instagram: "https://instagram.com/__sumit_banna",
          linkedin: "https://linkedin.com/in/sumit-singh-rathore",
          github: "https://github.com/developer-sumit",
        },
      },
    ],
  };

  useEffect(() => {
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

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-8deg);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}</style>

      {/* Header section */}
      <section className="relative w-full pt-40 pb-20 px-6 md:px-20 z-10 noisy">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="text-center mb-4">
              <span className="inline-block text-sm text-[#e7d393] tracking-[0.5em] uppercase mb-2 opacity-80">
                The People Behind
              </span>
            </div>
            <h1 className="font-modern-negra text-5xl md:text-7xl text-center mb-6 relative">
              <span className="inline-block relative">
                OUR TEAM
                <div className="absolute -bottom-4 left-0 right-0 mx-auto w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#e7d393] to-transparent"></div>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 my-10">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e7d393]"></div>
              <div className="w-3 h-3 rotate-45 bg-[#e7d393]"></div>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e7d393]"></div>
            </div>

            <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-serif">
              "Meet the dedicated individuals who make QUASAR possible"
            </p>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="relative z-10 px-6 md:px-20 pb-32 noisy">
        <div className="max-w-7xl mx-auto">
          {/* Team categories */}
          <div className="space-y-24 md:space-y-32">
            {Object.entries(teamData).map(
              ([category, members], categoryIndex) => (
                <div
                  key={category}
                  className="category-container relative"
                  style={{
                    animationDelay: `${categoryIndex * 0.2}s`,
                    animation: "fadeIn 0.8s ease-in-out forwards",
                  }}
                >
                  {/* Subtle background accent for each category */}
                  <div className="absolute -inset-4 bg-gradient-to-b from-[#e7d393]/5 to-transparent rounded-3xl blur-xl opacity-30 -z-10"></div>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#e7d393] mb-10 text-center relative">
                    <span className="relative inline-block">
                      {category}
                      <div className="absolute -bottom-3 left-0 right-0 h-[2px] w-full">
                        <div className="h-full w-24 mx-auto bg-[#e7d393]"></div>
                      </div>
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                      <div
                        key={`${category}-${index}`}
                        className="relative bg-gradient-to-b from-[#111] to-black rounded-xl overflow-hidden p-6 transform transition-all duration-500 hover:-translate-y-2 group"
                        style={{
                          animationDelay: `${
                            categoryIndex * 0.2 + index * 0.1
                          }s`,
                          animation: "fadeIn 0.8s ease-in-out forwards",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                        }}
                      >
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e7d393] opacity-40 group-hover:opacity-80 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e7d393] opacity-40 group-hover:opacity-80 transition-all duration-500"></div>

                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                          <img
                            src="/images/noise.png"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Avatar */}
                        <div className="relative w-28 h-28 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e7d393] to-[#a18952] opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#e7d393] p-1">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = "none";
                                e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#333] to-[#111] rounded-full flex items-center justify-center">
                                <span class="text-3xl text-[#e7d393] font-modern-negra">${member.name.charAt(
                                  0
                                )}</span>
                              </div>`;
                              }}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-center mb-1 group-hover:text-[#e7d393] transition-colors duration-300">
                          {member.name}
                        </h3>
                        {member.contact && (
                          <p className="text-gray-400 text-sm text-center mb-6">
                            {member.contact}
                          </p>
                        )}
                        <p className="text-gray-400 text-sm text-center mb-6">
                          {member.role}
                        </p>

                        {/* Social Media Links */}
                        <div className="flex justify-center items-center gap-4 mb-4">
                          {member.social?.instagram && (
                            <a
                              href={member.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center hover:border-[#e7d393] hover:bg-[#222] transition-all duration-300"
                              aria-label={`${member.name}'s Instagram`}
                            >
                              <img
                                src="/images/insta.png"
                                alt="Instagram"
                                className="w-4 h-4"
                              />
                            </a>
                          )}
                          {member.social?.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center hover:border-[#e7d393] hover:bg-[#222] transition-all duration-300"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#e7d393]"
                              >
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                              </svg>
                            </a>
                          )}
                          {member.social?.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center hover:border-[#e7d393] hover:bg-[#222] transition-all duration-300"
                              aria-label={`${member.name}'s GitHub`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-[#e7d393]"
                              >
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                              </svg>
                            </a>
                          )}
                        </div>

                        {/* Decorative accent */}
                        <div className="relative h-[1px] w-full mt-4 overflow-hidden">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#e7d393] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shimmer"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
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

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .group:hover .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </section>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full opacity-40 z-0">
        <div className="flex justify-between items-end">
          <img
            src="/images/footer-left-leaf.png"
            alt="Decorative element"
            className="w-1/3 md:w-1/4 opacity-70"
          />
        </div>
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 z-[-1] opacity-[0.04] pointer-events-none mix-blend-overlay">
        <img
          src="/images/noise.png"
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

export default OurTeam;
