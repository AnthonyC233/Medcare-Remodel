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
          
            // SAMSUNG GALAXY S20 ULTRA | Landscape
            SamsungS20Ultra:p-0"
          >
            <h1 className="pb-5 text-3xl font-medium font-['Mingzat']">
              ABOUT US
            </h1>
            <p>
              Welcome to MedCare HealthCert! At our school, we pride ourselves
              in gapping bridges for our students to become future MDs, PAs and
              Nurses. Our school is open to all college students majoring in any
              of the sciences.
            </p>
            <br></br>
            <p>
              We offer clinical training and certifications in the following:
              Phlebotomy, Medical Assistant (CCMA), Patient Care Technician
              (PCT), EKG Technician, Medical Insurance, Billing and Coding
              (MIBC), Certified Medical Administrative Assistant (CMAA), and
              Certified Electronic Health Record Specialist (CEHRS).
            </p>
          </div>
        </div>
        {/* Progress bar can be customized by changing the "done=" value */}
        <div className="p-10 progress-bars bg-green flex items-center justify-center flex-col">
          <p className="pb-2">AVERAGE CLASS SIZE</p>
          <Progress done="30" />
          <p className="pb-2">AVERAGE GRADUATION RATE</p>
          <Progress done="75" />
          <p className="pb-2">AVERAGE JOB GET</p>
          <Progress done="90" />
        </div>
      </div>
    </section>
  );
}

export default About;
