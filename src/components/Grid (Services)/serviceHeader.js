import React from 'react';
import header2 from '../../assets/header-2.png';

function ServiceHeader() {
  return (
    <section className="text-gray-600 body-font">
      <div
        className="container mx-auto flex flex-row items-center 

        // BASE
        pl-32 pt-20 pr-12

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
          className="
        
          // BASE
          max-w-lg w-5/6 mb-10
      
          // 2XL SCREEN
          2xl:mb-0

          // PHONES
          iPhoneXRH:pb-9
          SamsungS20UltraH:pb-14         
          "
        >
          <img
            className="object-cover object-center rounded GalaxyFoldH:hidden GalaxyFold:hidden"
            alt="hero"
            src={header2}
          ></img>
        </div>

        {/* TEXT DIV */}
        <div
          className="flex-grow flex flex-col items-center text-center

          // BASE
          w-1/2 pl-24

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
            className="flex justify-center relative
        
            // SMALL SCREEN
            sm:items-center 
            sm:w-fit

            // PHONES 
            iPhoneXRH:w-fit
            iPhone12ProH:w-fit
            Pixel5H:w-fit
            SamsungS8H:w-fit
            SamsungS20UltraH:w-fit
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
      </div>
    </section>
  );
}

export default ServiceHeader;
