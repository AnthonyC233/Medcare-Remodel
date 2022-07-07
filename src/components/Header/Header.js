import React from 'react';
import './header.css';

// Images for the header change per page
import header1 from '../../assets/header-1.png';

function Header() {

  return (
    <section class="text-gray-600 body-font">
      <div class="

      // Base
      container mx-auto flex px-5 pt-24 pb-24 flex-row lg:flex-col items-center

      // 1023px | lg
      lg:pb-0

      // 639px | sm
        sm:pb-0

      
      ">

        {/* Text Div */}
        <div class="
        
        // Base
          flex-grow w-1/2 pl-24 flex flex-col items-center text-center 

        // 1535px | 2xl 
          2xl:items-start 2xl:text-left

        // 1023px | lg
          lg:w-11/12

        // 639px | sm
          sm:pl-0

        // iPhoneSE | Vertical
          iPhoneSEH:mr-20 iPhoneSEH:ml-20

        // iPhoneSE | Landscape
          iPhoneSE:pl-0

        // iPhoneXR | Vertical
          // none

        // iPhoneXR | Landscape
          iPhoneXR:pl-5

        // iPhone12Pro | Vertical
          // none

        // iPhone12Pro | Landscape
          iPhone12Pro:pl-0 pb-10

        // Pixel5 | Landscape
          Pixel5:pl-0

        // SamsungS8 | Landscape
        SamsungS8:pl-0
        
        // SamsungS20Ultra | Landscape
        SamsungS20Ultra:pl-0

        
        ">
          <h1 class="title-font sm:text-4xl text-6xl mb-4 font-semibold text-gray-900 w-full lg:text-5xl lg:w-full font-['Inter']">Welcome to MedCare HealthCert
          </h1>
          <p class="mb-8 leading-relaxed font-['Mingzat']">RSVP to one of our orientations on the link below and come experience how you can learn while having fun. 
          Congratulations on taking your first step in becoming a medical professional by gaining your certification and clinical experience.</p>
          <div class="
          
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


          ">
            <button class="inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">Orientation RSVP</button>
          </div>
        </div>

        {/* Img Div */}
        <div class="
        
        // Base
        max-w-lg  w-5/6 mb-10

        // 1535px | 2xl 
          2xl:mb-0

        // iPhoneXR | Vertical
          iPhoneXRH:pb-9

        // SamsungS20Ultra | Vertical
          SamsungS20UltraH:pb-14
        
        ">
          <img class="object-cover object-center rounded" alt="hero" src={header1}></img>
        </div>
      </div>
    </section>
  );
}

export default Header;


// min-width vs max-width (Breakpoints)
// md === 2xl
// 