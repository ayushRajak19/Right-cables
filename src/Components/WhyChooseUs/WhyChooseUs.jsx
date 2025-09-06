import React from "react";
import isoCert from "../../assets/ISO.png";

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative bg-[#000110] text-slate-100 px-4 sm:px-6 lg:px-8 pt-0 pb-12 sm:pt-0 sm:pb-16 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title - Reduced size */}
        <h2 className="relative inline-block font-extrabold text-[clamp(24px,4vw,40px)] leading-tight mb-16">
          Why Choose Us
          <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-[clamp(70px,12vw,100px)] h-1 rounded bg-gradient-to-r from-rose-500 to-cyan-400"></span>
        </h2>

        {/* Grid - Responsive layout with larger boxes */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {/* Item 1 - Responsive larger boxes */}
          <li className="flex flex-col text-left bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20">
            <div className="w-12 h-12 lg:w-16 lg:h-16 grid place-items-center text-2xl lg:text-3xl rounded-xl bg-white/10 mb-4 lg:mb-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-cyan-400 group-hover:text-white">
              🏅
            </div>
            <h3 className="font-semibold text-lg lg:text-xl text-slate-100 mb-3 lg:mb-4">
              ISI & ISO Certified
            </h3>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed flex-grow mb-3 lg:mb-4">
              All our products strictly comply with{" "}
              <strong>ISI & ISO safety and quality standards</strong>, ensuring
              reliability and customer confidence. Each cable is tested under
              stringent conditions before it reaches the market.
            </p>
            <a
              href={isoCert}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm lg:text-base font-medium hover:underline mt-auto"
            >
              View Certificate
            </a>
          </li>

          {/* Item 2 - Responsive larger boxes */}
          <li className="flex flex-col text-left bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20">
            <div className="w-12 h-12 lg:w-16 lg:h-16 grid place-items-center text-2xl lg:text-3xl rounded-xl bg-white/10 mb-4 lg:mb-6">
              🛡️
            </div>
            <h3 className="font-semibold text-lg lg:text-xl text-slate-100 mb-3 lg:mb-4">
              Durable & Safe Materials
            </h3>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed flex-grow">
              Manufactured with{" "}
              <strong>high-grade PVC, XLPE, and pure copper/aluminum</strong>,
              our cables guarantee durability, safety, and long service life.
              Designed to withstand extreme conditions while delivering
              consistent performance.
            </p>
          </li>

          {/* Item 3 - Responsive larger boxes */}
          <li className="flex flex-col text-left bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20">
            <div className="w-12 h-12 lg:w-16 lg:h-16 grid place-items-center text-2xl lg:text-3xl rounded-xl bg-white/10 mb-4 lg:mb-6">
              🚚
            </div>
            <h3 className="font-semibold text-lg lg:text-xl text-slate-100 mb-3 lg:mb-4">
              Nationwide Delivery
            </h3>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed flex-grow">
              With a robust <strong>Pan-India logistics network</strong>, we
              ensure timely supply to every corner of the country. Our secured
              transportation guarantees safe handling and quick turnaround for
              urgent project needs.
            </p>
          </li>

          {/* Item 4 - Responsive larger boxes */}
          <li className="flex flex-col text-left bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-lg min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20">
            <div className="w-12 h-12 lg:w-16 lg:h-16 grid place-items-center text-2xl lg:text-3xl rounded-xl bg-white/10 mb-4 lg:mb-6">
              ₹
            </div>
            <h3 className="font-semibold text-lg lg:text-xl text-slate-100 mb-3 lg:mb-4">
              Competitive Pricing
            </h3>
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed flex-grow">
              Offering <strong>premium quality at affordable rates</strong>, we
              provide cost-effective solutions without compromising safety or
              reliability. Our pricing structure is designed to fit projects of
              every scale, from industries to infrastructure.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;