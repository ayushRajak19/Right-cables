import React, { useEffect, useRef, useCallback, memo } from "react";
import companyImage from "../../assets/company.jpg";
import companyImage2 from "../../assets/company2.jpg";

/* Memoized inline icons with optimized SVG */
const MissionIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="will-change-auto"
  >
    <path
      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
));

const VisionIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="will-change-auto"
  >
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      fill="currentColor"
    />
  </svg>
));

const WhyChooseIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="will-change-auto"
  >
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
    />
  </svg>
));

/* Memoized Card Component */
const InfoCard = memo(({ icon: Icon, title, items, className = "" }) => (
  <article
    className={`bg-[#1a1d2e] rounded-2xl p-8 border border-gray-700 shadow-md hover:shadow-2xl transition-transform hover:-translate-y-2 will-change-transform ${className}`}
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-14 h-14 bg-red-100/10 border border-red-300/30 rounded-lg text-red-400">
        <Icon />
      </div>
      <h3 className="font-bold text-red-400 text-xl">{title}</h3>
    </div>
    <ul className="text-gray-300 text-base space-y-3">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </article>
));

/* Memoized Image Component */
const CompanyImage = memo(({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-40 sm:h-48 object-cover rounded-lg shadow-md border border-gray-700 hover:border-red-300 transition-colors duration-300 will-change-auto ${className}`}
    loading="lazy"
    decoding="async"
  />
));

const About = () => {
  const observerRef = useRef(null);
  const elementsRef = useRef(new Set());

  // Optimized scroll animation with better performance
  const initializeScrollAnimation = useCallback(() => {
    // Disconnect existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const elements = document.querySelectorAll("[data-reveal]:not(.in)");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    // Use passive observer with optimized settings
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            entry.target.classList.add("in");
            // Unobserve immediately after animation starts
            observerRef.current?.unobserve(entry.target);
            elementsRef.current.delete(entry.target);
          }
        });
      },
      {
        threshold: [0.1, 0.2],
        rootMargin: "-20px 0px -20px 0px",
        // Use passive mode for better performance
      }
    );

    // Track elements and observe them
    elements.forEach((el) => {
      elementsRef.current.add(el);
      observerRef.current?.observe(el);
    });
  }, []);

  // Optimized initialization
  useEffect(() => {
    const initTimer = requestAnimationFrame(() => {
      initializeScrollAnimation();
    });

    return () => {
      cancelAnimationFrame(initTimer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      elementsRef.current.clear();
    };
  }, [initializeScrollAnimation]);

  // Throttled resize handler
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      if (resizeTimer) {
        cancelAnimationFrame(resizeTimer);
      }

      resizeTimer = requestAnimationFrame(() => {
        const pending = document.querySelectorAll("[data-reveal]:not(.in)");
        if (pending.length > 0) {
          initializeScrollAnimation();
        }
      });
    };

    const throttledResize = (e) => {
      if (resizeTimer) return;
      handleResize();
    };

    window.addEventListener("resize", throttledResize, { passive: true });
    return () => {
      window.removeEventListener("resize", throttledResize);
      if (resizeTimer) {
        cancelAnimationFrame(resizeTimer);
      }
    };
  }, [initializeScrollAnimation]);

  // Memoized card data with equal content length
  const cardData = [
    {
      icon: MissionIcon,
      title: "Our Mission",
      items: [
        "Benchmark excellence in wire & cable solutions worldwide",
        "Commitment to safety, sustainability & innovation",
        "Deliver products tailored to customer needs",
        "Adapt to evolving market demands",
      ],
    },
    {
      icon: VisionIcon,
      title: "Our Vision",
      items: [
        "Be the foremost innovator in conductor & cable manufacturing",
        "Unwavering focus on quality and sustainability",
        "Provide cutting-edge, efficient, and safe solutions",
      ],
    },
    {
      icon: WhyChooseIcon,
      title: "Our Strengths",
      items: [
        "ISO-certified facilities with advanced technology",
        "Strong R&D and testing labs",
        "Pan-India distribution network coverage",
        "Approved by major utilities and industries",
      ],
    },
  ];

  return (
    <>
      {/* Optimized CSS with hardware acceleration */}
      <style jsx>{`
        [data-reveal] {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }

        [data-reveal].in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            will-change: auto !important;
          }
        }

        /* Performance optimizations */
        .will-change-auto {
          will-change: auto;
        }

        .will-change-transform {
          will-change: transform;
        }

        /* Optimize background pattern rendering */
        .bg-pattern {
          background-image: radial-gradient(
            circle at 50% 50%,
            rgba(244, 67, 54, 0.015) 0%,
            transparent 70%
          );
          contain: layout paint;
        }

        /* GPU acceleration for cards */
        .card-hover {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .card-hover:hover {
          transform: translate3d(0, -8px, 0);
        }
      `}</style>

      <section
        id="about-company"
        className="relative bg-[#000110] pt-1 pb-12"
        aria-labelledby="about-title"
      >
        {/* Optimized background pattern */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-pattern" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2
            id="about-title"
            className="text-center font-extrabold text-white mb-6 relative leading-tight"
            style={{ fontSize: "clamp(32px,4vw,48px)", lineHeight: "1.1" }}
            data-reveal="y"
          >
            About Us
            <div
              className="absolute left-1/2 transform -translate-x-1/2 opacity-80"
              style={{
                bottom: "-8px",
                width: "100px",
                height: "4px",
                background:
                  "linear-gradient(135deg, #ff6a00 0%, #f44336 50%, #0099ff 100%)",
                borderRadius: "2px",
              }}
            />
          </h2>

          {/* Intro */}
          <p
            className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed mb-12 font-normal"
            style={{ fontSize: "clamp(16px,1.3vw,18px)" }}
            data-reveal="y"
          >
            Right Power Cables Pvt. Ltd. is a trusted manufacturer of premium
            wires and cables for power utilities, industries, and infrastructure
            projects. With a strict focus on safety, reliability, and
            innovation, we deliver products crafted from the finest raw
            materials under rigorous quality control.
          </p>

          {/* Company Info */}
          <div
            className="flex flex-col lg:flex-row items-start gap-10 my-10"
            data-reveal="y"
          >
            {/* Text */}
            <div className="flex-1">
              <h3
                className="text-red-500 font-bold mb-6"
                style={{ fontSize: "clamp(24px,3vw,34px)" }}
              >
                Welcome to Right Power Cables
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5 text-justify">
                Right Power Cables is an ISO 9001:2015, BIS Certified, and CE
                approved company, engaged in the design and manufacturing of
                electrical Wires, Cables, and Conductors.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5 text-justify">
                With advanced manufacturing facilities strategically located in
                India, we cover the entire value chain of the Wire and Cables
                industry. Our offerings cater to sectors such as Railways, Oil &
                Gas, Petrochemical, Defence, Telecom, Power Generation, EPC
                Contractors, Infrastructure, Cement, Solar, and Heavy
                Industries.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5 text-justify">
                We are committed to innovation, reliability, and quality –
                ensuring products that meet international standards while
                delivering maximum customer satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5 text-justify">
                We don’t just manufacture cables — we provide end-to-end
                solutions that power industries, energize infrastructure, and
                connect communities. By adhering to global benchmarks and
                adopting sustainable practices, we ensure that every product we
                deliver stands for durability, performance, and customer
                confidence.
              </p>
            </div>

            {/* Optimized Images */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
              <CompanyImage
                src={companyImage}
                alt="Right Power Cables Factory"
              />
              <CompanyImage
                src={companyImage2}
                alt="Right Power Cables Manufacturing"
              />
            </div>
          </div>

          {/* Optimized Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {cardData.map((card, index) => (
              <div key={card.title} data-reveal="y">
                <InfoCard
                  icon={card.icon}
                  title={card.title}
                  items={card.items}
                  className="card-hover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(About);
