import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './header.css';

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="
    
    text-gray-600 body-font overflow-hidden
    
    iPhoneSE:overflow-visible
    
    "
    >
      <div
        className="

      gallery-header-container

      // Base
      container mx-auto flex px-5 pt-5 pb-5 flex-row lg:flex-col items-center

     // 1199px | almostlg
      almostlg:pb-5

     // 1161px | almosttherelg
      almosttherelg:pb-3

      // 639px | sm
        sm:pb-0 sm:pt-24
        
      
      "
      >
        {/* Text Div */}
        <div
          data-aos="fade-up"
          className="
        
        // Base
          flex-grow pl-24 pr-6 flex flex-col items-center text-center

        // SUPERULTIMATE
          SUPERULTIMATE:text-left SUPERULTIMATE:items-start SUPERULTIMATE:pb-0

        // ULTIMATE 
          ULTIMATE:text-left ULTIMATE:items-start ULTIMATE:pb-0

        // 1880px | 3xl 
          3xl:text-left 3xl:items-start 3xl:pb-0 

        // 1535px | 2xl 
          2xl:items-start 2xl:text-left 2xl:pt-10

        // 639px | sm
          sm:pl-0 sm:mt-20 sm:relative sm:bottom-20

        // iPhoneSE | Vertical
          iPhoneSEH:mr-0 iPhoneSEH:ml-0 iPhoneSEH:bottom-28

        // iPhoneSE | Landscape
          iPhoneSE:pl-0 iPhoneSE:pt-0 iPhoneSE:mt-20

        // iPhoneXR | Horizontal
           iPhoneXR:pt-0 iPhoneXR:pl-5 iPhoneXR:mt-20

        // iPhone12Pro | Horizontal
          iPhone12Pro:pl-0 pb-10 iPhone12Pro:pt-0 iPhone12Pro:pt-0 iPhone12Pro:mt-20

        // Pixel5 | Horizontal
         Pixel5:pl-0 Pixel5:pt-0 Pixel5:mt-20

        // SamsungS8 | Horizontal
         SamsungS8:pl-0 SamsungS8:pt-0 SamsungS8:mt-20
        
        // SamsungS20Ultra | Horizontal
         SamsungS20Ultra:pl-0 SamsungS20Ultra:pt-0 SamsungS20Ultra:mt-20

        // GalaxyFold | Horizontal
         GalaxyFold:pl-0 GalaxyFold:pt-0 GalaxyFold:mt-20

         // iPhone8Plus | Landscape
        iPhone8Plus:pt-20 iPhone8Plus:pl-0
 
        
        "
        >
          <h1
            className="
          
          title-font sm:text-4xl text-6xl mb-4 font-semibold text-gray-900 w-full xl:text-4xl lg:text-5xl lg:w-full font-['Inter']
          
          // iPhoneXRH | Vertical
            iPhoneXRH:text-5xl

          // iPhone12Pro | Vertical
            iPhone12ProH:text-5xl

          // Pixel5H | Vertical
            Pixel5H:text-5xl

          // SamsungS20UltraH | Vertical
            SamsungS20UltraH:text-5xl

          // HORIZONTAL
           // iPhoneSE | Horizontal
             iPhoneSE:mb-1

           // iPhoneXR | Horizontal
            iPhoneXR:mb-1

           // iPhone12Pro | Landscape
            iPhone12Pro:mb-1
  
           // Pixel5 | Landscape
            Pixel5:mb-1
  
           // SamsungS8 | Landscape
            SamsungS8:mb-1
          
           // SamsungS20Ultra | Landscape
            SamsungS20Ultra:mb-1
  
           // GalaxyFold | Landscape
            GalaxyFold:mb-1

          "
          >
            Our Gallery
          </h1>
          <h2
            className="
           
           title-font sm:text-4xl text-3xl mb-4 font-medium drop-shadow-md text-amber-300 w-full xl:text-2xl lg:text-5xl lg:w-full font-['Courgette'] italic
           
          // HORIZONTAL
           // iPhoneSE | Horizontal
            iPhoneSE:mb-1

           // iPhoneXR | Horizontal
            iPhoneXR:mb-1

           // iPhone12Pro | Landscape
            iPhone12Pro:mb-1
  
           // Pixel5 | Landscape
            Pixel5:mb-1
  
           // SamsungS8 | Landscape
            SamsungS8:mb-1
          
           // SamsungS20Ultra | Landscape
            SamsungS20Ultra:mb-1
  
           // GalaxyFold | Landscape
            GalaxyFold:mb-1

           
           "
          >
            Where We Care
          </h2>
          <p
            className="
           
           mb-8 leading-relaxed font-['Mingzat'] text-white text-lg
           sm:text-base
           3xl:w-8/12

          // VERTICAL 
           // iPhoneSEH | Vertical 
            iPhoneSEH:mb-3
           
           // iPhoneXRH | Vertical
            iPhoneXRH:text-xl

           // iPhone12Pro | Vertical
            iPhone12ProH:text-lg

           // Pixel5H | Vertical
            Pixel5H:text-lg

           // SamsungS8H | Vertical
            SamsungS8H:mb-5

           // SamsungS20UltraH | Vertical
            SamsungS20UltraH:text-xl

          // HORIZONTAL
           // iPhoneSE | Horizontal
            iPhoneSE:text-sm iPhoneSE:w-full

           // iPhone12Pro | Landscape
            iPhone12Pro:w-full

           // Pixel5 | Landscape
            Pixel5:w-11/12
  
           // SamsungS8 | Landscape
            SamsungS8:w-full SamsungS8:mb-2
          
           // SamsungS20Ultra | Landscape
            SamsungS20Ultra:mb-6
  
           // GalaxyFold | Landscape
            GalaxyFold:w-full
           
           "
          >
            Get interpersonal with our Team by discovering who you may be
            working with. Check out some of the things you could be doing and
            learning as you head on your medical journey with us! We hope you
            can carve your own path through all the layers of training and
            friends along the way.
          </p>
          <div
            className="
           
          // Base
          flex justify-center relative

          // ULTIMATE
            ULTIMATE:items-center ULTIMATE:sm-w-fit
          
          // 639px | sm
            sm:items-center sm:w-fit

          // iPhoneXR | Vertical  
            iPhoneXRH:w-fit iPhoneXR:bottom-4

          // iPhone12Pro | Vertical
            iPhone12ProH:w-fit iPhone12Pro:bottom-4

          // Pixel5 | Vertical
            Pixel5H:w-fit Pixel5:bottom-4

          // SamsungS8 | Vertical
            SamsungS8H:w-fit SamsungS8:bottom-2

          // SamsungS20Ultra | Vertical
            SamsungS20UltraH:w-fit SamsungS20Ultra:bottom-3

          // GalaxyFold | Vertical
          GalaxyFoldH:w-fit GalaxyFold:bottom-3


          "
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="
              
              // BASE
              inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg
              
              "
              >
                Orientation RSVP
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
