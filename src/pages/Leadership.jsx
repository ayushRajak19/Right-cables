import React from "react";
import "./Leadership.css";

const Leadership = () => {
  return (
    <section className="leadership-section">
      <div className="container">
        <h1 className="title">Our Leadership Team</h1>
        <p className="subtitle">
          Meet the visionary guiding Right Power Cables towards excellence and growth.
        </p>

        <div className="leader-card">
          {/* Image Placeholder */}
          <div className="leader-image">
            <img
              src="/owner.jpg" // 👉 place an image in public/owner.jpg
              alt="Mr. Mukesh"
            />
          </div>

          {/* Content */}
          <div className="leader-content">
            <h2>Mr. Mukesh</h2>
            <h4>Managing Director & CEO</h4>
            <p>
              Every successful manufacturing company is built on strength,
              resilience, and determination. Mr. Mukesh’s journey reflects this
              spirit — starting from humble beginnings, overcoming challenges of
              rising raw material costs, competition, and the struggle to build
              trust in the industry.
            </p>
            <p>
              With vision and dedication, he transformed Right Power Cables into
              a trusted name for quality and innovation. His leadership is not
              only about building a business but about creating opportunities,
              ensuring customer satisfaction, and setting new benchmarks in the
              manufacturing sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
