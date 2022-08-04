import React, { useState } from 'react';
import './contactInfo.css';

// Ionicon icons for row divs
import contactIcon1 from '../../assets/mail-outline.svg';
import contactIcon2 from '../../assets/call-outline.svg';
import contactIcon3 from '../../assets/earth-outline.svg';

function contactInfo() {
  return (
    <section className="text-gray-600 body-font">
      <div
        data-aos="zoom-in-left"
        className="
      
      container 2xl:pt-10 px-5 pb-24 pt-0 mx-auto
      
      "
      >
        {/* Title Container */}
        <div
          className="flex flex-col text-center ml-16 mb-10 place-content-center



        sm:ml-0 sm:mt-0

        iPhoneSE:mr-16

        iPhoneXR:mr-16

        iPhone12Pro:mr-16

        Pixel5:mr-16

        SamsungS8:mr-16

        SamsungS20Ultra:mr-16

        GalaxyFold:mr-16

        iPhone8Plus:mr-16
        
        "
        >
          <h1 className="text-5xl xl:text-3xl font-semibold title-font mb-4 font-['Inter'] text-black">
            Need help?
          </h1>
        </div>

        {/* Flex Wrap Parent Container */}
        <div
          className="
        
        // Base
        flex flex-wrap ml-16 place-content-center

        sm:ml-14

        iPhoneSE:mr-16

        iPhoneXR:mr-16

        iPhone12Pro:mr-16

        Pixel5:mr-16

        SamsungS8:mr-16

        SamsungS20Ultra:mr-16

        GalaxyFold:mr-16        

        iPhone8Plus:mr-16
        
        "
        >
          {/* Content Container 1 */}
          <div
            className="
                    
                    // Base
                    pt-4 pb-4 pr-4 pl-4 

                    // 1502px | xxl
                    w-2/5
                    
                    // 1023px | lg
                    lg:w-full

                    // 639px | sm
                        sm:pl-0 sm:mr-11 sm:pt-0

                    "
          >
            <div
              className="
                        
                        // Base
                        flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col

                        // GalaxyFoldH | Vertical
                          GalaxyFoldH:p-8 

                        "
            >
              {/* Icon Container */}
              <div
                className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0 bg-sky-200

                            // 639px | sm
                                sm:hidden
                            
                            "
              >
                <img
                  src={contactIcon1}
                  alt="Email icon on contact page"
                  className="w-2/3"
                ></img>
              </div>

              {/* Text Container */}
              <div className="flex-grow GalaxyFoldH:overflow-hidden">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Email us
                </h2>
                <h3
                  className="
                                
                                // Base
                                text-gray-900 text-base title-font font-medium mb-3
                                
                                // 639px | sm
                                sm:text-smaller
                                
                                // SamsungS8H | Vertical
                                SamsungS8H:text-xs

                                "
                >
                  <span
                    className="
                                
                                text-yellow-500 
                                
                                // iPhoneSEH | Vertical
                                    iPhoneSEH:flex iPhoneSEH:flex-wrap

                                // iPhoneXRH | Vertical
                                    iPhoneXRH:flex iPhoneXRH:flex-wrap

                                // iPhone12ProH | Vertical
                                    iPhone12ProH:flex iPhone12ProH:flex-wrap

                                // Pixel5H | Vertical
                                    Pixel5H:flex Pixel5H:flex-wrap

                                // SamsungS8H | Vertical
                                    SamsungS8H:flex SamsungS8H:flex-wrap

                                // SamsungS20UltraH | Vertical
                                    SamsungS20UltraH:flex SamsungS20UltraH:flex-wrap

                                // GalaxyFoldH | Vertical
                                    GalaxyFoldH:flex GalaxyFoldH:flex-wrap
                                
                                "
                  >
                    support@<span>medcare</span>
                    <span>healthcert.com</span>
                  </span>
                </h3>

                <p className="leading-relaxed text-base">
                  Have anything you'd like to know from our Team? Email us here
                  for more info.
                </p>
              </div>
            </div>
          </div>

          {/* Content Container 2 */}
          <div
            className="
                    
                    // Base
                     pt-4 pb-4 pr-4 pl-4 
                    
                     // 1502px | xxl
                     w-2/5

                     // 1023px | lg
                     lg:w-full
                   
                    // 639px | sm
                    sm:pl-0 sm:mr-11 sm:pt-0

                    "
          >
            <div
              className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col                         
              
              // GalaxyFoldH | Vertical
                GalaxyFoldH:p-10"
            >
              {/* Icon Container */}
              <div
                className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0 bg-sky-200
                            
                            // 639px | sm
                                sm:hidden

                            "
              >
                <img
                  src={contactIcon2}
                  alt="Phone icon on contact page"
                  className="w-2/3"
                ></img>
              </div>

              {/* Text Container */}
              <div className="flex-grow">
                <h2 className="text-gray-900 text-base title-font font-medium mb-3">
                  Text us
                </h2>
                <h3
                  className="
                                
                                // Base
                                text-gray-900 text-base title-font font-medium mb-3
                                
                                // 639px | sm
                                sm:text-smaller

                                // SamsungS8H | Vertical
                                SamsungS8H:text-xs
                                
                                "
                >
                  <span className="text-yellow-500">404-944-2346</span>
                </h3>
                <p className="leading-relaxed text-base">
                  Need a 1-on-1 talk directly? You can text our student hotline number above.
                </p>
              </div>
            </div>
          </div>

          {/* Content Container 3 */}
          <div
            className="
                    
                    // Base
                     pt-4 pb-4 pr-4 pl-4 
                    
                     // 1502px | xxl
                     w-2/5

                     // 1023px | lg
                     lg:w-full      

                    // 639px | sm
                    sm:pl-0 sm:mr-11 sm:pt-0
                    
                    "
          >
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              {/* Icon Container */}
              <div
                className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0 bg-sky-200
                            
                            // 639px | sm
                                sm:hidden

                            "
              >
                <img
                  src={contactIcon3}
                  alt="Phone icon on contact page"
                  className="w-2/3"
                ></img>
              </div>

              {/* Text Container */}
              <div className="flex-grow">
                <h2 className="text-gray-900 text-base title-font font-medium mb-3">
                  Find us
                </h2>
                <h3
                  className="
                                
                                // Base
                                text-gray-900 text-base title-font font-medium mb-3
                                
                                // 639px | sm
                                sm:text-smaller

                                // SamsungS8H | Vertical
                                SamsungS8H:text-xs
                                
                                "
                >
                  <span className="text-yellow-500">
                    250 Langley Dr # 1312, Lawrenceville, GA 30046
                  </span>
                </h3>
                <p className="leading-relaxed text-base">
                  Come check out our facility here in Georgia. New students are
                  always welcome!{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contactInfo;
