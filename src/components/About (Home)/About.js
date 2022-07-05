import React from 'react';
import './about.css';
// Linking the progress bar js file
import Progress from './Progress';

function About() {
  return (
    <section>
      <div className="about-section grid grid-cols-2 lg:grid-cols-1">
        <div className="py-20 pl-28 pr-9 bg-ltGreen flex items-center justify-center flex-col text-left hi">
          <h1 className="pb-5">ABOUT US</h1>
          <p>
            Welcome to MedCare HealthCert! At our school, we pride ourselves in
            gapping bridges for our students to become future MDs, PAs and
            Nurses. Our school is open to all college students majoring in any
            of the sciences.
          </p>
          <br></br>
          <p>
            We offer clinical training and certifications in the following:
            Phlebotomy, Medical Assistant (CCMA), Patient Care Technician (PCT),
            EKG Technician, Medical Insurance, Billing and Coding (MIBC),
            Certified Medical Administrative Assistant (CMAA), and Certified
            Electronic Health Record Specialist (CEHRS).
          </p>
          {/* maybe move this to the services section */}
          {/* <p>
            If you are mandated to obtain direct patient care hours for medical
            school, you came to the perfect institute. Here at MedCare
            HealthCert, we are honored to assist you in your journey towards
            medicine. We are a flexible, accelerated, and affordable
            certification school for undergraduate and graduate science majors.
            We offer studying material and exam prep, as well as clinical
            training for all your medical procedures. National Certification
            testing is available at the location of your choice, which are all
            nationally recognized. The Bureau of Labor states “Certification
            leads to a higher salary and more employment opportunity”. With a
            competitive medical professional field on the rise, let’s get the
            ball rolling. So why wait? RSVP to one of our orientations with the
            link below and come experience how you can learn while having fun.
            Congratulations on taking your first step in becoming a medical
            professional by gaining your certification and clinical experience.
          </p> */}
        </div>
        {/* Progress bar can be customized by changing the "done=" value */}
        <div className="progress-bars p-20 bg-green flex items-center justify-center flex-col hi">
          <p>AVERAGE CLASS SIZE</p>
          <Progress done="30" />
          <p>AVERAGE GRADUATION RATE</p>
          <Progress done="75" />
          <p>AVERAGE JOB GET</p>
          <Progress done="90" />
        </div>
      </div>
    </section>
  );
}

export default About;
