import React from "react";
import "./Certification.css"; // ✅ Make sure this file exists in the same folder

const Certification = () => {
  const certifications = [
    {
      id: 1,
      title: "BIS (ISI Mark)",
      subtitle: "Bureau of Indian Standards",
      description:
        "ISI mark certification ensures our cables meet Indian safety standards and quality requirements for electrical products.",
      features: [
        "Product safety assurance",
        "Quality compliance",
        "Market acceptance",
        "Consumer trust",
      ],
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description:
        "International standard ensuring consistent quality in our manufacturing processes and customer service delivery.",
      features: [
        "Customer satisfaction focus",
        "Continuous improvement",
        "Process-based approach",
        "Leadership engagement",
      ],
    },
  ];

  // ✅ Removed the "15+ Years Experience" stat
  const stats = [
    { number: "6+", label: "Major Certifications" },
    { number: "100%", label: "Compliance Rate" },
    { number: "India", label: "National Presence" }, // ✅ updated here
  ];

  return (
    <div className="cert-page">
      {/* Hero Section */}
      <div className="cert-hero">
        <h1>Our Certifications</h1>
        <p>
          Right Power Cables holds prestigious certifications including BIS (ISI
          Mark), ISO 9001:2015, CE Marking, IEC Standards, GeM Registration,
          and Startup India recognition, ensuring world-class quality and
          reliability.
        </p>
      </div>

      {/* Stats Section */}
      <div className="cert-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="badge">Certified ✓</div>
            <h3>{cert.title}</h3>
            <p className="subtitle">{cert.subtitle}</p>
            <p className="desc">{cert.description}</p>
            <h4>Key Benefits:</h4>
            <ul>
              {cert.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
