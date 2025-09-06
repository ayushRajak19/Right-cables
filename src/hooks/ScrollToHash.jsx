import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    // ✅ Clear any existing timeout to prevent race conditions
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");
      
      const scrollToElement = () => {
        const el = document.getElementById(id);

        if (el) {
          // ✅ Use requestAnimationFrame for better performance
          requestAnimationFrame(() => {
            // ✅ Calculate offset for fixed navbar (adjust as needed)
            const yOffset = -80;
            const elementTop = el.getBoundingClientRect().top;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = elementTop + scrollTop + yOffset;

            // ✅ Use smooth scrolling with better performance
            window.scrollTo({ 
              top: targetY, 
              behavior: "smooth",
              // ✅ Add these for better mobile performance
              left: 0
            });

            // ✅ Clean URL after a delay to ensure scroll completes
            setTimeout(() => {
              if (window.history && window.history.replaceState) {
                window.history.replaceState(
                  null, 
                  "", 
                  window.location.pathname + window.location.search
                );
              }
            }, 1000); // Wait for scroll animation to complete
          });
        }
      };

      // ✅ Reduced timeout for faster response
      timeoutRef.current = setTimeout(scrollToElement, 100);
    }

    // ✅ Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.hash]); // ✅ Only depend on hash, not entire location

  return null;
}