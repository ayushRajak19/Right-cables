import React, { useState, useEffect } from "react";

// ✅ Correct imports from src/assets/
import page3 from "../../assets/page3.jpg";
import page4 from "../../assets/page4.jpg";
import page5 from "../../assets/page5.jpg";
import page6 from "../../assets/page6.jpg";
import page7 from "../../assets/page7.jpg";
import page8 from "../../assets/page8.jpg";
import page9 from "../../assets/page9.jpg";
import page10 from "../../assets/page10.jpg";
import page11 from "../../assets/page11.jpg";
import page12 from "../../assets/page12.jpg";

// ✅ Import your catalogue PDF (place inside src/assets/)
import catalog from "../../assets/catalog.pdf";

const pages = [
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
];

const Catalogue = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Allow closing with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0c18] px-5 py-10 text-center">
      {/* Title */}
      <h1 className="mb-5 text-[2.2rem] font-bold text-red-500">
        Product Catalogue
      </h1>

      {/* Intro text */}
      <p className="mx-auto mb-10 max-w-3xl text-[1.1rem] leading-relaxed text-gray-300">
        Explore our complete range of high-quality cables and conductors
        designed to meet diverse industrial, commercial, and residential needs.
        Each page of our catalogue highlights product specifications, features,
        and applications, helping you find the right solution for your power and
        connectivity requirements.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {pages.map((src, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#111827] p-3 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Catalogue Page ${i + 1}`}
              loading="lazy"
              className="w-full rounded-md"
            />
            <p className="mt-2 text-sm text-gray-400">Page {i + 1}</p>
          </div>
        ))}
      </div>

      {/* ✅ Download Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Download Full Catalogue
        </h2>
        <a
          href={catalog}
          download="RightPowerCatalogue.pdf"
          className="inline-block rounded-lg bg-red-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-red-600"
        >
          📥 Download PDF
        </a>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)} // click outside closes
        >
          <div
            className="relative max-w-5xl max-h-[80vh] bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Catalogue Enlarged"
              className="max-h-[90vh] w-auto rounded-lg shadow-lg"
            />

            {/* Close Button */}
            <button
              type="button"
              className="absolute top-2 right-2 z-50 rounded-full bg-white px-3 py-1 text-black shadow-md hover:bg-gray-200 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
