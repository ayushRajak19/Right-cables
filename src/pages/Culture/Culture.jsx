import React, { useState } from "react";
import valuesImg from "../../assets/values.jpg"; // ✅ import your image

const Culture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    degree: "",
    job: "",
    resumeLink: "",
  });
  const [status, setStatus] = useState("");

  // ✅ state for image modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const data = new FormData();
    data.append("access_key", "446bb832-6d68-4f37-978f-8f8f078c5e3e");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("degree", formData.degree);
    data.append("job", formData.job);
    data.append(
      "message",
      `Job Role: ${formData.job}\nDegree: ${formData.degree}\nMobile: ${formData.mobile}\nResume Link: ${formData.resumeLink}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          degree: "",
          job: "",
          resumeLink: "",
        });
      } else {
        setStatus(`❌ Failed: ${result.message || "Try again."}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending email.");
    }
  };

  return (
    <div className="bg-[#0a0c18] min-h-screen text-slate-100">
      {/* ===== Side-by-Side Layout ===== */}
      <section className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:gap-16 lg:max-w-6xl lg:mx-auto">
        {/* Left: Values */}
        <div className="text-center">
          <h2 className="mb-4 text-[2.2rem] font-bold text-red-500">
            OUR VALUES
          </h2>
          <p className="mb-6 text-[1.2rem] text-slate-400">
            The foundation of our company culture and growth.
          </p>
          <div className="flex justify-center">
            <img
              src={valuesImg}
              alt="Company Core Values"
              loading="lazy"
              className="w-[95%] max-w-[550px] cursor-pointer rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
              onClick={() => setIsModalOpen(true)} // ✅ click opens modal
            />
          </div>
        </div>

        {/* Right: Career Form */}
        <div className="text-center">
          <h2 className="mb-4 text-[2.2rem] font-bold text-red-500">
            CAREER OPPURTUNITIES
          </h2>
          <p className="mb-6 text-[1.1rem] text-slate-400">
            Explore exciting roles and join our journey.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-xl border border-slate-700 bg-gray-800 p-6 text-left shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-red-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-red-500 focus:outline-none"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-red-500 focus:outline-none"
            />
            <input
              type="text"
              name="degree"
              placeholder="Your Degree (e.g. B.Tech, MBA)"
              value={formData.degree}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-red-500 focus:outline-none"
            />
            <select
              name="job"
              value={formData.job}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 focus:border-red-500 focus:outline-none"
            >
              <option value="">Select Job Role</option>
              <option value="Engineer">Engineer</option>
              <option value="Technician">Technician</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Operations">Operations</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="url"
              name="resumeLink"
              placeholder="Paste Resume/CV Link"
              value={formData.resumeLink}
              onChange={handleChange}
              required
              className="rounded-lg border border-slate-600 bg-[#111827] px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 rounded-lg bg-red-500 px-4 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
            >
              Send
            </button>
            {status && (
              <p className="mt-2 text-sm font-medium text-slate-300">{status}</p>
            )}
          </form>
        </div>
      </section>

      {/* ✅ Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setIsModalOpen(false)} // close on background click
        >
          <div className="relative max-w-4xl w-[50%]">
            <button
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full px-3 py-1 text-lg"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={valuesImg}
              alt="Full Values"
              className="w-full rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Culture;
