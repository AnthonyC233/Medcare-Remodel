import React from 'react';
import './about.css';
// LINK TO PROGRESS BARS
import Progress from './Progress';
import ProgressPercent from './ProgressPercent';
import ProgressOutOf from './ProgressOutOf';

function About() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-1">
      {/* TEXT DIV */}
      <div
        className="bg-ltGreen flex justify-center items-center flex-col

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
        <h1 className="pb-5 text-3xl font-semibold font-['Mingzat']">
          ABOUT US
        </h1>
        <p className="leading-relaxed font-['Mingzat'] overflow-hidden text-left">
          At our school, we pride ourselves in gapping bridges for our students
          to become future MDs, PAs and Nurses. Our school is open to all
          college students majoring in any of the sciences.
        </p>
        <br></br>
        <p className="leading-relaxed font-['Mingzat'] overflow-hidden text-left">
          We are a flexible, accelerated, and affordable certification school
          for undergraduate and graduate science majors.
        </p>
      </div>

      {/* PROGRESS BARS SECTION */}
      <div
        className="progress-container bg-green flex justify-center items-center flex-col

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
          MAX CLASSROOM SIZE
        </p>
        <Progress done="20" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat'] overflow-hidden">
          AVERAGE CERTIFICATION RECEIVED
        </p>
        <ProgressPercent done="80" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat'] overflow-hidden">
          SERVICES PROVIDED
        </p>
        <ProgressOutOf done="70" />
      </div>
    </section>
  );
}

export default About;
