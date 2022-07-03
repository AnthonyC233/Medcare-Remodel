module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Overwrites all tailwind classes (we use max-width now)
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      // Adding hexcodes for colors to use with tailwind classes
      colors: {
        // About Us Section
        green: '#e1e2a4',
        ltGreen: '#eeefc1',
        // Gallery Section
        galleryButton: '#0061af',
      },
    },
  },
  plugins: [],
};
