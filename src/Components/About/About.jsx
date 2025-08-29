import React, { useEffect, useRef, useCallback } from "react";
import "./About.css";

const CATALOG_URL = `${import.meta.env.BASE_URL}catalog.pdf`;

/* Inline icons */
const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
);

const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      fill="currentColor"
    />
  </svg>
);

const WhyChooseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="currentColor"
    />
  </svg>
);

const About = () => {
  const observerRef = useRef(null);

  const initializeScrollAnimation = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const elements = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            setTimeout(() => observerRef.current?.unobserve(entry.target), 800);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-20px 0px -20px 0px" }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
  }, []);

  useEffect(() => {
    const t = setTimeout(initializeScrollAnimation, 100);
    return () => {
      clearTimeout(t);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [initializeScrollAnimation]);

  useEffect(() => {
    let rId;
    const handleResize = () => {
      if (rId) clearTimeout(rId);
      rId = setTimeout(() => {
        const pending = document.querySelectorAll("[data-reveal]:not(.in)");
        if (pending.length) initializeScrollAnimation();
      }, 250);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rId) clearTimeout(rId);
    };
  }, [initializeScrollAnimation]);

  return (
    <section id="about-company" className="about" aria-labelledby="about-title">
      <div className="about__container">
        <h2 id="about-title" className="about__title" data-reveal="y">
          About Us
        </h2>

        <p className="about__intro" data-reveal="y">
          Right Power Cables Pvt. Ltd. is a trusted manufacturer of premium
          wires and cables for power utilities, industries, and infrastructure
          projects. With a strict focus on safety, reliability, and innovation,
          we deliver products crafted from the finest raw materials under
          rigorous quality control.
        </p>

        <div className="about__grid" role="region" aria-label="Company information cards">
          <article className="about__card" data-reveal="y" tabIndex={0}>
            <div className="about__card-header">
              <div className="about__card-icon" aria-hidden="true">
                <MissionIcon />
              </div>
              <h3>Our Mission</h3>
            </div>
            <ul role="list">
              <li>Benchmark excellence in wire &amp; cable solutions worldwide.</li>
              <li>Commitment to safety, sustainability &amp; innovation.</li>
              <li>Deliver products tailored to customer needs.</li>
              <li>Adapt to evolving market demands.</li>
            </ul>
          </article>

          <article className="about__card" data-reveal="y" tabIndex={0}>
            <div className="about__card-header">
              <div className="about__card-icon" aria-hidden="true">
                <VisionIcon />
              </div>
              <h3>Our Vision</h3>
            </div>
            <ul role="list">
              <li>Be the foremost innovator in conductor &amp; cable manufacturing.</li>
              <li>Unwavering focus on quality and sustainability.</li>
              <li>Provide cutting-edge, efficient, and safe solutions.</li>
              <li>Drive transformative progress across the industry.</li>
            </ul>
          </article>

          <article className="about__card" data-reveal="y" tabIndex={0}>
            <div className="about__card-header">
              <div className="about__card-icon" aria-hidden="true">
                <WhyChooseIcon />
              </div>
              <h3>Our Strengths</h3>
            </div>
            <ul role="list">
              <li>ISO-certified facilities</li>
              <li>Strong R&amp;D and testing labs</li>
              <li>Pan-India distribution network</li>
              <li>Approved by major utilities</li>
            </ul>
          </article>
        </div>

        {/* ✅ Fixed Catalogue Button */}
        <div className="catalog-cta" data-reveal="y">
          <h3 className="catalog-text">For more information</h3>
          <a
            className="btn-download"
            href={CATALOG_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download company catalogue PDF"
          >
            📕 Download Catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
