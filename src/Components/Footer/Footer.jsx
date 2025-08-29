import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100); // 🔥 show earlier
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="rc-footer">
      <div className="rc-footer__container">
        {/* Social */}
        <div className="rc-footer__col">
          <div className="rc-footer__social">
            <a
              href="https://www.linkedin.com/in/mukesh-kumar-229696351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              aria-label="LinkedIn"
              className="rc-social"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM4 9h2.99v12H4zM9.5 9H12v1.8h.04c.35-.66 1.22-1.36 2.51-1.36 2.69 0 3.19 1.77 3.19 4.07V21H14.7v-5.35c0-1.28-.03-2.93-1.79-2.93-1.79 0-2.06 1.4-2.06 2.84V21H9.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Registered Office */}
        <div className="rc-footer__col">
          <h4>Registered Office</h4>
          <p>
            Khasra No. 126, Jahota Road, Near Tatiyawas Toll Plaza<br />
            Rampura Dabri, Jaipur (Raj.) 303704
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919828173190">+91 98281 73190</a>
          </p>
          <p>
            <strong>Customer Support:</strong>{" "}
            <a href="tel:+919828173190">+91 98281 73190</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@rightpower.com">info@rightpower.com</a>
          </p>
        </div>

        {/* Jaipur Office */}
        <div className="rc-footer__col">
          <h4>Jaipur Office</h4>
          <p>
            Near Tatiyawas Toll Plaza, Rampura Dabri,<br />
            Jaipur (Raj.) 303704
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sales@rightpower.com">sales@rightpower.com</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:project@rightpower.com">project@rightpower.com</a>
          </p>
        </div>

        {/* International */}
        <div className="rc-footer__col">
          <h4>International Business</h4>
          <p>For export enquiries contact:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:exports@rightpower.com">exports@rightpower.com</a>
          </p>
        </div>
      </div>

      <div className="rc-footer__bottom">
        © {new Date().getFullYear()} Right Power Cables Pvt. Ltd. All Rights Reserved.
      </div>

      {/* ✅ Back to top only */}
      <button 
        className={`rc-top ${showTop ? "show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
