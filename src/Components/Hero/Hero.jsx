import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your images
import hero1 from "../../assets/hero-bg2.jpg";
import hero2 from "../../assets/hero-bg3.jpg";
import hero3 from "../../assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("about-company");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      id: 1,
      bg: hero1,
      title: "Welcome to",
      highlight: "Right Power Cables",
      subtitle: "⚡ Your Trusted Partner in Power & Connectivity",
      stats: [
        { number: "100%", label: "Quality" },
        { number: "ISO", label: "Certified" },
        { number: "24/7", label: "Support" },
      ],
    },
    {
      id: 2,
      bg: hero2,
      title: "Powering",
      highlight: "Infrastructure Nationwide",
      subtitle: "High-quality cables for every industry need",
      stats: [
        { number: "BIS", label: "ISI Mark" },
        { number: "CE", label: "Marking" },
        { number: "IEC", label: "Standards" },
      ],
    },
    {
      id: 3,
      bg: hero3,
      title: "Innovation.",
      highlight: "Reliability. Trust.",
      subtitle: "Building stronger connections across the globe",
      stats: [
        { number: "Nationwide", label: "Presence" },
        { number: "Certified", label: "Assured" },
        { number: "Trusted", label: "Partner" },
      ],
    },
  ];

  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden text-white">
              {/* Background Image with Animation */}
              <img
                className="absolute top-0 left-0 w-full h-full object-cover -z-20 animate-pulse"
                src={slide.bg}
                alt={slide.highlight}
                style={{
                  animation: "subtleZoom 20s ease-in-out infinite alternate",
                }}
              />

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(244, 67, 54, 0.1) 100%)",
                }}
              ></div>

              {/* Content */}
              <div
                className="relative z-10 max-w-4xl px-5 py-10 md:px-20 md:py-10"
                style={{
                  animation: `fadeUp 1.2s ease-out`,
                }}
              >
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
                  <span
                    className="block"
                    style={{
                      animation: `slideIn 1s ease-out 0.5s both`,
                      textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {slide.title}
                  </span>
                  <span
                    className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent leading-[1.2] overflow-visible"
                    style={{
                      animation: `slideIn 1s ease-out 0.7s both`,
                    }}
                  >
                    {slide.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p
                  className="text-lg md:text-xl lg:text-2xl mb-10 flex items-center justify-center gap-2 md:gap-3"
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    animation: `fadeIn 1s ease-out 0.9s both`,
                  }}
                >
                  {slide.subtitle}
                </p>

                {/* Stats */}
                <div
                  className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 my-10"
                  style={{
                    animation: `slideUp 1s ease-out 1.1s both`,
                  }}
                >
                  {slide.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="text-center p-5 rounded-2xl bg-black/60 backdrop-blur-lg border border-white/20 transition-transform duration-300 hover:scale-105 w-48 md:w-auto"
                    >
                      <span className="block text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                        {s.number}
                      </span>
                      <span className="text-sm text-white/90">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper and Animations */}
      <style jsx>{`
        @keyframes subtleZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Swiper Pagination Customization */
        :global(.swiper-pagination-bullet) {
          background: #fff !important;
          opacity: 0.6;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #f44336 !important;
          opacity: 1;
        }

        /* Swiper Navigation Customization */
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: rgba(0, 0, 0, 0.6) !important;
          transition: color 0.3s ease;
          background: rgba(255, 255, 255, 0.8) !important;
          border-radius: 50% !important;
          width: 44px !important;
          height: 44px !important;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          color: #f44336 !important;
          background: rgba(255, 255, 255, 0.9) !important;
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 18px !important;
          font-weight: bold !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;