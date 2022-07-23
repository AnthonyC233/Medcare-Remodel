import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './serviceGrid.css';

function ServiceHeader() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="body-font text-lg overflow-hidden service-header-container h-9/12 w-full
    
      sm:pt-20
      "
    >
      <div
        className="flex justify-end items-center flex-grow h-9/12 w-full "
        data-aos="fade-up"
      >
        {/* TEXT DIV */}
        <div
          className="text-end w-1/2 p-12 
        
          almostmd:w-2/3
          sm:w-full
          2xl:w-2/3
          almosttherelg:w-2/3
          almostmd:w-11/12
          md:w-2/3
          sm:pt-4
          sm:w-2/3

          // PHONES
          iPhoneSE:pt-32 
          iPhoneSEH:text-start iPhoneSEH:pl-0
          iPhoneXR:pt-32
          iPhoneXRH:text-start iPhoneXRH:pl-0
          iPhone12Pro:pt-32
          iPhone12ProH:text-start iPhone12ProH:pl-0
          Pixel5:pt-32
          Pixel5H:text-start Pixel5H:pl-0
          SamsungS8:pt-32
          SamsungS8H:text-start SamsungS8H:pl-0
          SamsungS20Ultra:pt-32
          SamsungS20UltraH:text-start SamsungS20UltraH:pl-0
          GalaxyFold:pt-32
          GalaxyFoldH:text-start GalaxyFoldH:pl-0 GalaxyFoldH:p-5
          "
        >
          <h1
            className="title-font text-6xl mb-4 font-semibold text-gray-900 w-full font-['Inter']
            
            lg:text-5xl
            "
          >
            Our Services
          </h1>
          <h2
            className="title-font text-3xl mb-4 font-medium drop-shadow-md text-amber-400 w-full font-['Courgette'] italic
            
            sm:text-4xl 
            lg:text-5xl
            xl:text-2xl 
            "
          >
            MedCare HealthCert Where We Care
          </h2>
          <p className="mb-4 leading-relaxed font-['Mingzat'] text-lg sm:text-base text-white drop-shadow-md">
            All the titles offered at MedCare HealthCert include: study
            materials for the title of your choice, unlimited hands-on
            clinicals, exam review and preparation. Once one obtains their
            nationally state-wide certification, we assist you in becoming
            familiar with performing medical procedures. Our titles are very
            flexible. We understand the hassle of balancing a full schedule,
            whether it is a hectic class schedule or a full time employment. We
            are here to help you achieve your goals without having to sacrifice your
            time and finances.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeN5gkyLOgwY10k-v8oOXCGx2rJiw_BosrU5DJtsmaeWI25EQ/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="inline-flex text-black bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
              Orientation RSVP
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceHeader;
