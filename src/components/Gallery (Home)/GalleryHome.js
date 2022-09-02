import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GalleryCarousel from '../Gallery (Homecarousel)/GalleryCarousel';

// PATH TO GALLERY PAGE FROM BUTTON
import { useNavigate } from 'react-router-dom';

function GalleryHome() {
  let navigate = useNavigate();

  function galleryLink() {
    navigate('/gallery');
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div
        className="container mx-auto flex flex-row xl:flex-col items-center bg-amber-200

        // BASE
        pl-32 py-12 pr-12

        // SMALL SCREEN
        sm:pl-12
        sm:pt-14

        // XS SCREEN
        xsm:pl-0
        xsm:pr-0

        // XXS SCREEN
        xxsm:pl-0
        xxsm:pr-0

        // PHONES
        SamsungS20Ultra:pl-12
        SamsungS8:pl-12
        Pixel5:pl-12
        iPhone12Pro:pl-12
        iPhoneXR:pl-12
        iPhoneSE:pl-12 
        GalaxyFold:pl-12
        GalaxyFoldH:p-2
        GalaxyFoldH:pt-10
        iPhone8Plus:pl-12
        "
      >
        {/* VIDEO DIV */}
        <div
          className="
      
          // BASE
          max-w-lg w-5/6

          // SMALL SCREEN
          xsm:hidden
      
          // 2XL SCREEN
          2xl:mb-0

          // PHONES
          iPhoneXRH:pb-9
          SamsungS20UltraH:pb-14
          "
        >
          <div class="App">
            <GalleryCarousel></GalleryCarousel>
          </div>
        </div>

        {/* TEXT DIV */}
        <div
          data-aos="fade-left"
          className="
          // BASE
          flex-grow w-1/2 pl-12 flex flex-col items-center

          // SMALL
          sm:pl-0
          xsm:pt-0
          xsm:px-5

          // LARGE SCREEN
          lg:w-11/12
          lg:pl-0

          // XL SCREEN
          xl:pl-0
          xl:pt-12
          xl:w-full
          
          // 2XL SCREEN
          2xl:items-start 
          2xl:items-center

          // PHONE
          iPhoneSE:pl-0
          iPhoneSEH:p-10
          iPhoneXR:pl-5
          iPhoneXRH:p-0
          iPhone12Pro:pl-0
          iPhone12ProH:p-10          
          Pixel5:pl-0
          Pixel5H:p-10
          SamsungS8:pl-0
          SamsungS8H:p-10
          SamsungS20Ultra:pl-0
          SamsungS20UltraH:p-0
          GalaxyFold:pl-0
          GalaxyFoldH:p-10
          "
        >
          <h1 className="title-font pb-5 text-3xl font-semibold font-['Inter']">
            BECOME PART OF OUR FAMILY
          </h1>
          <p className="mb-3 leading-relaxed font-['Poppins'] overflow-hidden text-left text-lg">
            Here at MedCare HealthCert, we are honored to assist you in your
            journey towards medicine. We are a flexible, accelerated, and
            affordable certification school for undergraduate and graduate
            science majors. We offer studying material, exam prep, as well as
            clinical training for all your medical procedures. National
            Certification testing is available at the location of your choice,
            which are all nationally recognized.
          </p>
          <br></br>
          <p className="mb-8 leading-relaxed font-['Poppins'] overflow-hidden text-left text-lg">
            The Bureau of Labor states, “Certification leads to a higher salary
            and more employment opportunity”. With a competitive medical
            professional field on the rise, let’s get the ball rolling!
          </p>

          {/* BUTTON DIV */}
          <div
            className="flex justify-center relative
            
            // SMALL SCREEN
            sm:items-center 
            sm:w-fit

            // PHONES
            iPhoneXRH:w-fit
            iPhone12ProH:w-fit
            Pixel5H:w-fit
            SamsungS8H:w-fit
            SamsungS20UltraH:w-fit
            GalaxyFoldH:w-fit
            "
          >
            <button
              onClick={galleryLink}
              className="inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
            >
              See Our Students at Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
