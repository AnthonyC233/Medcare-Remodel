import React from 'react';
import header2 from '../../assets/header-2.png';

function ServiceHeader() {
  return (
    <section className="text-gray-600 body-font">
      <div
        className="
        // Base
        container mx-auto flex flex-row lg:flex-col items-center 

        pl-32 pt-20 pr-12

        sm:pl-12
        sm:pt-32

        xsm:pl-0
        xsm:pr-0

        xxsm:pl-0
        xxsm:pr-0

        // PHONES | LANDSCAPE
        SamsungS20Ultra:pl-12
        SamsungS8:pl-12
        Pixel5:pl-12
        iPhone12Pro:pl-12
        iPhoneXR:pl-12
        iPhoneSE:pl-12 
        GalaxyFold:pl-12

        GalaxyFoldH:p-2
        GalaxyFoldH:pt-10


        

  "
      >
        {/* IMAGE DIV */}
        <div
          className="
        
        // Base
        max-w-lg  w-5/6 mb-10
     
        // 1535px | 2xl 
          2xl:mb-0

        // iPhoneXR | Vertical
          iPhoneXRH:pb-9

        // SamsungS20Ultra | Vertical
          SamsungS20UltraH:pb-14
        
        "
        >
          <img
            className="object-cover object-center rounded GalaxyFoldH:hidden"
            alt="hero"
            src={header2}
          ></img>
        </div>

        {/* Text Div */}
        <div
          className="
        // Base
          flex-grow w-1/2 pl-24 flex flex-col items-center text-center 
          lg:p-12

        // 1535px | 2xl 
          2xl:items-start 2xl:text-left

        // 1023px | lg
          lg:w-11/12

        // 639px | sm
          sm:pl-0

        // iPhoneSE
          iPhoneSE:pl-0
          iPhoneSEH:p-0

        // iPhoneXR
          iPhoneXR:pl-5
          iPhoneXRH:p-0

        // iPhone12Pro
          iPhone12Pro:pl-0
          iPhone12ProH:p-0          

        // Pixel5
          Pixel5:pl-0
          Pixel5H:p-0

        // SamsungS8
        SamsungS8:pl-0
        SamsungS8H:p-0
        
        // SamsungS20Ultra
        SamsungS20Ultra:pl-0
        SamsungS20UltraH:p-0

        // GalaxyFold
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
