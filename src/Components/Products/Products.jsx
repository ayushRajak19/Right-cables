// src/Components/Products/Products.jsx
import React, { useEffect, useRef, useCallback, useState } from "react";
import "./Product.css";

/* ===== SINGLE, CLEAN IMAGE IMPORT BLOCK ===== */
import aaacImg from "../../assets/AAAC.jpg";
import acsrImg from "../../assets/ACSR.jpg";
import acsImg from "../../assets/ACS.png";
import al59Img from "../../assets/al-59-conductor.jpg";
import aaImg from "../../assets/aa-conductor.jpg";
import htlsImg from "../../assets/HTLS-Conductor.jpg";
import mvcImg from "../../assets/MVC.jpg";
import htabImg from "../../assets/ht-ab-cables.png";

import ltImg from "../../assets/LT.png";
import ltxlpeImg from "../../assets/lt-xlpe.jpg";
import ltpvcImg from "../../assets/LTPVC.png";
import htImg from "../../assets/HT.jpg";
import armouredImg from "../../assets/armouredcables.png";

import abcImg from "../../assets/ABC.jpg";
import solarImg from "../../assets/solar-dc-cable.png";
import submersibleImg from "../../assets/submersible.jpg";
import connectingImg from "../../assets/connecting.jpg";
import signalImg from "../../assets/signal.png";

/* ===== PRODUCT DATA ===== */
const productsData = [
  // Overhead Conductors
  {
    id: "htls",
    title: "HTLS Conductor",
    subtitle: "High Temperature Low Sag",
    description: "Special conductors for high capacity transmission with low sag.",
    features: ["High current capacity", "Reduced sag", "Long-span performance"],
    image: htlsImg,
    category: "Overhead Lines",
    voltage: "Up to 400kV",
  },
  {
    id: "acsr",
    title: "ACSR Conductor",
    subtitle: "Aluminium Conductor Steel Reinforced",
    description: "Aluminium conductor steel reinforced for long-span overhead lines.",
    features: ["High tensile strength", "Reliable performance", "Wide usage"],
    image: acsrImg,
    category: "Overhead Lines",
    voltage: "Up to 400kV",
  },
  {
    id: "aaac",
    title: "AAAC Conductor",
    subtitle: "All Aluminium Alloy Conductor",
    description: "All Aluminium Alloy Conductor with high strength and conductivity.",
    features: ["Lightweight", "Corrosion resistant", "Efficient transmission"],
    image: aaacImg,
    category: "Overhead Lines",
    voltage: "Up to 33kV",
  },
  {
    id: "acs",
    title: "ACS Conductor",
    subtitle: "Aluminium Conductor Steel Core",
    description: "Aluminium conductor with a steel core for extra tensile strength.",
    features: ["Strong mechanical strength", "Weather resistant", "Reliable sag control"],
    image: acsImg,
    category: "Overhead Lines",
    voltage: "Up to 132kV",
  },
  {
    id: "al59",
    title: "AL 59 Conductor",
    subtitle: "Special Aluminium Alloy",
    description: "Lightweight aluminium conductor with high conductivity.",
    features: ["Efficient transmission", "Good corrosion resistance"],
    image: al59Img,
    category: "Overhead Lines",
    voltage: "Up to 132kV",
  },
  {
    id: "aa",
    title: "AA Conductor",
    subtitle: "All Aluminium Conductor",
    description: "Standard all aluminium conductor for transmission and distribution.",
    features: ["Economical", "High conductivity", "Lightweight"],
    image: aaImg,
    category: "Overhead Lines",
    voltage: "Up to 132kV",
  },
  {
    id: "mvc",
    title: "MVCC Conductor",
    subtitle: "Medium Voltage Covered Conductor",
    description: "Covered conductor for improved safety and reduced vegetation faults.",
    features: ["Improved insulation", "Enhanced safety", "Low maintenance"],
    image: mvcImg,
    category: "Overhead Lines",
    voltage: "Up to 33kV",
  },
  {
    id: "htab",
    title: "HT/LT AB Cable",
    subtitle: "Aerial Bunched Cable",
    description: "Insulated aerial bunched cables for safe overhead distribution.",
    features: ["Reduced power loss", "Weather resistant", "Easy installation"],
    image: htabImg,
    category: "Distribution",
    voltage: "Up to 33kV",
  },

  // Power Cables
  {
    id: "lt",
    title: "LT Cable",
    subtitle: "Low Tension Power Cable",
    description: "Low Tension cables for reliable power distribution.",
    features: ["Reliable distribution", "Flexible installation", "Cost-effective"],
    image: ltImg,
    category: "Distribution",
    voltage: "≤1.1kV",
  },
  {
    id: "ltxlpe",
    title: "LT XLPE Cable",
    subtitle: "Cross Linked Polyethylene",
    description: "LT XLPE power cables with superior insulation properties.",
    features: ["High insulation resistance", "Long life", "Moisture resistant"],
    image: ltxlpeImg,
    category: "Power Cables",
    voltage: "Up to 1.1kV",
  },
  {
    id: "ltpvc",
    title: "LT PVC Cable",
    subtitle: "PVC Insulated Low Tension",
    description: "PVC insulated LT cables for general power distribution.",
    features: ["Durable insulation", "Flexible", "Reliable performance"],
    image: ltpvcImg,
    category: "Power Cables",
    voltage: "Up to 1.1kV",
  },
  {
    id: "ht",
    title: "HT Cable",
    subtitle: "High Tension Cable",
    description: "High Tension power cables for medium and high voltage networks.",
    features: ["High capacity", "Long life", "Standard compliance"],
    image: htImg,
    category: "Power Cables",
    voltage: "Up to 33kV",
  },
  {
    id: "armoured",
    title: "Armoured Cable",
    subtitle: "Mechanically Protected",
    description: "Cables with armouring for underground and industrial applications.",
    features: ["Mechanical protection", "Underground installation", "Industrial grade"],
    image: armouredImg,
    category: "Power Cables",
    voltage: "Up to 33kV",
  },

  // Specialty / Distribution
  {
    id: "abc",
    title: "ABC Cable",
    subtitle: "Aerial Bunched Cable",
    description: "Insulated aerial bundled cable for safer distribution.",
    features: ["Safer distribution", "Reduced losses", "Weather resistant"],
    image: abcImg,
    category: "Distribution",
    voltage: "Up to 33kV",
  },
  {
    id: "solar",
    title: "DC / Solar Cable",
    subtitle: "Solar Energy Applications",
    description: "Cables designed for photovoltaic arrays and DC transmission.",
    features: ["UV resistant", "Halogen-free options", "Durable"],
    image: solarImg,
    category: "Specialty",
    voltage: "Up to 3.3kV",
  },
  {
    id: "submersible",
    title: "Submersible Cable",
    subtitle: "Waterproof Power Cable",
    description: "Water-resistant cables for submersible pump and underwater use.",
    features: ["Waterproof", "Durable sheath", "Reliable under pressure"],
    image: submersibleImg,
    category: "Specialty",
    voltage: "Up to 1.1kV",
  },
  {
    id: "connecting",
    title: "Connecting Cable",
    subtitle: "Flexible Power Cable",
    description: "Flexible connecting cables for industrial connections.",
    features: ["Flexible conductors", "Durable", "Easy termination"],
    image: connectingImg,
    category: "Specialty",
    voltage: "Low Voltage",
  },
  {
    id: "signal",
    title: "Signalling Cable",
    subtitle: "Instrumentation / Control",
    description: "Cables for signalling, instrumentation and low-voltage control.",
    features: ["Low noise", "Shielding options", "Reliable data/control"],
    image: signalImg,
    category: "Specialty",
    voltage: "Control Voltage",
  },
];

/* ===== FILTER ===== */
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="products__filter" role="tablist" aria-label="Product categories">
    {categories.map((category) => (
      <button
        key={category}
        className={`products__filter-btn ${activeCategory === category ? "active" : ""}`}
        onClick={() => onCategoryChange(category)}
        role="tab"
        aria-selected={activeCategory === category}
        aria-controls="products-grid"
      >
        {category}
      </button>
    ))}
  </div>
);

/* ===== CARD ===== */
const ProductCard = ({ product, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      id={product.id} /* ← give each card an anchor target */
      className="products__card"
      data-reveal="y"
      style={{ "--card-index": index }}
      tabIndex={0}
      aria-labelledby={`product-title-${product.id}`}
    >
      <div className="products__card-image-wrapper">
        <div className="products__card-category">{product.category}</div>
        {/* REMOVED: <div className="products__card-voltage">{product.voltage}</div> */}

        {!imageError ? (
          <img
            src={product.image}
            alt={`${product.title} - ${product.subtitle}`}
            className={`products__card-image ${imageLoaded ? "loaded" : ""}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="products__card-image-fallback">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
                fill="currentColor"
              />
            </svg>
            <span>Image not available</span>
          </div>
        )}
      </div>

      <div className="products__card-content">
        <div className="products__card-header">
          <h3 id={`product-title-${product.id}`} className="products__card-title">
            {product.title}
          </h3>
          <p className="products__card-subtitle">{product.subtitle}</p>
        </div>

        <p className="products__card-description">{product.description}</p>

        <ul className="products__card-features" role="list">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

/* ===== MAIN COMPONENT ===== */
const Products = () => {
  const observerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const initializeScrollAnimation = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const elements = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            setTimeout(() => observerRef.current?.unobserve(entry.target), 1200);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-30px 0px -30px 0px" }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
  }, []);

  const handleCategoryChange = useCallback(
    (category) => {
      setActiveCategory(category);
      setFilteredProducts(category === "All" ? productsData : productsData.filter((p) => p.category === category));

      setTimeout(() => {
        document.querySelectorAll(".products__card").forEach((c) => c.classList.remove("in"));
        setTimeout(() => initializeScrollAnimation(), 50);
      }, 100);
    },
    [initializeScrollAnimation]
  );

  useEffect(() => {
    const t = setTimeout(initializeScrollAnimation, 100);
    return () => {
      clearTimeout(t);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [initializeScrollAnimation]);

  useEffect(() => {
    let r;
    const onResize = () => {
      clearTimeout(r);
      r = setTimeout(() => {
        const els = document.querySelectorAll("[data-reveal]:not(.in)");
        if (els.length > 0) initializeScrollAnimation();
      }, 250);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(r);
    };
  }, [initializeScrollAnimation]);

  /* === NEW: respond to #hash (e.g., #aaac) === */
  useEffect(() => {
    const scrollWithOffset = (elId) => {
      const el = document.getElementById(elId);
      if (!el) return;
      const nav = document.querySelector('.navbar');
      const offset = (nav?.offsetHeight || 88) + 16;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const handleHashIntent = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) return;

      const prod = productsData.find(p => p.id === id);
      if (!prod) return;

      // Ensure the product card exists in the DOM
      if (activeCategory !== "All" && activeCategory !== prod.category) {
        setActiveCategory(prod.category);
        setFilteredProducts(productsData.filter(p => p.category === prod.category));
        setTimeout(() => scrollWithOffset(id), 60);
      } else {
        // already visible (All or same category)
        const isRendered = (activeCategory === "All") || filteredProducts.some(p => p.id === id);
        if (!isRendered) {
          setFilteredProducts(productsData.filter(p => p.category === prod.category));
          setTimeout(() => scrollWithOffset(id), 60);
        } else {
          scrollWithOffset(id);
        }
      }
    };

    handleHashIntent(); // on mount
    window.addEventListener('hashchange', handleHashIntent);
    return () => window.removeEventListener('hashchange', handleHashIntent);
  }, [activeCategory, filteredProducts]);

  return (
    <section className="products" id="products" aria-labelledby="products-title">
      <div className="products__container">
        <header className="products__header">
          <h2 id="products-title" className="products__title" data-reveal="y">
            Our Products
          </h2>
          <p className="products__subtitle" data-reveal="y">
            Comprehensive range of premium cables and conductors for every power
            transmission and distribution need
          </p>
        </header>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div
          className="products__grid"
          id="products-grid"
          role="region"
          aria-label={`${activeCategory} products`}
          aria-live="polite"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="products__empty" data-reveal="y">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;