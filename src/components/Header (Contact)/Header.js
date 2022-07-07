import React from 'react';
import './header.css';

// Images for the header change per page
import header4 from '../../assets/header-4.png';

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
      
      ">

        <div className='
        
        // Base
          w-2/6 top-0

        // 767px | md
          md:w-3/6

        '>
        {/* Img */}
          <img class="object-cover object-center rounded" 
          alt="hero" 
          src={header4}>
          </img>
        </div>

        {/* Text Div (Parent to Button Div) */}
        <div class="text-center w-2/3 ">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900 font-['Inter']">Contact Us</h1>
          <p class="mb-8 leading-relaxed">Have any questions for us? If you're interested in our program and or have any remarks or concerns, let us know! Our Team will get back to you as soon as possible.</p>
        </div>
      </div>

      
    </section>
  );
}

export default Header;