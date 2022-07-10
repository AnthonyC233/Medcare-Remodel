import React from 'react';
import './header.css';

// Images for the header change per page
import header4 from '../../assets/header-4.png';

function Header() {

  return (
    <section className="text-gray-600 body-font">
    <div
      className="
      // Base
      container mx-auto flex flex-row lg:flex-col items-center 

      pl-32 pt-10 pr-12

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


      // PHONES | VERTICAL
      // iPhoneSEH | Horizontal
      iPhoneSEH:mb-16

      // iPhoneXRH | Vertical
      iPhoneXRH:mb-16

      // iPhone12ProH | Vertical
      iPhone12ProH:mb-16

      //Pixel5H | Vertical
      Pixel5H:mb-16

      // SamsungS8H | Vertical
      SamsungS8H:mb-16

      // SamsungS20UltraH | Vertical
      SamsungS20UltraH:mb-16
      

"
    >
      {/* IMAGE DIV */}
      <div
        className="
      
      // Base
      max-w-lg  w-5/6 mb-10
   
      // 1535px | 2xl 
        2xl:mb-0


      // VERTICAL
      // iPhoneXRH | Vertical
        iPhoneXRH:pb-9

      // SamsungS20UltraH | Vertical
        SamsungS20UltraH:pb-14


      // LANDSCAPE
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
      
      "
      >
        <img
          className="object-cover object-center rounded GalaxyFoldH:hidden"
          alt="hero"
          src={header4}
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
          Contact Us
        </h1>
        <p className="mb-3 leading-relaxed font-['Mingzat'] overflow-hidden">
        Have any questions for us? If you're interested in our program and or have any remarks or concerns, let us know! Our Team will get back to you as soon as possible.
        </p>

        {/* Button Div */}
        <div
          className="
         
        // Base
        flex justify-center relative mt-5
        
        // 639px | sm
          sm:items-center sm:w-fit

        // PHONES | VERTICAL
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
            <button className="
            
            // Base
            inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg
            
            ">
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





//  <section class="text-gray-600 body-font">
//       <div class="
      
//       // Base
//       container mx-auto flex px-5 pt-10 pb-0 items-center justify-center flex-col b

//       // 767px | md
//       md:pt-2

//       // 639px | sm
//       sm:pt-10 sm:mt-24 sm:pb-0

//       // iPhoneSE | Landscape
//         iPhoneSE:mt-24

//       // iPhoneXR | Landscape
//         iPhoneXR:mt-24

//       // iPhone12Pro | Landscape
//         iPhone12Pro:mt-24

//       // Pixel5 | Landscape
//         Pixel5:mt-24

//       // SamsungS8 | Landscape
//         SamsungS8:mt-24

//       // SamsungS20Ultra | Landscape
//         SamsungS20Ultra:mt-24

//       ">

//         <div className='

        
//         // Base
//           w-2/6 top-0

//         // 767px | md
//           md:w-3/6

//         // iPhoneSE | Landscape
//           iPhoneSE:hidden

//         // iPhoneXR | Landscape
//           iPhoneXR:hidden

//         // iPhone12Pro | Landscape
//           iPhone12Pro:hidden

//         // Pixel5 | Landscape
//           Pixel5:hidden

//         // SamsungS8 | Landscape
//           SamsungS8:hidden

//         // SamsungS20Ultra | Landscape
//           SamsungS20Ultra:hidden

//         '>
//         {/* Img */}
//           <img class="object-cover object-center rounded" 
//           alt="hero" 
//           src={header4}>
//           </img>
//         </div>

//         {/* Text Div (Parent to Button Div) */}

//         <div class="text-center w-2/3 ">
//           <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900 font-['Inter']">Contact Us</h1>
//           <p class="
          
//           mb-8 leading-relaxed

//           // iPhoneSE | Landscape
//             iPhoneSE:mb-0

//           // iPhoneXR | Landscape
//             iPhoneXR:mb-0
    
//           // iPhone12Pro | Landscape
//             iPhone12Pro:mb-0
    
//           // Pixel5 | Landscape
//             Pixel5:mb-0
    
//           // SamsungS8 | Landscape
//             SamsungS8:mb-0
    
//           // SamsungS20Ultra | Landscape
//             SamsungS20Ultra:mb-0
          
//           ">Have any questions for us? If you're interested in our program and or have any remarks or concerns, let us know! Our Team will get back to you as soon as possible.</p>

//         </div>
//       </div>

      
//     </section> 