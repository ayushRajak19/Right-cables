import React, {
  useState,
  useRef,
  useEffect,
  memo,
  useCallback,
  useMemo,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo4.png";

// ========= NAVIGATION CONFIG =========
const NAVIGATION_CONFIG = {
  aboutDropdown: [
    { id: "about-company", label: "About Company", type: "scroll" },
    { path: "/about-details#certifications", label: "Certification", type: "route" },
    { path: "/about-details#leadership", label: "Chairman's Message", type: "route" },
    { path: "/about-details#board-of-directors", label: "Board of Directors", type: "route" },
    { path: "/about-details#plant-team", label: "Plant Team", type: "route" },
    { path: "/about-details#clientele", label: "Our Clients", type: "route" },
    
  ],
  productsDropdown: [
    { path: "/#ht-power", label: "HT Power Cables", type: "route" },
    { path: "/#lt-power", label: "LT Power Cables", type: "route" },
    { path: "/#armour-cable", label: "Armoured Cable", type: "route" },
    { path: "/#ht-lt-abc", label: "Aerial Bunched Cables", type: "route" },
    { path: "/#conductors", label: "Conductors", type: "route" },
    { path: "/catalogue", label: "All Products Catalogue", type: "route" },
  ],
  cultureDropdown: [
    { id: "values", label: "Values", type: "scroll" },
    { id: "career", label: "Career", type: "scroll" },
  ],
};

// ========= HOOKS =========
const useNavbarState = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [cultureOpen, setCultureOpen] = useState(false);

  const closeAllMenus = useCallback(() => {
    setOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
    setCultureOpen(false);
  }, []);

  return { open, setOpen, aboutOpen, setAboutOpen, productsOpen, setProductsOpen, cultureOpen, setCultureOpen, closeAllMenus };
};

const useOutsideClick = (refs, callbacks) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      refs.forEach((ref, index) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callbacks[index]();
        }
      });
    };
    document.addEventListener("mousedown", handleOutsideClick, { passive: true });
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [refs, callbacks]);
};

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLocked);
  }, [isLocked]);
};

const useNavigationHelper = (navigate, location, closeMenus) =>
  useMemo(
    () => ({
      scrollToSection: (id) => {
        const scroll = () => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(scroll, 300);
        } else {
          scroll();
        }
        closeMenus();
      },
      navigateToRoute: (path) => {
        navigate(path);
        closeMenus();
      },
    }),
    [navigate, location, closeMenus]
  );

// ========= UI COMPONENTS =========
const DropdownArrow = memo(({ rotated }) => (
  <svg
    className={`w-3 h-3 transition-transform duration-200 opacity-80 ${rotated ? "rotate-180 opacity-100" : ""}`}
    viewBox="0 0 12 8"
  >
    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));

const MobileMenuToggle = memo(({ open, onToggle }) => (
  <button
    className="lg:hidden flex flex-col justify-center items-center w-11 h-11 bg-black/30 border border-white/30 rounded-lg transition-all duration-200 mr-2.5 z-50"
    onClick={onToggle}
    aria-expanded={open}
    type="button"
  >
    <span className={`w-5 h-0.5 bg-white my-0.5 rounded-sm transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
    <span className={`w-5 h-0.5 bg-white my-0.5 rounded-sm transition-all ${open ? "opacity-0" : ""}`} />
    <span className={`w-5 h-0.5 bg-white my-0.5 rounded-sm transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
  </button>
));

const NavbarLogo = memo(({ onLogoClick }) => (
  <button onClick={onLogoClick} type="button" aria-label="Go to homepage" className="hover:scale-105 transition-transform">
    <img src={logo} alt="Right Cables logo" className="h-28 w-auto" loading="eager" />
  </button>
));

// ========= MAIN NAVBAR =========
export default function Navbar() {
  const { open, setOpen, aboutOpen, setAboutOpen, productsOpen, setProductsOpen, cultureOpen, setCultureOpen, closeAllMenus } =
    useNavbarState();
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const cultureRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationHelper = useNavigationHelper(navigate, location, closeAllMenus);

  useBodyScrollLock(open);
  useOutsideClick([aboutRef, productsRef, cultureRef], [() => setAboutOpen(false), () => setProductsOpen(false), () => setCultureOpen(false)]);

  const handleMenuToggle = useCallback(() => setOpen((p) => !p), []);
  const handleLogoClick = useCallback(() => navigationHelper.scrollToSection("home"), [navigationHelper]);

  // Smooth hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-transparent z-[2000]">
      <div className="flex items-center justify-between h-full max-w-[1500px] mx-auto px-4">
        <NavbarLogo onLogoClick={handleLogoClick} />
        <MobileMenuToggle open={open} onToggle={handleMenuToggle} />
        <NavigationLinks
          isOpen={open}
          aboutOpen={aboutOpen}
          productsOpen={productsOpen}
          cultureOpen={cultureOpen}
          setAboutOpen={setAboutOpen}
          setProductsOpen={setProductsOpen}
          setCultureOpen={setCultureOpen}
          aboutRef={aboutRef}
          productsRef={productsRef}
          cultureRef={cultureRef}
          navigationHelper={navigationHelper}
        />
      </div>
    </nav>
  );
}

// ========= Navigation Links =========
const NavigationLinks = memo(
  ({ isOpen, aboutOpen, productsOpen, cultureOpen, setAboutOpen, setProductsOpen, setCultureOpen, aboutRef, productsRef, cultureRef, navigationHelper }) => {
    const toggle = (setter, others) => {
      setter((p) => !p);
      others.forEach((fn) => fn(false));
    };

    return (
      <>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden fixed top-[70px] left-0 right-0 bg-gray-900 px-4 py-6 space-y-1 max-h-[calc(100vh-70px)] overflow-y-auto">
            <li>
              <button onClick={() => navigationHelper.scrollToSection("home")} className="w-full text-white py-3 border-b border-gray-700 hover:text-red-500">Home</button>
            </li>

            {/* Mobile About */}
            <li ref={aboutRef}>
              <button onClick={() => toggle(setAboutOpen, [setProductsOpen, setCultureOpen])} className="w-full text-white py-3 border-b border-gray-700 flex justify-between">
                About us <DropdownArrow rotated={aboutOpen} />
              </button>
              {aboutOpen && (
                <ul className="pl-6 space-y-1">
                  {NAVIGATION_CONFIG.aboutDropdown.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() =>
                          item.type === "scroll"
                            ? navigationHelper.scrollToSection(item.id)
                            : navigationHelper.navigateToRoute(item.path)
                        }
                        className="text-gray-300 py-2 hover:text-red-400 w-full text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Products */}
            <li ref={productsRef}>
              <button onClick={() => toggle(setProductsOpen, [setAboutOpen, setCultureOpen])} className="w-full text-white py-3 border-b border-gray-700 flex justify-between">
                Our Products <DropdownArrow rotated={productsOpen} />
              </button>
              {productsOpen && (
                <ul className="pl-6 space-y-1">
                  {NAVIGATION_CONFIG.productsDropdown.map((product) => (
                    <li key={product.label}>
                      <button onClick={() => navigationHelper.navigateToRoute(product.path)} className="text-gray-300 py-2 hover:text-red-400 w-full text-left">
                        {product.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Culture */}
            <li ref={cultureRef}>
              <button onClick={() => toggle(setCultureOpen, [setAboutOpen, setProductsOpen])} className="w-full text-white py-3 border-b border-gray-700 flex justify-between">
                Career & Values <DropdownArrow rotated={cultureOpen} />
              </button>
              {cultureOpen && (
                <ul className="pl-6 space-y-1">
                  {NAVIGATION_CONFIG.cultureDropdown.map((item) => (
                    <li key={item.label}>
                      <button onClick={() => navigationHelper.navigateToRoute(`/culture#${item.id}`)} className="text-gray-300 py-2 hover:text-red-400 w-full text-left">
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Manufacturing & Contact */}
            <li>
              <button onClick={() => navigationHelper.navigateToRoute("/manufacturing")} className="w-full text-white py-3 border-b border-gray-700">Manufacturing</button>
            </li>
            <li className="pt-4">
              <button onClick={() => navigationHelper.navigateToRoute("/contact")} className="w-full bg-red-500 text-white rounded-full py-3 font-semibold hover:bg-red-600">Contact us</button>
            </li>
          </ul>
        )}

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-[70px]">
          <li><button onClick={() => navigationHelper.scrollToSection("home")} className="text-white font-semibold text-xl hover:text-red-500">Home</button></li>

          {/* Desktop About */}
          <li ref={aboutRef} className="relative group">
            <button onClick={() => toggle(setAboutOpen, [setProductsOpen, setCultureOpen])} className="flex items-center gap-2 text-white font-semibold text-xl hover:text-red-500">
              About us <DropdownArrow rotated={aboutOpen} />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 w-56 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                ${aboutOpen ? "opacity-100 visible" : ""}`}
            >
              {NAVIGATION_CONFIG.aboutDropdown.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      item.type === "scroll"
                        ? navigationHelper.scrollToSection(item.id)
                        : navigationHelper.navigateToRoute(item.path)
                    }
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white font-semibold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* Desktop Products */}
          <li ref={productsRef} className="relative group">
            <button onClick={() => toggle(setProductsOpen, [setAboutOpen, setCultureOpen])} className="flex items-center gap-2 text-white font-semibold text-xl hover:text-red-500">
              Our Products <DropdownArrow rotated={productsOpen} />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 w-56 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                ${productsOpen ? "opacity-100 visible" : ""}`}
            >
              {NAVIGATION_CONFIG.productsDropdown.map((product) => (
                <li key={product.label}>
                  <button onClick={() => navigationHelper.navigateToRoute(product.path)}  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white font-semibold"
                  >
                    {product.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* Desktop Culture */}
          <li ref={cultureRef} className="relative group">
            <button onClick={() => toggle(setCultureOpen, [setAboutOpen, setProductsOpen])} className="flex items-center gap-2 text-white font-semibold text-xl hover:text-red-500">
              Career & Values <DropdownArrow rotated={cultureOpen} />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white rounded-xl shadow-xl py-2 w-56 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                ${cultureOpen ? "opacity-100 visible" : ""}`}
            >
              {NAVIGATION_CONFIG.cultureDropdown.map((item) => (
                <li key={item.label}>
                  <button onClick={() => navigationHelper.navigateToRoute(`/culture#${item.id}`)}  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white font-semibold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li><button onClick={() => navigationHelper.navigateToRoute("/manufacturing")} className="text-white font-semibold text-xl hover:text-red-500">Manufacturing</button></li>
          <li><button onClick={() => navigationHelper.navigateToRoute("/contact")} className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-xl hover:bg-red-600">Contact us</button></li>
        </ul>
      </>
    );
  }
);
