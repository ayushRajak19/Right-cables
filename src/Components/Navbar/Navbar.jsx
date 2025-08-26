import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  // close dropdowns on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // ✅ helper to scroll to section without showing hash
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // clean URL (remove hash)
    window.history.replaceState(null, "", window.location.pathname);
    // close menus
    setOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo links to top */}
        <button className="navbar-logo" onClick={() => scrollToId("home")}>
          <img src={logo} alt="Right Cables logo" />
        </button>

        {/* Mobile hamburger */}
        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Nav links */}
        <ul className={`navbar-links ${open ? "show" : ""}`}>
          <li><button onClick={() => scrollToId("home")}>Home</button></li>

          {/* About dropdown */}
          <li className="dropdown" ref={aboutRef}>
            <button
              className="dropdown-trigger"
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setProductsOpen(false);
              }}
            >
              About us
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
              <li><button onClick={() => scrollToId("about-company")}>About Company</button></li>
              <li><Link to="/certification" onClick={() => setOpen(false)}>Certification</Link></li>
              <li><Link to="/leadership" onClick={() => setOpen(false)}>Leadership</Link></li>
            </ul>
          </li>

          <li><button onClick={() => scrollToId("manufacturing")}>Manufacturing</button></li>

          {/* Products dropdown */}
          <li className="dropdown" ref={productsRef}>
            <button
              className="dropdown-trigger"
              onClick={() => {
                setProductsOpen(!productsOpen);
                setAboutOpen(false);
              }}
            >
              Products
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`dropdown-menu products-dropdown ${productsOpen ? "show" : ""}`}>
              <li className="dropdown-category">
                <span className="category-title">Overhead Lines</span>
                <ul className="category-items">
                  <li><button onClick={() => scrollToId("htls")}>HTLS Conductor</button></li>
                  <li><button onClick={() => scrollToId("acsr")}>ACSR Conductor</button></li>
                  <li><button onClick={() => scrollToId("aaac")}>AAAC Conductor</button></li>
                  <li><button onClick={() => scrollToId("acs")}>ACS Conductor</button></li>
                </ul>
              </li>
              <li className="dropdown-category">
                <span className="category-title">Power Cables</span>
                <ul className="category-items">
                  <li><button onClick={() => scrollToId("lt")}>LT Cable</button></li>
                  <li><button onClick={() => scrollToId("ltxlpe")}>LT XLPE Cable</button></li>
                  <li><button onClick={() => scrollToId("ht")}>HT Cable</button></li>
                  <li><button onClick={() => scrollToId("armoured")}>Armoured Cable</button></li>
                </ul>
              </li>
              <li className="dropdown-category">
                <span className="category-title">Distribution</span>
                <ul className="category-items">
                  <li><button onClick={() => scrollToId("abc")}>ABC Cable</button></li>
                  <li><button onClick={() => scrollToId("htab")}>HT/LT AB Cable</button></li>
                </ul>
              </li>
              <li className="dropdown-category">
                <span className="category-title">Specialty</span>
                <ul className="category-items">
                  <li><button onClick={() => scrollToId("solar")}>DC / Solar Cable</button></li>
                  <li><button onClick={() => scrollToId("submersible")}>Submersible Cable</button></li>
                  <li><button onClick={() => scrollToId("signal")}>Signalling Cable</button></li>
                </ul>
              </li>
              <li className="view-all-products">
                <button onClick={() => scrollToId("products")}><strong>View All Products →</strong></button>
              </li>
            </ul>
          </li>
<li className="contact-li">
  <button className="btn contact-btn" onClick={() => scrollToId("contact")}>
    Contact us
  </button>
</li>

        </ul>
      </div>
    </nav>
  );
}
