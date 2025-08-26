import React from "react";
import bgVideo from "../../assets/hero-bg.mp4"; // ✅ ensure correct path
import "./Hero.css";

const Hero = () => {
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
        <button className="btn-hero">Explore More RPC</button>
      </div>
    </section>
  );
};

export default Hero;
