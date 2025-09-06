import React from "react";

// ✅ Import client logos
import client1 from "../assets/client1.jpg";
import client2 from "../assets/jaipur.jpg";
import client3 from "../assets/client3.png";
import mukesh from "../assets/mukesh.jpg";
import kedar from "../assets/kedar.jpg";
import vinay from "../assets/vinay.jpg";
import arun from "../assets/arun.jpg";
import suresh from "../assets/suresh.jpg";
import power from "../assets/power.jpg";

const AboutDetails = () => {
  const certifications = [
    {
      id: 1,
      title: "BIS (ISI Mark)",
      subtitle: "Bureau of Indian Standards",
      description:
        "ISI mark certification ensures our cables meet Indian safety standards and quality requirements for electrical products.",
      features: [
        "Product safety assurance",
        "Quality compliance",
        "Market acceptance",
        "Consumer trust",
      ],
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description:
        "International standard ensuring consistent quality in our manufacturing processes and customer service delivery.",
      features: [
        "Customer satisfaction focus",
        "Continuous improvement",
        "Process-based approach",
        "Leadership engagement",
      ],
    },
  ];

  const stats = [
    { number: "6+", label: "Major Certifications" },
    { number: "100%", label: "Compliance Rate" },
    { number: "India", label: "National Presence" },
  ];

  return (
    <div
      className="font-sans overflow-x-hidden"
      style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
    >
      {/* ----------------- Certifications Section ----------------- */}
      <div
        id="certifications"
        className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pb-20 text-white"
      >
        <div className="text-center pt-20 px-5 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            OUR CERTIFICATIONS
          </h1>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-blue-100">
            Right Power Cables holds prestigious certifications including BIS
            (ISI Mark), ISO 9001:2015, CE Marking, IEC Standards, GeM
            Registration, and Startup India recognition, ensuring world-class
            quality and reliability.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 -mt-10 mb-15 max-w-5xl mx-auto px-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center text-blue-800 shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl font-bold">{s.number}</div>
              <div className="text-gray-600 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto mt-10 px-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white rounded-2xl p-7 shadow-xl text-gray-800 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute top-5 right-5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Certified ✓
              </div>
              <h3 className="text-xl mb-2 text-gray-900">{cert.title}</h3>
              <p className="text-sm font-medium mb-3 text-gray-500">
                {cert.subtitle}
              </p>
              <p className="text-sm mb-5 text-gray-600 leading-relaxed">
                {cert.description}
              </p>
              <h4 className="text-base font-semibold mb-3 text-blue-800">
                Key Benefits:
              </h4>
              <ul className="space-y-1">
                {cert.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- Leadership Section ----------------- */}
      <section id="leadership" className="bg-gray-800 text-center py-20 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-yellow-200">
          CHAIRMAN'S MESSAGE
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          Meet the visionary guiding Right Power Cables towards excellence and
          growth.
        </p>

        <div className="flex flex-wrap items-center bg-slate-400 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl max-w-5xl mx-auto">
          <div className="flex-2 p-7 text-left text-gray-800">
            <h2 className="text-3xl mb-2 text-blue-800">Mr. Mukesh Kumar</h2>
            <h4 className="text-lg text-gray-600 mb-5">Chairman & CEO</h4>
            <p className="text-base leading-relaxed mb-4 text-gray-900">
              {" "}
              Welcome to Right Power Cables . Our company is built on the
              pillars of quality, trust, and innovation, with a clear vision to
              deliver cables and conductors that meet the highest standards of
              safety and performance. We are committed to supporting India’s
              growth in infrastructure, energy, and connectivity by providing
              reliable solutions that empower industries and communities alike.
              With a dedicated team and advanced technology, we strive to be a
              trusted partner in powering progress.
            </p>
      
            <p className="text-base leading-relaxed mb-4 text-gray-900">
              Guided by a clear vision, I have always focused on building a
              company that not only delivers reliable products but also creates
              value for our customers and partners. Our growth has been powered
              by innovation, customer-centricity, and a relentless pursuit of
              excellence.
            </p>
            <p className="text-base leading-relaxed mb-4 text-gray-900">
              Today, Right Power Cables is recognized as a trusted name in power
              & connectivity solutions. As we move forward, our priority remains
              strengthening relationships, ensuring customer satisfaction, and
              contributing to India's infrastructure and industrial growth.
            </p>
            <p className="text-base leading-relaxed mb-4 text-gray-900">Thanks & Regards <br />
            Right Power Cables Pvt Ltd</p>
            
          </div>
        </div>
      </section>

      {/* ----------------- Board of Directors Section ----------------- */}
      <section id="board-of-directors" className="bg-gray-800 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center text-yellow-200 tracking-wide">
            BOARD OF DIRECTORS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Director 1 */}
            <div className="flex flex-col items-center text-center px-6">
              <img
                src={mukesh}
                alt="Mr. Mukesh Kumar"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase">
                Mr. Mukesh Kumar
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-4">
                Chairman & CEO
              </p>
              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                Mukesh Kumar, Chairman & CEO of Right Power, is a visionary
                leader known for his innovation, market expertise, and strong
                financial acumen.
              </p>
            </div>

            {/* Director 2 */}
            <div className="flex flex-col items-center text-center px-6">
              <img
                src={kedar} // ✅ replace with actual image path
                alt="Mr. Kedar Prashad"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase">
                Mr. Kedar Prashad
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-4">
                Founder
              </p>
              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                Kedar Prashad, Founder of Right Power, is a seasoned machinery
                expert with deep technical knowledge and hands-on industry
                experience.
              </p>
            </div>

            {/* Director 3 */}
            <div className="flex flex-col items-center text-center px-6">
              <img
                src={suresh} // ✅ replace with actual image path
                alt="Mr. Suresh Kumar Rewad"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase">
                Mr. Suresh Kumar Rewad
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-4">
                Managing Director
              </p>
              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                Suresh Kumar, Managing Director of Right Power, is a technical
                and production expert driving operational excellence and
                innovation in manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="plant-team" className="bg-gray-800 py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center text-yellow-200 tracking-wide">
            PLANT TEAM
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Plant Team Member 1 */}
            <div className="flex flex-col items-center text-center px-6">
              <img
                src={arun}
                alt="Mr. Arun Sharma"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase mb-2">
                Mr. Arun Sharma
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-2">
                General Manager
              </p>

              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                Arun Sharma Ji, General Manager of Right Power,brings over 20
                years of industry experience, is a dynamic leader ensuring
                smooth operations and efficient management across all functions.
              </p>
            </div>

            {/* Plant Team Member 2 */}
            <div className="flex flex-col items-center text-center px-6">
              <img
                src={vinay}
                alt="Mr. Vinay Kumar"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase mb-2">
                Mr. Vinay Kumar
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-2">
                HR & Admin
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-6">
              <img
                src=""
                alt="Mr. Dhanraj Yadav"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase mb-2">
                Mr. Dhanraj Yadav
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-2">
                Production Superviser
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-6">
              <img
                src=""
                alt="Mr. Moolchand Sheshma"
                className="w-56 h-56 object-cover rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white uppercase mb-2">
                Mr. Moolchand Sheshma
              </h3>
              <p className="text-base font-semibold text-yellow-300 mb-2">
                Quality Supervisor
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- Clientele Section ----------------- */}
      <section
        id="clientele"
        className="bg-gray-800 py-12 px-5 md:px-48 text-center"
      >
        <h1 className="text-4xl font-bold -mt-6 mb-5 text-yellow-200 tracking-wide">
          OUR CLIENTS
        </h1>
        <p
          className="text-xl text-slate-400 mb-20 max-w-4xl mx-auto"
          style={{ wordSpacing: "2px" }}
        >
          Over the years, Right Power Cables has earned the trust of leading
          organizations across India and abroad. Our clients span power
          utilities, infrastructure projects, industries, and government bodies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="bg-white rounded-xl p-5 w-48 h-40 flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={client2}
                alt="Jaipur Vidhyut Vitran Nigam"
                className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center leading-tight">
              JAIPUR VIDYUT VITRAN NIGAN LTD
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 w-48 h-40 flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={client1}
                alt="Rajasthan Vidyut Vitran Nigam"
                className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center leading-tight">
              JODHPUR VIDYUT VITRAN NIGAN LTD
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 w-48 h-40 flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={power}
                alt="Power Generation"
                className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center leading-tight">
              POWER GENRATION
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 w-48 h-40 flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={client3}
                alt="Renewable Energy Corp"
                className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center leading-tight">
              RENEWABLE ENERGY CORP
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
