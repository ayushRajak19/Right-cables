import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="rc-footer">
      <div className="rc-footer__container">
        {/* Social + app */}
        <div className="rc-footer__col">
          <div className="rc-footer__social">
            <a href="https://www.linkedin.com/in/mukesh-kumar-229696351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" className="rc-social">
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM4 9h2.99v12H4zM9.5 9H12v1.8h.04c.35-.66 1.22-1.36 2.51-1.36 2.69 0 3.19 1.77 3.19 4.07V21H14.7v-5.35c0-1.28-.03-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21H9.5z"/></svg>
            </a>
  
          </div>

          
          
        </div>

        {/* Registered Office */}
        <div className="rc-footer__col">
          <h4>Registered Office</h4>
          <p>Khasra No. 126, Jahota Road, Near Tatiyawas Toll Plaza
Rampura Dabri, Jaipur (Raj.) 303704</p>
          
          <p><strong>Phone:</strong> <a href="tel:+91 98281 73190">+91 98281 73190</a></p>
          <p><strong>Customer Support:</strong> <a href="tel:+91 98281 73190">+91 98281 73190</a></p>
          <p><strong>Email:</strong> <a href="mailto:rightpowercables@gmail.com">info@rightpower.com</a></p>
        </div>

        {/* Noida Office */}
        <div className="rc-footer__col">
          <h4>Jaipur Office</h4>
          <p>Near Tatiyawas Toll Plaza, Rampura Dabri,<br/>Jaipur (Raj.) 303704</p>
          <p><strong>Email:</strong> <a href="mailto:rightpowercables@gmail.com">sales@rightpower.com</a></p>
          <p><strong>Email:</strong> <a href="mailto:rightpowercables@gmail.com">project@rightpower.com</a></p>
        </div>

        {/* International */}
        <div className="rc-footer__col">
          <h4>International Business</h4>
          <p>For export enquiries contact:</p>
          <p><strong>Email:</strong> <a href="mailto:rightpowercables@gmail.com">exports@rightpower.com</a></p>
        </div>
      </div>

      <div className="rc-footer__bottom">
        © {new Date().getFullYear()} Right Power Cables Pvt. Ltd. All Rights Reserved.
      </div>

      {/* Back to top */}
      {showTop && (
        <button className="rc-top" onClick={scrollTop} aria-label="Back to top">
          ↑
        </button>
      )}

      {/* WhatsApp Floating */}
      <a
        className="rc-whatsapp"
        href="https://wa.me/916261069342"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* WA logo */}
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.1 17.5c-.3-.2-1.8-.9-2-.9s-.5-.1-.7.2-.8.9-1 1.1-.4.2-.7.1-1.4-.5-2.6-1.6c-1-.9-1.6-2-1.8-2.3s0-.5.1-.7.3-.4.5-.6c.1-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.8-1-2.4c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.7c.2.3 2.4 3.6 5.8 5 3.5 1.4 3.5.9 4.1.9s2-.8 2.3-1.6.3-1.3.2-1.4-.3-.2-.6-.4zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.4 1.7 6.2L3 29l6.9-1.8C11.7 28.4 13.8 29 16 29c7.2 0 13-5.8 13-13S23.2 3 16 3z" fill="currentColor"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
