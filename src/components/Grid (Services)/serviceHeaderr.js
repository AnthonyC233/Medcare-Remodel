import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import header2 from '../../assets/services-header.jpg';
import './serviceGrid.css';

function ServiceHeader() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="text-gray-600 body-font service-grid-header sm:bg-white 
    
    // PHONES | LANDSCAPE
      SamsungS20Ultra:pl-12 SamsungS20Ultra:bg-white
      SamsungS8:pl-12 SamsungS8:bg-white
      Pixel5:pl-12 Pixel5:bg-white
      iPhone12Pro:pl-12 iPhone12Pro:bg-white
      iPhoneXR:pl-12 iPhoneXR:bg-white
      iPhoneSE:pl-12 iPhoneSE:bg-white
      GalaxyFold:pl-12 GalaxyFold:bg-white
      
    "
    >
      <div
        data-aos="fade-up"
        className="container mx-auto flex flex-row items-center 

        // BASE
        pl-32 pt-10 pb-24 pr-12

        // SMALL SCREEN
        sm:pl-12
        sm:pt-32

        // XS SCREEN
        xsm:pl-0
        xsm:pr-0

        // XXS SCREEN
        xxsm:pl-0
        xxsm:pr-0

        // LARGE SCREEN
        lg:flex-col 

        // PHONES
        SamsungS20Ultra:pl-12
        SamsungS20Ultra:pt-32
        SamsungS8:pl-12
        SamsungS8:pt-28
        Pixel5:pl-12
        Pixel5:pt-28
        iPhone12Pro:pl-12
        iPhone12Pro:pt-28
        iPhoneXR:pl-12
        iPhoneXR:pt-32
        iPhoneSE:pl-12 
        iPhoneSE:pt-28 
        GalaxyFold:pl-12
        GalaxyFold:pt-20
        GalaxyFoldH:p-5
        GalaxyFoldH:pt-10
        "
      >
        {/* IMAGE DIV */}
        <div
          className="services-header-container
        
          // BASE
          w-full mb-10
      
          // 2XL SCREEN
          2xl:mb-0

          // PHONES
          iPhoneXRH:pb-9
          SamsungS20UltraH:pb-14         
          "
        >
          <img
            className="GalaxyFoldH:hidden GalaxyFold:hidden"
            alt="hero"
            src={header2}
          ></img>
        </div>

        {/* TEXT DIV */}
        <div
          className="flex-grow flex flex-col items-center text-center

          // BASE
          w-1/2 pl-20

          // 1880px | 3xl 
          3xl:text-left 3xl:items-start

          // SMALL SCREEN
          sm:pl-0

          // LARGE SCREEN
          lg:p-12
          lg:w-11/12

          // 2XL SCREEN 
          2xl:items-start 
          2xl:text-left

          // PHONES
          iPhoneSE:pl-0
          iPhoneSEH:p-10
          iPhoneXR:pl-5
          iPhoneXRH:p-0
          iPhone12Pro:pl-0
          iPhone12ProH:p-10        
          Pixel5:pl-0
          Pixel5H:p-10
          SamsungS8:pl-0
          SamsungS8H:p-10
          SamsungS20Ultra:pl-0
          SamsungS20UltraH:p-0
          GalaxyFold:pl-0
          GalaxyFoldH:p-0
          "
        >
          <h1
            className="title-font sm:text-4xl text-6xl mb-4 font-semibold text-gray-900 w-full lg:text-5xl lg:w-full font-['Inter']
          "
          >
            Our Services
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-semibold drop-shadow-md text-sky-500 w-full xl:text-2xl lg:text-5xl lg:w-full font-['Mingzat'] italic">
            Where We Care
          </h2>
          <p className="mb-3 leading-relaxed font-['Mingzat'] overflow-hidden">
            All the titles offered at MedCare HealthCert include: study
            materials for the title of your choice, unlimited hands-on
            clinicals, exam review and preparation. Once one obtains their
            nationally state-wide certification, we assist you in becoming
            familiar with performing medical procedures. Our titles are very
            flexible. We understand the hassle of balancing a full schedule
            whether it is a hectic class schedule or a full time employment. We
            are here to help achieve your goals without having to sacrifice your
            time and finances.
          </p>

          {/* BUTTON DIV */}
          <div
            className="
          
          // Base
          flex justify-center relative mt-5
          
          // 639px | sm
            sm:items-center sm:w-fit

          /// PHONES | VERTICAL
          // iPhoneSEH | Vertical
            iPhoneSEH:mt-5
          
          // iPhoneXR | Vertical  
            iPhoneXRH:w-fit iPhoneXRH:mt-7
  
          // iPhone12Pro | Vertical
            iPhone12ProH:w-fit iPhone12ProH:mt-7
  
          // Pixel5 | Vertical
            Pixel5H:w-fit Pixel5H:mt-7
  
          // SamsungS8 | Vertical
            SamsungS8H:w-fit SamsungS8H:mt-7
  
          // SamsungS20Ultra | Vertical
            SamsungS20UltraH:w-fit SamsungS20UltraH:mt-7
  
          // GalaxyFold | Vertical
          GalaxyFoldH:w-fit GalaxyFoldH:mt-7


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
      </div>
    </section>
  );
}

export default ServiceHeader;
