import React from 'react';
import './serviceGrid.css';

// IMPORTING ICONS
import ccma from '../../assets/services-icon-ccma.png';
import ekg from '../../assets/services-icon-ekg.png';
import phlebotomy from '../../assets/services-icon-phlebotomy.png';
import pct from '../../assets/services-icon-pct.png';
import billing from '../../assets/services-icon-billing.png';
import more from '../../assets/services-icon-more.png';

const serviceGrid = () => {
  return (
    <section
      className="grid grid-cols-2 gap-10 lg:grid-cols-1 

      // BASE
      pl-36 py-12 pr-12
    "
    >
      <div className="flex justify-center items-center flex-col">
        <img src={ccma} alt="ccma icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          CCMA
        </h2>
        <p>
          As a clinical medical assistant, your 1st task is to greet and
          instruct patients, making patients feel at ease. You will be working
          alongside doctors, nurses, and other professionals to care for
          patients. CCMAs are responsible for multitasking from administrative
          tasks to performing phlebotomy, EKG, in addition to other minor hands
          on medical procedures. This is why multitasking is vital in the
          medical assistant field. Our program is designed to help you learn all
          the aspects of being a CCMA, so your patients will obtain the best
          care.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={ekg} alt="ekg icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          EKG TECHNICIAN
        </h2>
        <p>
          A more technical healthcare job interest’s you; EKG Technician might
          be your answer. Our EKG program trains you to recognize erratic waves
          and how to place the 12- lead on the patient without artifact. Proper
          placement of the 12-lead is imperative to see how the heart is firing.
          EKG Technicians have job opportunities within most cardiac divisions
          of the hospital as well as doctor offices.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={pct} alt="pct icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          PCT
        </h2>
        <p>
          As a Personal Care Technician, you will be taking care of homebound
          patients of all ages. PCT will assist in (ADL) activities of daily
          living, communication, and basic caregiving skills needed to provide
          the best quality care for patients. In addition, you will be taught
          your role as a PCA, your responsibilities, as well as how to relate to
          other family members.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={billing} alt="billing icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          BILLING & CODING
        </h2>
        <p>
          If you are interested in medical insurance billing and coding and have
          the skills to work in bookkeeping, payroll, accounting clerks, or
          medical administrative assistant then this is the title for you. You
          will need excellent computer and communication skills in order to
          assist with all the administrative tasks of your future place of
          employment, it can rage from insurance claims, to keeping medical
          records in accordance to the rules.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={phlebotomy} alt="phlebotomy icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          PHLEBOTOMY
        </h2>
        <p>
          If you love the clinical/lab aspect of healthcare training, then
          Phlebotomy is for you. In our Phlebotomy program, you are taught how
          to obtain specimens using a variety of techniques. An introduction to
          specific labs which might be drawn and the different tubes you will
          use for each. The specimens are obtained for treatment, prevention of
          diseases, and testing for a diagnosis.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col">
        <img src={more} alt="more icon" className="w-20 h-20"></img>
        <h2 className="text-2xl font-semibold font-['Mingzat'] overflow-hidden">
          & MUCH MORE
        </h2>
        <p>Come see other ways MedCare HealthCert can help you!</p>
      </div>
    </section>
  );
};

export default serviceGrid;
