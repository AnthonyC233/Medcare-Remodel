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
      className="text-gray-600 body-font text-lg overflow-hidden service-header-container h-9/12 w-full
    
    sm:pt-20
    
    "
    >
      <div
        className="flex justify-end items-center flex-grow h-9/12 w-full"
        data-aos="fade-up"
      >
        {/* TEXT DIV */}
        <div
          className="text-end w-1/2 p-12 
        
          almostmd:w-2/3
          sm:w-full
          2xl:w-2/3
          almosttherelg:w-5/6
          almostmd:w-11/12
          sm:pt-12
          sm:w-full
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
            className="title-font text-3xl mb-4 font-semibold drop-shadow-md text-amber-400 w-full font-['Mingzat'] italic
            
            sm:text-4xl 
            lg:text-5xl
            xl:text-2xl 
            "
          >
            Where We Care
          </h2>
          <p className="mb-4 leading-relaxed font-['Mingzat'] sm:text-base">
            All the titles offered at MedCare HealthCert include: study
            materials for the title of your choice, unlimited hands-on
            clinicals, exam review and preparation. Once one obtains their
            nationally state-wide certification, we assist you in becoming
            familiar with performing medical procedures. Our titles are very
            flexible. We understand the hassle of balancing a full schedule
            whether it is a hectic class schedule or a full time employment. We
            are here to help achieve your goals without having to sacrifice your
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
