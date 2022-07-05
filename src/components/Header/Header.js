import React from 'react';
import header1 from '../../assets/header-1.png';

function Header() {
  return (
    <section>
      <div className="header-link-section grid grid-cols-2 lg:grid-cols-1">

        {/* Welcome Text Div */}
        <div className="

        // 1920px - 1024px
        py-20 pl-28 flex items-center justify-center flex-col text-center hi lg:bg-amber-200

        // 1023px - 640px (lg)
        lg:px-10 lg:pt-10 lg:pb-0 lg:py-20 lg:pl-28

        // 639px (sm)
        
        ">
          <h1 className="pb-5 text-3xl font-medium font-['Mingzat']">Welcome to MedCare HealthCert</h1>
          <p className="
          
          // 1920px - 1024px
          pb-5

          // 1023px - 640px (lg)
          lg:pb-0
          
          ">
          RSVP to one of our orientations on the link below and come experience how you can learn while having fun. Congratulations on taking your first step in becoming a medical professional by gaining your certification and clinical experience.
          </p>
          <button className="
          
          // Base
          px-6 bg-galleryButton hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full

          // 1023px - 640px (lg)
          lg:mt-7 lg:mb-3
          
          ">
            Orientation RSVP
          </button>
        </div>


        {/* Welcome Img Div */}
        <div className="header-image">
          <img
            src={header1}
            alt="gallery-home-link"
            className="object-contain md:object-scale-down"
          ></img>
        </div>
       
      </div>
    </section>
  );
}

export default Header;
