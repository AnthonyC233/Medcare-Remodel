import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './about.css';
// LINK TO PROGRESS BARS
import Progress from './Progress';
import ProgressPercent from './ProgressPercent';
import ProgressOutOf from './ProgressOutOf';

function About() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
 
  return (
    <section className="
    
    grid grid-cols-2 lg:grid-cols-1 overflow-hidden  
    
    // 1023px | lg
      lg:pt-10
      
      ">
      {/* TEXT DIV */}
      <div
      data-aos="fade-up-right"  
        className="bg-sky-500 flex justify-center items-center flex-col

        // BASE
        pl-32 py-12 pr-12

        // SMALL SCREEN
        sm:pl-12

        // PHONES
        SamsungS20Ultra:pl-12
        SamsungS8:pl-12
        Pixel5:pl-12
        iPhone12Pro:pl-12
        iPhoneXR:pl-12
        iPhoneSE:pl-12 
        GalaxyFold:pl-12
        "
      >
        <h1 className="pb-5 text-3xl font-semibold font-['Inter']">
          ABOUT US
        </h1>
        <p className="leading-relaxed font-['Mingzat'] overflow-hidden text-left">
        Welcome, to MedCare HealthCert at our school we pride ourselves in gapping bridges for our students to become future MDs, PAs and Nurses. 
        Our school is open to all college students majoring in any of the sciences also if you are mandated to obtain direct patient care hours for medical school, you came to the perfect institute.
          {/* At our school, we pride ourselves in gapping bridges for our students
          to become future MDs, PAs and Nurses. Our school is open to all
          college students majoring in any of the sciences. */}
        </p>
        <br></br>
        <p className="leading-relaxed font-['Mingzat'] overflow-hidden text-left">
        We offer clinical training and certifications in Phlebotomy, Medical Assistant (CCMA), Patient Care Technician (PCT), EKG Technician, Medical Insurance, Billing and Coding (MIBC), 
        Certified Medical Administrative Assistant (CMAA), and Certified Electronic Health Record Specialist (CEHRS). 
          {/* We are a flexible, accelerated, and affordable certification school
          for undergraduate and graduate science majors. */}
        </p>
      </div>

      {/* PROGRESS BARS SECTION */}
      <div
        data-aos="fade-up-left"  
        className="progress-container bg-sky-500 flex justify-center items-center flex-col

        // BASE
        pl-12 py-12 pr-12

        // SMALL SCREEN
        sm:pr-32
        sm:hidden

        // LARGE SCREEN
        lg:pl-32

        // PHONES
        SamsungS20Ultra:pl-12
        SamsungS8:pl-12
        Pixel5:pl-12
        iPhone12Pro:pl-12
        iPhoneXR:pl-12
        iPhoneSE:pl-12 
        GalaxyFold:pl-12
        "
      >
        <p className="text-xs font-semibold font-['Mingzat'] overflow-hidden">
          FLEXIBILITY
        </p>
        <Progress done="100" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat'] overflow-hidden">
          AVERAGE FUN
        </p>
        <ProgressPercent done="100" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat'] overflow-hidden">
          DEDICATION
        </p>
        <ProgressOutOf done="100" />
      </div>
    </section>
  );
}

export default About;
