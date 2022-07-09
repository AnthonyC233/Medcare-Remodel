import React from 'react';
import './header.css';

// Images for the header change per page
import header3 from '../../assets/header-3.png';

function Header() {

  return (

    <section class="text-gray-600 body-font">
      <div class="
      
      // Base
      container mx-auto flex px-5 pt-10 pb-0 items-center justify-center flex-col b

      // 767px | md
      md:pt-2

      // 639px | sm
      sm:pt-10 sm:mt-24 sm:pb-0

      // iPhoneSE | Landscape
        iPhoneSE:mt-24

      // iPhoneXR | Landscape
        iPhoneXR:mt-24

      // iPhone12Pro | Landscape
        iPhone12Pro:mt-24

      // Pixel5 | Landscape
        Pixel5:mt-24

      // SamsungS8 | Landscape
        SamsungS8:mt-24

      // SamsungS20Ultra | Landscape
        SamsungS20Ultra:mt-24

      ">

        {/* Text Div (Parent to Button Div) */}

        <div class="text-center w-2/3 ">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900 font-['Inter']">Gallery</h1>
          <p class="
          
          mb-8 leading-relaxed

          // iPhoneSE | Landscape
            iPhoneSE:mb-0

          // iPhoneXR | Landscape
            iPhoneXR:mb-0
    
          // iPhone12Pro | Landscape
            iPhone12Pro:mb-0
    
          // Pixel5 | Landscape
            Pixel5:mb-0
    
          // SamsungS8 | Landscape
            SamsungS8:mb-0
    
          // SamsungS20Ultra | Landscape
            SamsungS20Ultra:mb-0
          
          ">Want to see our Med Vamps at work? Do you? Really?</p>

        </div>

        <div className='

        
        // Base
          w-2/6 top-0

        // 767px | md
          md:w-3/6

        // iPhoneSE | Landscape
          iPhoneSE:hidden

        // iPhoneXR | Landscape
          iPhoneXR:hidden

        // iPhone12Pro | Landscape
          iPhone12Pro:hidden

        // Pixel5 | Landscape
          Pixel5:hidden

        // SamsungS8 | Landscape
          SamsungS8:hidden

        // SamsungS20Ultra | Landscape
          SamsungS20Ultra:hidden

        '>
        {/* Img */}
          <img class="object-cover object-center rounded" 
          alt="hero" 
          src={header3}>
          </img>
        </div>

      </div>

      
    </section>
  );
}

export default Header;