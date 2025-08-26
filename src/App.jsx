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
import './index.css';


function HomePage() {
  return (
    <>
    <ScrollToHash/>
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
        // little delay ensures DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
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
  );
}
