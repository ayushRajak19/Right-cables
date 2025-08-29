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
            <p>
              All our products strictly comply with <strong>ISI & ISO safety
              and quality standards</strong>, ensuring reliability and customer
              confidence. Each cable is tested under stringent conditions before
              it reaches the market.
            </p>
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
            <p>
              Manufactured with <strong>high-grade PVC, XLPE, and pure
              copper/aluminum</strong>, our cables guarantee durability, safety,
              and long service life. Designed to withstand extreme conditions
              while delivering consistent performance.
            </p>
          </li>

          <li className="why-item">
            <div className="why-icon">🚚</div>
            <h3>Nationwide Delivery</h3>
            <p>
              With a robust <strong>Pan-India logistics network</strong>, we
              ensure timely supply to every corner of the country. Our secured
              transportation guarantees safe handling and quick turnaround for
              urgent project needs.
            </p>
          </li>

          <li className="why-item">
            <div className="why-icon">₹</div>
            <h3>Competitive Pricing</h3>
            <p>
              Offering <strong>premium quality at affordable rates</strong>, we
              provide cost-effective solutions without compromising safety or
              reliability. Our pricing structure is designed to fit projects of
              every scale, from industries to infrastructure.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
