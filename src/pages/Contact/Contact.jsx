import React, { useState } from "react";

const Contact = () => {
  // form state
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

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
      // Create form data manually
      const formData = new FormData();
      
      // Add form fields
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("message", form.message);

      // required by Web3Forms
      formData.append("access_key", "446bb832-6d68-4f37-978f-8f8f078c5e3e");

      // optional niceties
      formData.append("subject", `New enquiry from ${form.name || "website"}`);
      formData.append("from_name", form.name);
      formData.append("replyto", "no-reply@rightcables.example");
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, ok: true, msg: "Message sent successfully ✅" });
        setForm({ name: "", phone: "", email: "", message: "" });
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
    <section 
      id="contact" 
      className="py-16 lg:py-20 bg-gray-950 text-gray-200 relative overflow-hidden scroll-mt-20"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute w-96 h-96 rounded-full bg-red-500/3 blur-3xl top-1/4 left-1/5"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-400/3 blur-3xl bottom-1/4 right-1/5"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="relative inline-block">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-3 relative">
              CONTACT US
              <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-10 h-0.5 bg-blue-400 rounded-full"></span>
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Get in Touch
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl group overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-400 opacity-80"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  ✉️
                  <span>Send us a message</span>
                </h3>
                
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
                  Feel free to reach out through the form or find our contact information below.
                  Your feedback and questions are important to us.
                </p>

                {/* Contact List */}
                <ul className="space-y-4">
                  {/* Email */}
                  <li className="group/item">
                    <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/3 border border-white/5 transition-all duration-300 hover:bg-white/6 hover:border-red-500/20 hover:translate-x-1">
                      <div className="flex items-center justify-center w-9 h-9 bg-red-500/10 rounded-lg text-red-500 transition-all duration-300 group-hover/item:bg-red-500/20 group-hover/item:scale-110">
                        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
                        </svg>
                      </div>
                      <a 
                        href="mailto:rightpowercables@gmail.com" 
                        className="text-gray-200 text-sm lg:text-base transition-colors hover:text-red-400 hover:underline"
                      >
                        rightpowercables@gmail.com
                        
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="group/item">
                    <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/3 border border-white/5 transition-all duration-300 hover:bg-white/6 hover:border-red-500/20 hover:translate-x-1">
                      <div className="flex items-center justify-center w-9 h-9 bg-red-500/10 rounded-lg text-red-500 transition-all duration-300 group-hover/item:bg-red-500/20 group-hover/item:scale-110">
                        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.55a1 1 0 0 1-.25 1l-2.22 2.25Z" />
                        </svg>
                      </div>
                      <a 
                        href="tel:+919828173190" 
                        className="text-gray-200 text-sm lg:text-base transition-colors hover:text-red-400 hover:underline"
                      >
                        +91 9828173190 <br />
                        +91 99291 45070 <br />
                        +91 99507 04790
                      </a>
                    </div>
                  </li>
                  

                  {/* Address */}
                  <li className="group/item">
                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/3 border border-white/5 transition-all duration-300 hover:bg-white/6 hover:border-red-500/20 hover:translate-x-1">
                      <div className="flex items-center justify-center w-9 h-9 bg-red-500/10 rounded-lg text-red-500 transition-all duration-300 group-hover/item:bg-red-500/20 group-hover/item:scale-110 mt-0.5">
                        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5Z" />
                        </svg>
                      </div>
                      <address className="text-gray-200 text-sm lg:text-base not-italic leading-relaxed">
                        Khasra No. 126, Jahota Road,<br />
                        Near Tatiyawas Toll Plaza, Rampura Dabri,<br />
                        Jaipur (Raj.) 303704, India
                      </address>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div 
              className="relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl overflow-hidden" 
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-500 opacity-80"></div>
              
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <div className="grid md:grid-cols-2 gap-4.5 relative z-10">
                {/* Name */}
                <label className="block space-y-2.5">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    required
                    className="w-full  bg-gray-900/80 border border-white/15 text-white rounded-xl px-4 py-3.5 text-base placeholder:text-gray-500 transition-all duration-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/15 focus:bg-white/10 focus:-translate-y-0.5 focus:outline-none resize-none"
                  />
                </label>

                {/* Phone */}
                <label className="block space-y-2.5">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Enter your mobile number"
                    required
                    className="w-full  bg-gray-900/80 border border-white/15 text-white rounded-xl px-4 py-3.5 text-base placeholder:text-gray-500 transition-all duration-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/15 focus:bg-white/10 focus:-translate-y-0.5 focus:outline-none resize-none"
                  />
                </label>

                {/* Email */}
                <label className="block space-y-2.5 md:col-span-2">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Email address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter your email id"
                    required
                    className="w-full  bg-gray-900/80 border border-white/15 text-white rounded-xl px-4 py-3.5 text-base placeholder:text-gray-500 transition-all duration-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/15 focus:bg-white/10 focus:-translate-y-0.5 focus:outline-none resize-none"
                  />
                </label>

                {/* Message */}
                <label className="block space-y-2.5 md:col-span-2">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Write your message here
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Enter your message"
                    required
                    className="w-full bg-gray-900/80 border border-gray-700/50 text-white rounded-xl px-4 py-3.5 text-base placeholder:text-gray-400 transition-all duration-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/15 focus:bg-gray-800/90 focus:-translate-y-0.5 focus:outline-none resize-y min-h-[120px] font-sans backdrop-blur-sm"
                    style={{ colorScheme: 'dark' }}
                  />
                </label>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-start">
                  <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={status.loading}
                    className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-base tracking-wide uppercase px-7 py-3.5 rounded-full shadow-lg shadow-red-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/50 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="relative z-10">
                      {status.loading ? "Sending…" : "Submit now →"}
                    </span>
                  </button>
                </div>

                {/* Status Message */}
                {status.msg && (
                  <p className={`md:col-span-2 mt-2 text-sm font-semibold px-3 py-2 rounded-lg border ${
                    status.ok === true
                      ? "text-green-400 bg-green-400/10 border-green-400/20"
                      : status.ok === false
                      ? "text-red-400 bg-red-400/10 border-red-400/20"
                      : "text-gray-400 bg-white/3 border-white/5"
                  }`}>
                    {status.msg}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;