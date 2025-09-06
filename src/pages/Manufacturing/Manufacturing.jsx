import React, { useState } from "react";

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
    <section id="manufacturing" className="bg-[#000110] px-[2.5vw] py-8 md:py-12 lg:py-16">
      <div className="w-[90%] max-w-[1520px] mx-auto">
        {/* Header */}
        <header className="text-center relative">
          <h2 className="text-[clamp(28px,3.2vw,40px)] font-bold leading-tight text-slate-100 mb-6 relative inline-block">
            Manufacturing
            <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 h-1 rounded bg-gradient-to-r from-orange-500 via-red-500 to-sky-500 opacity-85"></span>
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            From conductor drawing to final QC—glimpses of our shopfloor and processes.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {photos.map(({ src, alt }, i) => (
            <button
              key={i}
              onClick={() => setLightbox({ open: true, src, alt })}
              aria-label={`Open image: ${alt}`}
              className="relative w-full aspect-[12/9] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-2xl cursor-zoom-in transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(0,0,0,0.5)] hover:border-red-400/40"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 saturate-[1.05] contrast-[1.02] hover:scale-105"
              />
              <span className="absolute left-3 bottom-3 pl-6 pr-3 py-1.5 text-[12.5px] text-slate-200 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                {alt}
              </span>
            </button>
          ))}
        </div>

        {/* Location */}
        <div className="mt-8 mb-4 grid grid-cols-[34px_1fr] gap-3 items-start p-4 rounded-xl border border-white/10 shadow-2xl bg-gradient-to-br from-sky-500/20 to-red-500/15">
          <div className="text-red-500">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
          </div>
          <div>
            <strong className="block text-slate-100 mb-1">Plant Location</strong>
            <p className="text-slate-300">{PLANT_ADDRESS}</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-semibold text-rose-600 hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          onClick={() => setLightbox({ open: false, src: null, alt: "" })}
          className="fixed inset-0 bg-black/85 z-50 grid place-items-center cursor-zoom-out"
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[92vw] max-h-[90vh] rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          />
        </div>
      )}
    </section>
  );
}
