import React from 'react';
import './about.css';
// Linking the progress bar js file
import Progress from './Progress';

function About() {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="p-10 bg-ltGreen flex items-center justify-center flex-col text-left">
          <div
            className="about-section pl-24  

            // WHEN NAV BAR GOES UP 
            sm:p-0  

            // PHONES | LANDSCAPE
            iPhoneSE:p-0
            iPhoneXR:p-0
            iPhone12Pro:p-0
            Pixel5:p-0
            SamsungS8:p-0
            SamsungS20Ultra:p-0
            GalaxyFoldH:p-0"
          >
            <h1 className="pb-5 text-3xl font-medium font-['Mingzat']">
              ABOUT US
            </h1>
            <p>
              At our school, we pride ourselves in gapping bridges for our
              students to become future MDs, PAs and Nurses. Our school is open
              to all college students majoring in any of the sciences.
            </p>
            <br></br>
            <p>
              We are a flexible, accelerated, and affordable certification
              school for undergraduate and graduate science majors.
            </p>
          </div>
        </div>
        {/* Progress bar can be customized by changing the "done=" value */}
        <div className="p-10 progress-bars bg-green flex items-center justify-center flex-col xxsm:hidden">
          <p className="pb-2">AVERAGE CERTIFICATION COMPLETION</p>
          <Progress done="80" />
          <p className="pb-2">AVERAGE GRADUATES EMPLOYED</p>
          <Progress done="80" />
          <p className="pb-2">AVERAGE FUN</p>
          <Progress done="100" />
        </div>
      </div>
    </section>
  );
}

export default About;
