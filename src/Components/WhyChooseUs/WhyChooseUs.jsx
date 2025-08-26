import React from "react";
import "./WhyChooseUs.css";
import isoCert from "../../assets/ISO.png"; // import certificate image

const WhyChooseUs = () => {
  return (
    <section id="why" className="why-section">
      <div className="why-container">
        <h2 className="why-title">WHY CHOOSE US</h2>

        <ul className="why-grid">
          <li className="why-item">
            <div className="why-icon">🏅</div>
            <h3>ISI & ISO Certified</h3>
            <p>All cables comply with ISI & ISO safety and quality standards.</p>
            <a
              href={isoCert}
              target="_blank"
              rel="noopener noreferrer"
              className="view-link"
            >
              👁️ View Certificate
            </a>
          </li>

          <li className="why-item">
            <div className="why-icon">🛡️</div>
            <h3>Durable & Safe Materials</h3>
            <p>High-grade PVC, XLPE and copper/aluminum for long-term reliability.</p>
          </li>

          <li className="why-item">
            <div className="why-icon">🚚</div>
            <h3>Nationwide Delivery</h3>
            <p>Pan-India supply with on-time, secured logistics.</p>
          </li>

          <li className="why-item">
            <div className="why-icon">₹</div>
            <h3>Competitive Pricing</h3>
            <p>Premium quality at affordable rates to fit every budget.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
