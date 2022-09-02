import React from 'react';
import './award.css';
import AwardCarousel from '../Award (Carousel)/AwardCarousel.js';

function Award() {
  return (
    <section className="overflow-x-hidden">
      <div
        className="
  
          // BASE
          pl-32 py-2 pr-12 container mx-auto flex flex-row xl:flex-col items-center bg-yellow-100 overflow-x-hidden overflow-y-hidden

          // XL SCREEN
          xl:pt-7
  
          // SMALL SCREEN
          sm:pl-12
          sm:pt-14
  
          // XS SCREEN
          xsm:pl-0
          xsm:pr-0
  
          // XXS SCREEN
          xxsm:pl-0
          xxsm:pr-0
  
          // PHONES
          iPhoneSE:pl-12 iPhoneSE:flex-row-reverse
          iPhoneXR:pl-12 iPhoneXR:flex-row-reverse
          iPhone12Pro:pl-12 iPhone12Pro:flex-row-reverse
          Pixel5:pl-12 Pixel5:flex-row-reverse
          SamsungS8:pl-12 SamsungS8:flex-row-reverse
          SamsungS20Ultra:pl-12 SamsungS20Ultra:flex-row-reverse
          GalaxyFold:pl-12 GalaxyFold:flex-row-reverse
          iPadAir:pl-24 iPadAir:flex-row-reverse
          iPadAirH:pl-24 iPadAirH:flex-row-reverse
          iPadMini:pl-24 iPadMini:flex-row-reverse
          iPadMiniH:pl-24 iPadMiniH:flex-row-reverse
          iPhone8Plus:pl-24 iPhone8Plus:flex-row-reverse

          "
      >
        {/* TEXT DIV */}
        <div
          className="
              // BASE
              flex-grow w-1/2 flex flex-col items-center text-center
  
              // SMALL
              sm:pl-0
              xsm:px-5
    
              // LARGE SCREEN
              lg:w-11/12
              lg:pl-0
    
              // XL SCREEN
              xl:pl-0
              xl:w-full
              
              // 2XL SCREEN
              2xl:items-start 
              2xl:items-center
    
              // PHONE
              iPhoneSE:pl-0
              iPhoneSEH:pl-10 iPhoneSEH:pr-10
              iPhoneXR:pl-5
              iPhoneXRH:p-0
              iPhone12Pro:pl-0
              iPhone12ProH:p-10          
              Pixel5:pl-0
              Pixel5H:pl-10 Pixel5H:pr-10
              SamsungS8:pl-0
              SamsungS8H:pl-8 SamsungS8H:pr-8
              SamsungS20Ultra:pl-0
              SamsungS20UltraH:p-0
              GalaxyFold:pl-0
              GalaxyFoldH:p-10
              iPhone8Plus:p-10
              "
        >
          <h1
            className="
            
            // BASE
            mb-5 text-3xl font-semibold font-['Courgette']
            
            // PHONE
            iPhoneSE:text-2xl iPhoneSE:
            
            "
          >
            We're Gapping The Bridge To Your Medical Career
          </h1>
          <h2
            className="
            
            // BASE
            leading-relaxed font-['Courgette'] overflow-hidden text-lg 
            
            // PHONES
            
            "
          >
            Come see us on{' '}
            <a
              class="one"
              href="https://www.guidetogwinnett.com/lawrenceville/education-childcare/medcare-healthcert"
            >
              Guide to Gwinnett!
            </a>
          </h2>
        </div>

        {/* AWARD IMG CONTAINER */}
        <div
          className="
      
            // BASE
            flex items-center

            SUPERULTIMATE:w-1/12

            3xl:w-3/12

            2xl:w-4/12

            w-2/12

            // XL SCREEN
            xl:pt-12 xl:pl-10

            almostlg:pl-2 pr-2

            // SMALL SCREEN
            sm:pl-0

            // PHONE
            iPhoneSE:items-end iPhoneSE:pl-0 iPhoneSE:pt-0
            iPhoneSEH:pt-5 iPhoneSEH:w-5/12
            iPhoneXR:items-end iPhoneXR:pl-0 iPhoneXR:pt-0
            iPhoneXRH:pt-5 iPhoneXRH:w-7/12
            iPhone12Pro:items-end iPhone12Pro:pl-0 iPhone12Pro:pt-0
            iPhone12ProH:pt-0 iPhone12ProH:w-6/12
            Pixel5:items-end Pixel5:pl-0 Pixel5:pt-0
            Pixel5H:pt-5 Pixel5H:w-5/12  
            SamsungS8:items-end SamsungS8:pl-0 SamsungS8:pt-0
            SamsungS8H:pt-5 SamsungS8H:w-5/12
            SamsungS20Ultra:items-end SamsungS20Ultra:pl-0 SamsungS20Ultra:pt-0
            SamsungS20UltraH:pt-5 SamsungS20UltraH:w-7/12
            GalaxyFold:items-end GalaxyFold:pl-0 GalaxyFold:pt-0
            GalaxyFoldH:w-5/12 GalaxyFoldH:pt-0
            iPadAir:items-end iPadAir:pl-0 iPadAir:pt-0
            iPadAirH:items-end iPadAirH:pl-0 iPadAirH:pt-0
            iPadMini:items-end iPadMini:pl-0 iPadMini:pt-0
            iPadMiniH:items-end iPadMiniH:pl-0 iPadMiniH:pt-0
            iPhone8Plus:items-end iPhone8Plus:pl-0 iPhone8Plus:pt-0

              "
        >
          <div class="App">
            <AwardCarousel></AwardCarousel>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}

export default Award;
