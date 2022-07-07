import React from 'react';
import './about.css';
// LINK TO PROGRESS BARS
import Progress from './Progress';

function About() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-1">
      {/* ABOUT US SECTION */}
      {/* 36: 144px | 12: 48px | Original pl-24: 96px*/}
      <div
        className="bg-ltGreen flex justify-center items-center flex-col

        // BASE
        pl-36 py-12 pr-12

        // SMALL SCREEN
        sm:pl-12

        // PHONES | LANDSCAPE
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
        <p>
          At our school, we pride ourselves in gapping bridges for our students
          to become future MDs, PAs and Nurses. Our school is open to all
          college students majoring in any of the sciences.
        </p>
        <br></br>
        <p>
          We are a flexible, accelerated, and affordable certification school
          for undergraduate and graduate science majors.
        </p>
      </div>

      {/* PROGRESS BARS SECTION */}
      <div
        className="progress-container bg-green flex justify-center items-center flex-col

        // BASE
        pl-12 py-12 pr-12

        lg:pl-36

        sm:pr-36

        sm:hidden


        // PHONES | LANDSCAPE
        SamsungS20Ultra:pl-12
        SamsungS8:pl-12
        Pixel5:pl-12
        iPhone12Pro:pl-12
        iPhoneXR:pl-12
        iPhoneSE:pl-12 
        GalaxyFold:pl-12
        "
      >
        <p className="text-xs font-semibold font-['Mingzat']">
          AVERAGE CLASSROOM SIZE
        </p>
        <Progress done="50" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat']">
          AVERAGE GRADUATES EMPLOYED
        </p>
        <Progress done="80" />
        <p className="pt-5 text-xs font-semibold font-['Mingzat']">
          AVERAGE FUN
        </p>
        <Progress done="100" />
      </div>
    </section>
  );
}

export default About;
