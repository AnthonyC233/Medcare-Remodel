import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './header.css';

// Images for the header change per page
import header1 from '../../assets/homepage-header.avif';

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-x-hidden">
      <div
        className="

      // Base
      container mx-auto flex px-5 pt-5 pb-5 flex-row lg:flex-col items-center overflow-x-hidden overflow-y-hidden 

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
          flex-grow w-1/2 pl-24 pr-6 flex flex-col items-center text-center 

          // SUPERULTIMATE
          SUPERULTIMATE:text-left SUPERULTIMATE:items-start SUPERULTIMATE:pb-0

          // ULTIMATE
          ULTIMATE:text-left ULTIMATE:items-start ULTIMATE:pb-0

          // 1880px | 3xl 
          3xl:text-left 3xl:items-start 3xl:pb-0

        // 1535px | 2xl 
          2xl:items-start 2xl:text-left 2xl:pt-10

        // 1023px | lg
          lg:w-11/12

        // 639px | sm
          sm:pl-0

        // iPhoneSE | Vertical
          iPhoneSEH:mr-20 iPhoneSEH:ml-20

        // iPhoneSE | Landscape
          iPhoneSE:pl-0 iPhoneSE:pt-20

        // iPhoneXR | Vertical
          // none

        // iPhoneXR | Landscape
          iPhoneXR:pl-5 iPhoneXR:pt-20

        // iPhone12Pro | Vertical
          // none

        // iPhone12Pro | Landscape
          iPhone12Pro:pl-0 pb-10 iPhone12Pro:pt-20

        // Pixel5 | Landscape
          Pixel5:pl-0 Pixel5:pt-20

        // SamsungS8 | Landscape
        SamsungS8:pl-0 SamsungS8:pt-20
        
        // SamsungS20Ultra | Landscape
        SamsungS20Ultra:pl-0 SamsungS20Ultra:pt-20

        // GalaxyFold | Landscape
        GalaxyFold:pl-0 GalaxyFold:pt-20

        // iPhone8Plus | Landscape
        iPhone8Plus:pt-20 iPhone8Plus:pl-0
 
        
        "
        >
          <h1 className="title-font sm:text-4xl text-6xl mb-4 font-semibold text-gray-900 w-full xl:text-4xl lg:text-5xl lg:w-full font-['Inter']">
            Welcome to MedCare HealthCert
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4  drop-shadow-md text-sky-500 w-full xl:text-2xl lg:text-5xl lg:w-full font-['Courgette'] italic">
            Where We Care
          </h2>

          <p className="mb-8 leading-relaxed font-['Poppins'] overflow-hidden text-lg">
            RSVP to one of our orientations using the link below and come
            experience how you can learn while having fun! Congratulations on
            taking your first step in becoming a medical professional by gaining
            your certification and clinical experience!
          </p>
          <div
            className="
          
          // Base
          flex justify-center relative

      
          
          // 639px | sm
            sm:items-center sm:w-fit

          // iPhoneXR | Vertical  
            iPhoneXRH:w-fit

          // iPhone12Pro | Vertical
            iPhone12ProH:w-fit

          // Pixel5 | Vertical
            Pixel5H:w-fit

          // SamsungS8 | Vertical
            SamsungS8H:w-fit

          // SamsungS20Ultra | Vertical
            SamsungS20UltraH:w-fit

          // GalaxyFold | Vertical
          GalaxyFoldH:w-fit


          "
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button className="inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                Orientation RSVP
              </button>
            </a>
          </div>
        </div>

        {/* Img Div */}
        <div
          data-aos="fade-up"
          className="
        
        // Base
          w-4/5 mb-10

        // SUPERULTIMATE
          SUPERULTIMATE:w-6/12

        // 1880px | 3xl
          3xl:w-9/12

        // 1535px | 2xl 
          2xl:mb-0

        // 1023px | lg  
          lg:pt-6 lg:ml-10

        // 767px | md
          md:relative md:left-6

        // 639px | sm
          sm:left-0 sm:ml-0 sm:mr-20

      // Vertical
        // ----------
        // iPhone SE (Vertical)
        iPhoneSEH:hidden

        // iPhoneXR (Vertical)
        iPhoneXRH:hidden iPhoneXRH:pb-9

        // iPhone12Pro (Vertical)
        iPhone12ProH:hidden

        // Pixel5 (Vertical)
        Pixel5H:hidden

        // SamsungS8 (Vertical)
        SamsungS8H:hidden

        // SamsungS20Ultra (Vertical)
        SamsungS20UltraH:hidden SamsungS20UltraH:pb-14

        // GalaxyFold (Vertical)
        GalaxyFoldH:hidden


      // HORIZONTAL
      // ----------
        // iPhone SE (Horizontal)
        iPhoneSE:hidden

        // iPhoneXR (Horizontal)
        iPhoneXR:hidden iPhoneXRH:pb-9

        // iPhone12Pro (Horizontal)
        iPhone12Pro:hidden

        // Pixel5 (Horizontal)
        Pixel5:hidden

        // SamsungS8 (Horizontal)
        SamsungS8:hidden

        // SamsungS20Ultra (Horizontal)
        SamsungS20Ultra:hidden SamsungS20UltraH:pb-14

        // GalaxyFold (Horizontal)
        GalaxyFold:hidden
  
        "
        >
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="hero"
            src={header1}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Header;
