/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ✅ PERFORMANCE: Define only colors you actually use
      colors: {
        primary: {
          red: '#f44336',
          'red-dark': '#e53935',
        },
        whatsapp: '#25D366',
        dark: '#0a0c18',
      },
      // ✅ PERFORMANCE: Optimize font loading
      fontFamily: {
        'system': ['system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // ✅ PERFORMANCE: Enable JIT mode and optimizations
  mode: 'jit',
  // ✅ PERFORMANCE: Optimize for production
  corePlugins: {
    // Disable unused features to reduce bundle size
    container: false,
    // Keep only what you need
  },
  // ✅ PERFORMANCE: Safelist only critical classes
  safelist: [
    // Add any dynamic classes that might be purged incorrectly
    'nav-link',
    'dropdown-panel',
    'whatsapp-btn',
    'page-loader',
    'loader-spinner',
  ],
};