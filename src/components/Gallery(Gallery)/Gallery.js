import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./gallery.css"

import picture1 from "../../assets/gallery-1.jpeg";
import picture2 from "../../assets/gallery-2.jpeg";
import picture3 from "../../assets/gallery-3.jpeg";
import picture4 from "../../assets/gallery-4.jpeg";
import picture5 from "../../assets/gallery-5.jpeg";
import picture6 from "../../assets/gallery-6.jpeg";
// import picture7 from "../../assets/gallery-7.jpeg";
// import picture8 from "../../assets/gallery-8.jpeg";
// import picture9 from "../../assets/gallery-9.jpeg";
// import picture10 from "../../assets/gallery-10.jpeg";
// import picture11 from "../../assets/gallery-11.jpeg";
// import picture12 from "../../assets/gallery-12.jpeg";
// import picture13 from "../../assets/gallery-13.jpeg";
// import picture14 from "../../assets/gallery-14.jpeg";
// import picture15 from "../../assets/gallery-15.jpeg";
// import picture16 from "../../assets/gallery-16.jpeg";

// Magnifying Glass Icon 
import magnifyingGlass from "../../assets/search.svg"

function Gallery1() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div data-aos="zoom-in-left"   class="
      
      container px-5 pb-24 pt-10 mx-auto
      
      ">

        {/* Title Container */}
        <div class="flex flex-col text-center ml-16 mb-10 place-content-center

        md:mt-10

        sm:ml-0

        iPhoneSE:mr-16

        iPhoneXR:mr-16

        iPhone12Pro:mr-16

        Pixel5:mr-16

        SamsungS8:mr-16

        SamsungS20Ultra:mr-16

        GalaxyFold:mr-16
        
        ">
          <h1 class="text-5xl xl:text-3xl font-semibold title-font mb-4 font-['Inter'] text-black">
            Check Our MedVamps At Work
          </h1>
        </div>

        {/* Flex Wrap Parent Container */}
        <div class="
        
        // Base
        flex flex-wrap ml-16 place-content-center

        sm:ml-0

        iPhoneSE:mr-16

        iPhoneXR:mr-16

        iPhone12Pro:mr-16

        Pixel5:mr-16

        SamsungS8:mr-16

        SamsungS20Ultra:mr-16

        GalaxyFold:mr-16
        
        ">

          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture1}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>
          
          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture2}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>

          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture3}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>

          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture4}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>

          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture5}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>

          {/* Img Container */}
          <div class="p-4">

            <div class="max-w-sm rounded overflow-hidden">

              {/* Div for overlay container */}
              <div class="
              
              flex relative transition-transform hover:scale-125 border-4 border-gray-900

              // For overlay
              gallery-overlay-container
              
              ">
                <img alt="gallery1" class="apple" src={picture6}></img>
                <div class="gallery-icon-container">
                  <img className="gallery-icon w-20" src={magnifyingGlass}></img>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Gallery1;