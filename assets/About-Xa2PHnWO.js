import{r,j as e}from"./index-Cpr6PrIN.js";const m="/Right-cables/assets/company-DCR8zncz.jpg",u="/Right-cables/assets/company2-CWPvM52L.jpg",g=r.memo(()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"will-change-auto",children:e.jsx("path",{d:"M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z",fill:"currentColor"})})),h=r.memo(()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"will-change-auto",children:e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",fill:"currentColor"})})),f=r.memo(()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"will-change-auto",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",fill:"currentColor"})})),x=r.memo(({icon:a,title:s,items:n,className:c=""})=>e.jsxs("article",{className:`bg-[#1a1d2e] rounded-2xl p-8 border border-gray-700 shadow-md hover:shadow-2xl transition-transform hover:-translate-y-2 will-change-transform ${c}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[e.jsx("div",{className:"flex items-center justify-center w-14 h-14 bg-red-100/10 border border-red-300/30 rounded-lg text-red-400",children:e.jsx(a,{})}),e.jsx("h3",{className:"font-bold text-red-400 text-xl",children:s})]}),e.jsx("ul",{className:"text-gray-300 text-base space-y-3",children:n.map((t,l)=>e.jsx("li",{children:t},l))})]})),d=r.memo(({src:a,alt:s,className:n=""})=>e.jsx("img",{src:a,alt:s,className:`w-full h-40 sm:h-48 object-cover rounded-lg shadow-md border border-gray-700 hover:border-red-300 transition-colors duration-300 will-change-auto ${n}`,loading:"lazy",decoding:"async"})),p=()=>{const a=r.useRef(null),s=r.useRef(new Set),n=r.useCallback(()=>{a.current&&a.current.disconnect();const t=document.querySelectorAll("[data-reveal]:not(.in)");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.forEach(i=>i.classList.add("in"));return}a.current=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.intersectionRatio>.1&&(o.target.classList.add("in"),a.current?.unobserve(o.target),s.current.delete(o.target))})},{threshold:[.1,.2],rootMargin:"-20px 0px -20px 0px"}),t.forEach(i=>{s.current.add(i),a.current?.observe(i)})},[]);r.useEffect(()=>{const t=requestAnimationFrame(()=>{n()});return()=>{cancelAnimationFrame(t),a.current&&a.current.disconnect(),s.current.clear()}},[n]),r.useEffect(()=>{let t;const l=()=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{document.querySelectorAll("[data-reveal]:not(.in)").length>0&&n()})},i=o=>{t||l()};return window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i),t&&cancelAnimationFrame(t)}},[n]);const c=[{icon:g,title:"Our Mission",items:["Benchmark excellence in wire & cable solutions worldwide","Commitment to safety, sustainability & innovation","Deliver products tailored to customer needs","Adapt to evolving market demands"]},{icon:h,title:"Our Vision",items:["Be the foremost innovator in conductor & cable manufacturing","Unwavering focus on quality and sustainability","Provide cutting-edge, efficient, and safe solutions"]},{icon:f,title:"Our Strengths",items:["ISO-certified facilities with advanced technology","Strong R&D and testing labs","Pan-India distribution network coverage","Approved by major utilities and industries"]}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
        [data-reveal] {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }

        [data-reveal].in {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          will-change: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            will-change: auto !important;
          }
        }

        /* Performance optimizations */
        .will-change-auto {
          will-change: auto;
        }

        .will-change-transform {
          will-change: transform;
        }

        /* Optimize background pattern rendering */
        .bg-pattern {
          background-image: radial-gradient(
            circle at 50% 50%,
            rgba(244, 67, 54, 0.015) 0%,
            transparent 70%
          );
          contain: layout paint;
        }

        /* GPU acceleration for cards */
        .card-hover {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .card-hover:hover {
          transform: translate3d(0, -8px, 0);
        }
      `}),e.jsxs("section",{id:"about-company",className:"relative bg-[#000110] pt-1 pb-12","aria-labelledby":"about-title",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 bg-pattern"}),e.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("h2",{id:"about-title",className:"text-center font-extrabold text-white mb-6 relative leading-tight",style:{fontSize:"clamp(32px,4vw,48px)",lineHeight:"1.1"},"data-reveal":"y",children:["About Us",e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 opacity-80",style:{bottom:"-8px",width:"100px",height:"4px",background:"linear-gradient(135deg, #ff6a00 0%, #f44336 50%, #0099ff 100%)",borderRadius:"2px"}})]}),e.jsx("p",{className:"max-w-4xl mx-auto text-center text-gray-300 leading-relaxed mb-12 font-normal",style:{fontSize:"clamp(16px,1.3vw,18px)"},"data-reveal":"y",children:"Right Power Cables Pvt. Ltd. is a trusted manufacturer of premium wires and cables for power utilities, industries, and infrastructure projects. With a strict focus on safety, reliability, and innovation, we deliver products crafted from the finest raw materials under rigorous quality control."}),e.jsxs("div",{className:"flex flex-col lg:flex-row items-start gap-10 my-10","data-reveal":"y",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-red-500 font-bold mb-6",style:{fontSize:"clamp(24px,3vw,34px)"},children:"Welcome to Right Power Cables"}),e.jsx("p",{className:"text-gray-300 leading-relaxed mb-5 text-justify",children:"Right Power Cables is an ISO 9001:2015, BIS Certified, and CE approved company, engaged in the design and manufacturing of electrical Wires, Cables, and Conductors."}),e.jsx("p",{className:"text-gray-300 leading-relaxed mb-5 text-justify",children:"With advanced manufacturing facilities strategically located in India, we cover the entire value chain of the Wire and Cables industry. Our offerings cater to sectors such as Railways, Oil & Gas, Petrochemical, Defence, Telecom, Power Generation, EPC Contractors, Infrastructure, Cement, Solar, and Heavy Industries."}),e.jsx("p",{className:"text-gray-300 leading-relaxed mb-5 text-justify",children:"We are committed to innovation, reliability, and quality – ensuring products that meet international standards while delivering maximum customer satisfaction."}),e.jsx("p",{className:"text-gray-300 leading-relaxed mb-5 text-justify",children:"We don’t just manufacture cables — we provide end-to-end solutions that power industries, energize infrastructure, and connect communities. By adhering to global benchmarks and adopting sustainable practices, we ensure that every product we deliver stands for durability, performance, and customer confidence."})]}),e.jsxs("div",{className:"flex flex-col gap-4 w-full lg:w-1/3",children:[e.jsx(d,{src:m,alt:"Right Power Cables Factory"}),e.jsx(d,{src:u,alt:"Right Power Cables Manufacturing"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10",children:c.map((t,l)=>e.jsx("div",{"data-reveal":"y",children:e.jsx(x,{icon:t.icon,title:t.title,items:t.items,className:"card-hover"})},t.title))})]})]})]})},v=r.memo(p);export{v as default};
