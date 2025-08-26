import React, { useState } from "react";
import "./Manufacturing.css";

import m1 from "../../assets/manufacturing1.jpg";
import m2 from "../../assets/manufacturing2.jpg";
import m3 from "../../assets/manufacturing3.jpg";

const PLANT_ADDRESS =
  "Khasra No. 126, Jahota Road, Near Tatiyawas Toll Plaza, Rampura Dabri, Jaipur (Raj.) 303704";

export default function Manufacturing() {
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  const photos = [
    { src: m1, alt: "Conductor drawing line" },
    { src: m2, alt: "Armouring & laying machines" },
    { src: m3, alt: "Finished cable testing shopfloor" },
  ];

  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(PLANT_ADDRESS);

  return (
    <section id="manufacturing" className="manufacturing">
      <div className="container">
        <header className="mfg-header">
          <h2>Manufacturing</h2>
          <p className="subtitle">
            From conductor drawing to final QC—glimpses of our shopfloor and processes.
          </p>
        </header>

        <div className="mfg-grid">
          {photos.map(({ src, alt }, i) => (
            <button
              key={i}
              className="mfg-card"
              onClick={() => setLightbox({ open: true, src, alt })}
              aria-label={`Open image: ${alt}`}
            >
              <img src={src} alt={alt} loading="lazy" />
              <span className="mfg-caption">{alt}</span>
            </button>
          ))}
        </div>

        <div className="mfg-location">
          <div className="mfg-pin" aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="mfg-address">
            <strong>Plant Location</strong>
            <p>{PLANT_ADDRESS}</p>
            <a className="mfg-directions" href={mapsHref} target="_blank" rel="noreferrer">
              Get Directions →
            </a>
          </div>
        </div>

        {/* remove this block if you don't want an embedded map */}

      </div>

      {lightbox.open && (
        <div
          className="mfg-lightbox"
          onClick={() => setLightbox({ open: false, src: null, alt: "" })}
        >
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </section>
  );
}
