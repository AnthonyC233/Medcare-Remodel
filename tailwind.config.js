module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    // Can now customize font sizes
    fontSize: {
      // CUSTOM BREAKPOINTS
      xxs: '.625rem',
      xs: '.75rem',
      smaller: '.85rem',
      // DEFAULT BREAKPOINTS
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      // EXTRA BREAKPOINTS
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      // Overwrites all tailwind classes (we use max-width now)
      screens: {
        SUPERULTIMATE: { max: '3440px' },
        // => @media (max-width: 3440px) { ... }

        ULTIMATE: { max: '1920px' },
        // => @media (max-width: 1920px) { ... }

        '3xl': { max: '1880px' },
        // => @media (max-width: 1800px) { ... }

        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xxl: { max: '1502px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        almostlg: { max: '1199px' },
        // => @media (max-width: 1199px) { ... }

        almosttherelg: { max: '1161px' },
        // => @media (max-width: 1161px) { ... }

        galleryhomelg: { max: '1024px' },
        // => @media (max-width: 1023px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        almostmd: { max: '790px' },
        // => @media (max-width: 790px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        almostxsm: { max: '594px' },
        // => @media (max-width: 594px) { ... }

        xsm: { max: '400px' },
        // => @media (max-width: 639px) { ... }

        xxsm: { max: '252px' },
        // => @media (max-width: 252px) { ... }

        // CUSTOM
        header: { max: '858px' },
        // => @media (max-width: 858px) { ... }

        // LANDSCAPE
        // ---------
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

        iPadAir: { raw: '(width: 1180px) and (height: 820px)' },
        // iPadAirH (Landscape) => @media (width: 1180px) and (height: 820px)

        iPadMini: { raw: '(width: 1024px) and (height: 768px)' },
        // iPadAirH (Landscape) => @media (width: 1024px) and (height: 768px)

        GalaxyFold: { raw: '(width: 653px) and (height: 280px)' },
        // GalaxyFold (Landscape) => @media (width: 653px) and (height: 280px)

        iPhone8Plus: { raw: '(width: 736px) and (height: 414px)' },
        // iPhone8 (Landscape) => @media (width: 736px) and (height: 414px)

        // VERTICAL
        // ----------
        iPhoneSEH: { raw: '(width: 375px) and (height: 667px)' },
        // iPhoneSE (Vertical) => @media (width: 375px) and (height: 667px)

        iPhoneXRH: { raw: '(width: 414px) and (height: 896px)' },
        // iPhoneXR (Vertical) => @media (width: 414px) and (height: 896px)

        iPhone12ProH: { raw: '(width: 390px) and (height: 844px)' },
        // iPhone12Pro (Vertical) => @media (width: 390px) and (height: 844px)

        Pixel5H: { raw: '(width: 393px) and (height: 851px)' },
        // Pixel5 (Vertical) => @media (width: 393px) and (height: 851px)

        SamsungS8H: { raw: '(width: 360px) and (height: 740px)' },
        // SamsungS8 (Vertical) => @media (width: 360px) and (height: 740px)

        SamsungS20UltraH: { raw: '(width: 412px) and (height: 915px)' },
        // SamsungS20Ultra (Vertical) => @media (width: 412px) and (height: 915px)

        iPadAirH: { raw: '(width: 820px) and (height: 1180px)' },
        // iPadAirH (Vertical) => @media (width: 820px) and (height: 1180px)

        iPadMiniH: { raw: '(width: 768px) and (height: 1024px)' },
        // iPadAirH (Vertical) => @media (width: 768px) and (height: 1024px)

        GalaxyFoldH: { raw: '(width: 280px) and (height: 653px)' },
        // GalaxyFoldH (Vertical) => @media (width: 280px) and (height: 653px)

        iPhone8PlusH: { raw: '(width: 414px) and (height: 736px)' },
        // iPhone8 (Landscape) => @media (width: 414px) and (height: 736px)
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
        medCareYellow: '#ffd57d',
      },
      theme: {
        // ...
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
