import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './about.css';
// LINK TO PROGRESS BARS
import Progress from './Progress';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="overflow-x-hidden">
      <div
        className="container mx-auto flex flex-row xl:flex-col items-center bg-sky-300 overflow-x-hidden overflow-y-hidden

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
        {/* TEXT DIV */}
        <div
          data-aos="fade-up"
          className="
            // BASE
            flex-grow w-1/2 flex flex-col items-center

            // SMALL
            sm:pl-0
            xsm:px-5
  
            // LARGE SCREEN
            lg:w-11/12
            lg:pl-0
  
            // XL SCREEN
            xl:pl-0
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
            iPhone8Plus:pl-0
            "
        >
          <h1 className="mb-5 text-3xl font-semibold font-['Inter']">
            ABOUT US
          </h1>
          <p className="leading-relaxed font-['Poppins'] overflow-hidden text-left text-lg">
            Welcome to MedCare HealthCert! At our school, we pride ourselves in
            gapping bridges for our students to become future MDs, PAs, and
            Nurses. Our school is open to all college students and graduates
            majoring in any of the sciences. Also, if you are mandated to obtain
            direct patient care hours for medical school, you came to the
            perfect institute.
          </p>
          <br></br>
          <p className="leading-relaxed font-['Poppins'] overflow-hidden text-left text-lg">
            We offer clinical training and certifications in Phlebotomy, Medical
            Assistant (CCMA), Patient Care Technician (PCT), EKG Technician,
            Medical Insurance, Billing and Coding (MIBC), Certified Medical
            Administrative Assistant (CMAA), and Certified Electronic Health
            Record Specialist (CEHRS).
          </p>
        </div>

        {/* PROGRESS BARS DIV */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center flex-col
      
            // BASE
            max-w-lg w-5/6

            // SMALL SCREEN
            sm:hidden

            // XL SCREEN
            xl:pt-12
            "
        >
          <p className="text-sm pb-1 font-semibold font-['Mingzat'] overflow-hidden">
            FLEXIBILITY
          </p>
          <Progress done="100" />
          <p className="pt-5 pb-1 text-sm font-semibold font-['Mingzat'] overflow-hidden">
            DEDICATION
          </p>
          <Progress done="100" />
          <p className="pt-5 pb-1 text-sm font-semibold font-['Mingzat'] overflow-hidden">
            FUN
          </p>
          <Progress done="100" />
        </div>
      </div>
    </section>
  );
}

export default About;
