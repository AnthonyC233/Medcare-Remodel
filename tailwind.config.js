module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Can now customize font sizes
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
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

        iPhoneSE: { raw: '(width: 667px) and (height: 375px)' },
        // iPhoneSE (Landscape) => @media (width: 667px) and (height: 375px)

        iPhoneXR: { raw: '(width: 896px) and (height: 414px)' },
        // iPhoneXR (Landscape) => @media (width: 896px) and (height: 414px)

        iPhone12Pro: { raw: '(width: 844px) and (height: 390px)' },
        // iPhone12Pro (Landscape) => @media (width: 844px) and (height: 390px)

        Pixel5: { raw: '(width: 851px) and (height: 393px)' },
        // Pixel5 (Landscape) => @media (width: 851px) and (height: 393px)

        SamsungS8: { raw: '(width: 740px) and (height: 360px)' },
        // SamsungS8 (Landscape) => @media (width: 740px) and (height: 360px)

        SamsungS20Ultra: { raw: '(width: 915px) and (height: 412px)' },
        // SamsungS20Ultra (Landscape) => @media (width: 915px) and (height: 412px)
      },
      // Adding hexcodes for colors to use with tailwind classes
      colors: {
        // About Us Section
        green: '#e1e2a4',
        ltGreen: '#eeefc1',
        // Gallery Section
        galleryButton: '#0061af',
        // Testimonials Section
        testimonials: '#EDF1F4',
      },
    },
  },
  plugins: [],
};
