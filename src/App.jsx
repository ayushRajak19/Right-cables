import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Manufacturing from "./Components/Manufacturing/Manufacturing";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

/* ✅ pages */
import Leadership from "./pages/Leadership.jsx";
import Certification from "./pages/Certification.jsx";
import ScrollToHash from "./hooks/ScrollToHash.jsx";
import "./index.css";

function HomePage() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Manufacturing />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation();

  // ✅ Handle scrolling to anchors like #about-company
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/leadership"
          element={
            <>
              <Navbar />
              <Leadership />
              <Footer />
            </>
          }
        />
        <Route
          path="/certification"
          element={
            <>
              <Navbar />
              <Certification />
              <Footer />
            </>
          }
        />
        {/* fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* ✅ WhatsApp Floating Button (always visible on all routes) */}
      <a
        href="https://wa.me/919828173190"
        className="rc-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 .5C7.6.5.5 7.6.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 5 2 7.8 2 8.4 0 15.5-7.1 15.5-15.5S24.4.5 16 .5zM16 29c-2.6 0-5.1-.7-7.3-2.1l-.5-.3-4.7 1.2 1.2-4.6-.3-.5C3 20.6 2.3 18.3 2.3 16 2.3 8.7 8.7 2.3 16 2.3S29.7 8.7 29.7 16 23.3 29 16 29zm8.1-10.9c-.4-.2-2.4-1.2-2.8-1.3s-.7-.2-1 .2-1.1 1.3-1.4 1.6c-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6s0-.6.2-.8c.2-.2.4-.5.6-.7.2-.2.3-.4.5-.6.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7s-1-2.4-1.4-3.3c-.4-1-1-1-1.3-1h-1c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.1 1.9 4.4c.2.3 3.1 4.8 7.4 6.6.9.4 1.6.6 2.1.7.9.3 1.7.3 2.3.2.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.1-.3-.2-.7-.4z" />
        </svg>
      </a>
    </>
  );
}
