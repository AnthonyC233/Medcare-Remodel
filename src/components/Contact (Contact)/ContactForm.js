import React from 'react';
import './contact.css';

// NO MEDIA QUERY ON THIS AS OF 7/7/22, 9:09PM
function ContactForm() {
  return (
    <section className="text-gray-600 body-font relative">
      <div
        className="
      
      // Base
      absolute inset-0 bg-gray-300 contact-map-container pl-20
  
      // 639px | sm
      // sm:pl-0 

      // LANDSCAPE
      // iPhoneSE | Landscape
        iPhoneSE:pl-0

      // iPhoneXR | Landscape
        iPhoneXR:pl-0

      // iPhone12Pro | Landscape 
        iPhone12Pro:pl-0

      // Pixel5 | Landscape
        Pixel5:pl-0

      // SamsungS8 | Landscape
        SamsungS8:pl-0

      // SamsungS20Ultra | Landscape
        SamsungS20Ultra:pl-0

      // GalaxyFold
        GalaxyFold:pl-0

      // iPhone8Plus
       iPhone8Plus:pl-0

      "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.9168126062208!2d-83.99714321683736!3d33.95613758970722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5be8c90036d15%3A0x68c57d7744061e4d!2sMedCare%20HealthCert!5e0!3m2!1sen!2sus!4v1657239802942!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      {/* InputField Container */}
      <div className="container px-5 py-60 mx-auto flex">
        {/* <InputField /> */}
      </div>
    </section>
  );
}

export default ContactForm;
