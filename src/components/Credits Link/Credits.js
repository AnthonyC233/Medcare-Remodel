import React, { useEffect } from 'react';

function Credits() {
  
    const CreditLink = [
      { pathway: '/credit'}
    ]

    return (
      <section className="
      
      text-gray-600 body-font overflow-x-hidden ml-20 mt-10 mb-2 sm:ml-0

      // PHONES
      SamsungS20Ultra:ml-0 
      SamsungS8:ml-0 
      Pixel5:ml-0 
      iPhone12Pro:ml-0 
      iPhoneXR:ml-0 
      iPhoneSE:ml-0 
      GalaxyFold:ml-0 
      GalaxyFoldH:ml-0 
      GalaxyFoldH:ml-0 
      iPhone8Plus:ml-0 
      
      ">
        <div className='flex items-center justify-center'>
          {CreditLink.map((link) => (
            <a href={`${link.pathway}`} target="_blank" rel="noreferrer">
              <p className='hover:text-sky-300 transition ease-in-out duration-300 font-[Poppins]'>© Copyright Images</p>
            </a>
          ))}
            
        </div>
      </section>
    );
  }
  
  export default Credits;
