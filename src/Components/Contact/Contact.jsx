import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // form state
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  // UI status
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  // input change handler
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // submit handler -> Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, ok: null, msg: "Sending…" });

    try {
      const formData = new FormData(event.target);

      // required by Web3Forms
      formData.append("access_key", "680e4e6d-cb8d-4f73-8677-281744e90c9e");

      // optional niceties
      formData.append("subject", `New enquiry from ${form.name || "website"}`);
      formData.append("from_name", form.name);
      formData.append("replyto", "no-reply@rightcables.example"); // optional
      formData.append("botcheck", ""); // honeypot

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, ok: true, msg: "Message sent successfully ✅" });
        setForm({ name: "", phone: "", message: "" });
        event.target.reset();
      } else {
        setStatus({
          loading: false,
          ok: false,
          msg: data.message || "Failed to send. Please try again.",
        });
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, ok: false, msg: "Network error. Please retry." });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <p className="eyebrow">CONTACT US</p>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-grid">
          {/* LEFT: Info */}
          <div className="contact-info">
            <h3>
              Send us a message <span className="emoji">✉️</span>
            </h3>
            <p className="lead">
              Feel free to reach out through the form or find our contact information below.
              Your feedback and questions are important to us.
            </p>

            <ul className="info-list">
              <li>
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
                    />
                  </svg>
                </span>
                <a href="mailto:arbusiness1909@gmail.com">arbusiness1909@gmail.com</a>
              </li>
              <li>
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.55a1 1 0 0 1-.25 1l-2.22 2.25Z"
                    />
                  </svg>
                </span>
                <a href="tel:+911234567890">+91 123-456-7890</a>
              </li>
              <li>
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5Z"
                    />
                  </svg>
                </span>
                <address>
                  Khasra No. 126, Jahota Road,<br />
                  Near Tatiyawas Toll Plaza, Rampura Dabri,<br />
                  Jaipur (Raj.) 303704, India
                </address>
              </li>
            </ul>
          </div>

          {/* RIGHT: Form */}
          <form className="contact-form" onSubmit={onSubmit}>
            {/* Honeypot (hidden) to reduce bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: "none" }}
            />

            <label>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="Enter your mobile number"
                required
              />
            </label>
               <label>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Enter your email id"
                required
              />
            </label>

            <label className="full">
              <span>Write your message here</span>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="Enter your message"
                required
              />
            </label>

            <button className="submit" type="submit" disabled={status.loading}>
              {status.loading ? "Sending…" : "Submit now →"}
            </button>

            <p
              className={`form-status ${
                status.ok === true ? "ok" : status.ok === false ? "err" : ""
              }`}
            >
              {status.msg}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
