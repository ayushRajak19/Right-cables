import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// --- Images imports here (same as your code) ---
import AC01 from "../../assets/AC01.png";
import AC02 from "../../assets/AC02.jpg";
import AC03 from "../../assets/AC03.jpg";
import ABC01 from "../../assets/ABC01.png";
import ABC02 from "../../assets/ABC02.jpg";
import ABC03 from "../../assets/ABC03.jpg";
import HT01 from "../../assets/HT01.png";
import HT02 from "../../assets/HT02.jpg";
import HT03 from "../../assets/HT03.jpg";
import LT01 from "../../assets/LT01.png";
import LT02 from "../../assets/LT02.png";
import LT03 from "../../assets/LT03.png";
import AAAC01 from "../../assets/AAAC01.png";
import AAAC02 from "../../assets/AAAC02.png";
import AAAC03 from "../../assets/AAAC03.jpg";
import ACSR01 from "../../assets/ACSR01.jpg";
import ACSR02 from "../../assets/ACSR02.jpg";
import ACSR03 from "../../assets/ACSR03.jpg";
import HTLS01 from "../../assets/HTLS01.png";
import HTLS02 from "../../assets/HTLS02.png";
import HTLS03 from "../../assets/HTLS03.png";

const Products = () => {
  const location = useLocation();
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Expand products and scroll when hash is present
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.substring(1);
    const hiddenSections = ["lt-power", "ht-lt-abc", "armour-cable", "conductors"];

    if (hiddenSections.includes(sectionId)) {
      setShowAllProducts(true);

      const timer = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);

      return () => clearTimeout(timer);
    } else {
      requestAnimationFrame(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  // Product data
  const productSections = [
    {
      id: "ht-power",
      title: "HT Power Cables",
      description:
        "Comprehensive range of 11 KV and 33 KV cables up to 300 Sq mm for reliable power transmission.",
      images: [HT01, HT02, HT03],
    },
    {
      id: "lt-power",
      title: "LT Power Cables",
      description:
        "Complete range of XLPE and PVC insulated cables for residential, commercial applications.",
      images: [LT01, LT02, LT03],
    },
    {
      id: "armour-cable",
      title: "Armoured Cables",
      description:
        "XLPE and PVC Single/Multi Core Armoured cables conforming to IS 7098 & IS 1554 standards.",
      images: [AC01, AC02, AC03],
    },
    {
      id: "ht-lt-abc",
      title: "LT/Aerial Bunched Cables",
      description:
        "XLPE Insulated ABC with messenger wire, conforming to IS:14255 standards.",
      images: [ABC01, ABC02, ABC03],
    },
  ];

  const conductorTypes = [
    {
      title: "HTLS Conductors",
      desc: "High-Temperature Low-Sag conductors for efficient power transmission with superior thermal performance.",
      images: [HTLS01, HTLS02, HTLS03],
    },
    {
      title: "ACSR Conductors",
      desc: "Aluminum Conductor Steel Reinforced in Dog, Rabbit, Panther, and Weasel variants.",
      images: [ACSR01, ACSR02, ACSR03],
    },
    {
      title: "AAAC Conductors",
      desc: "All Aluminum Alloy Conductors in Panther, Rabbit, Dog, and Weasel configurations.",
      images: [AAAC01, AAAC02, AAAC03],
    },
  ];

  return (
    <div className="bg-[#000110] min-h-screen text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* HT Power Cables - Always visible */}
        <section id="ht-power" className="mb-12">
          <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/30">
            <h2 className="text-3xl font-bold text-rose-400 text-center mb-4">
              {productSections[0].title}
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              {productSections[0].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {productSections[0].images.map((src, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-slate-700/40 rounded-xl overflow-hidden border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300">
                    <div className="h-52 overflow-hidden bg-white/5 rounded-lg flex items-center justify-center">
                      <img
                        src={src}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* View More Button */}
        {!showAllProducts && (
          <div className="text-center mb-12 sm:mb-16">
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View More Products →
            </button>
          </div>
        )}

        {/* Additional Products */}
        {showAllProducts && (
          <>
            {productSections.slice(1).map((section) => (
              <section key={section.id} id={section.id} className="mb-12">
                <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/30">
                  <h2 className="text-3xl font-bold text-rose-400 text-center mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {section.images.map((src, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="bg-slate-700/40 rounded-xl overflow-hidden border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300">
                          <div className="h-52 overflow-hidden bg-white/5 rounded-lg flex items-center justify-center">
                            <img
                              src={src}
                              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            {/* Conductors Section */}
            <section id="conductors" className="mb-12">
              <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/30">
                <h2 className="text-3xl font-bold text-rose-400 text-center mb-12">
                  Conductors
                </h2>
                {conductorTypes.map((conductor, i) => (
                  <div
                    key={i}
                    className={`${i > 0 ? "mt-12 pt-8 border-t border-slate-700/40" : ""}`}
                  >
                    <h3 className="text-2xl font-semibold text-yellow-400 text-center mb-3">
                      {conductor.title}
                    </h3>
                    <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
                      {conductor.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {conductor.images.map((src, num) => (
                        <div key={num} className="group cursor-pointer">
                          <div className="bg-slate-700/40 rounded-xl overflow-hidden border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300">
                            <div className="h-52 overflow-hidden bg-white/5 rounded-lg flex items-center justify-center">
                              <img
                                src={src}
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
