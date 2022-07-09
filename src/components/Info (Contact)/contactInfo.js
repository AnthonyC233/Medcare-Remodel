import React, { useState } from 'react';
import './contactInfo.css';

// Ionicon icons for row divs
import contactIcon1 from '../../assets/mail-outline.svg';
import contactIcon2 from '../../assets/call-outline.svg';

function contactInfo() {

    return (
        <section class="text-gray-600 body-font">
            <div class="
            
            // Base
                container pl-5 pr-20 pt-10 pb-24 mx-auto flex flex-wrap ml-20 

            // 1023px | lg
                lg:relative

            // 639px | sm
                sm:mx-16 sm:pl-0 sm:pt-0

            // iPhoneSE | Landscape
                iPhoneSE:mx-7

            // iPhoneXR | Landscape
                iPhoneXR:mx-7
        
            // iPhone12Pro | Landscape
                iPhone12Pro:mx-7
        
            // Pixel5 | Landscape
                Pixel5:mx-7
        
            // SamsungS8 | Landscape
                SamsungS8:mx-7
        
            // SamsungS20Ultra | Landscape
                SamsungS20Ultra:mx-7
            
            ">
                <div class="flex flex-wrap  justify-center">

                    {/* Content Container */}
                    <div class="
                    
                    // Base
                        2xl:w-auto pt-4 pb-4 pr-4 pl-4 
                    
                    // 1023px | lg
                        xl:w-5/6 xl:

                    // 639px | sm
                        sm:pl-0 sm:mr-11 sm:pt-0
                    

                    ">
                        <div class="
                        
                        // Base
                        flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col
                         

                        ">

                            {/* Icon Container */}
                            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0 bg-sky-200

                            // 639px | sm
                                sm:hidden
                            
                            ">
                                <img 
                                src={contactIcon1} 
                                alt="Email icon on contact page"
                                className="w-2/3">
                                </img>
                            </div>

                            {/* Text Container */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Email us</h2>
                                <h3 class="
                                
                                // Base
                                text-gray-900 text-base title-font font-medium mb-3
                                
                                // 639px | sm
                                sm:text-smaller
                                
                                // SamsungS8H | Vertical
                                SamsungS8H:text-xs

                                "><span className="
                                
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
                                
                                ">support<span className="">@medcarehealthcert.com</span></span></h3>
                                
                                <p class="leading-relaxed text-base">Have anything you'd like to know from our Team? Email us here for more info.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div class="
                    
                    // Base
                    2xl:w-auto pt-4 pb-4 pr-4 pl-4 
                    
                    // 1023px | lg
                    lg:w-full

                    // 639px | sm
                    sm:pl-0 sm:mr-11 sm:pt-0
                    
                    
                    ">
                        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">

                            {/* Icon Container */}
                            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0 bg-sky-200
                            
                            // 639px | sm
                                sm:hidden

                            ">
                                <img 
                                src={contactIcon2} alt="Phone icon on contact page"
                                className="w-2/3">
                                </img>
                            </div>

                            {/* Text Container */}
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-base title-font font-medium mb-3">Call us</h2>
                                <h3 class="
                                
                                // Base
                                text-gray-900 text-base title-font font-medium mb-3
                                
                                // 639px | sm
                                sm:text-smaller

                                // SamsungS8H | Vertical
                                SamsungS8H:text-xs
                                
                                "><span className="text-yellow-500">404-944-2346</span></h3>
                                <p class="leading-relaxed text-base">Need a 1-on-1 talk directly? You can hit our number here for any questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default contactInfo;