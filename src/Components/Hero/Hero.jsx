import React from "react";
import bgVideo from "../../assets/hero-bg.mp4"; 
import "./Hero.css";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("about-company"); // 👈 change this ID to your target section
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Powering the Future with Right Power Cables</h1>
        <p>High-quality cables for every industry need</p>
        <button className="btn-hero" onClick={scrollToSection}>
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
