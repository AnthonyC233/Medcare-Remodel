import React from 'react';
import './serviceGrid.css';

// IMPORTING ICONS
import ccma from '../../assets/services-icon-ccma.png';
import ekg from '../../assets/services-icon-ekg.png';
import phlebotomy from '../../assets/services-icon-phlebotomy.png';
import pct from '../../assets/services-icon-pct.png';
import billing from '../../assets/services-icon-billing.png';
import more from '../../assets/services-icon-more.png';

function serviceGrid() {
  return (
    <section
      className="grid grid-cols-3 gap-10 lg:grid-cols-1 service-grid-section 
      // BASE
      pl-32 pt-20 pb-20 pr-12 

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
      GalaxyFoldH:p-5
      GalaxyFoldH:py-10
      iPhone8Plus:pl-12
      "
    >
      {/* START OF ICONS */}

      {/* 1ST ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={ccma} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          CCMA
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          As a clinical medical assistant, your first task is to greet and
          instruct patients, making them feel at ease. You will be working
          alongside doctors, nurses, and other medical professionals. CCMAs are
          responsible for administrative tasks, performing phlebotomy, EKG, and
          other minor hands-on medical procedures. This is why multitasking is
          vital in the medical assistant field. Our program is designed to help
          you learn all the aspects of being a CCMA so that your patients will
          obtain the best care.
        </p>
      </div>

      {/* 2ND ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={ekg} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          EKG TECHNICIAN
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          If a more technical healthcare job interests you, EKG Technician might
          be your answer. Our EKG program trains you to recognize erratic waves
          and how to place the 12-lead on the patient without artifact. Proper
          placement of the 12-lead is imperative to see how the heart is firing.
          EKG Technicians have job opportunities within most cardiac divisions
          of the hospital as well as doctor offices.
        </p>
      </div>

      {/* 3RD ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={phlebotomy} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          PHLEBOTOMY
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          If you love the clinical/lab aspect of healthcare training, then
          Phlebotomy is for you. In our Phlebotomy program, you are taught how
          to obtain specimens using a variety of techniques. You also recieve an
          introduction for specific labs that might be drawn and the different
          tubes you will use for each. The specimens are obtained for treatment,
          prevention of diseases, and testing for a diagnosis.
        </p>
      </div>

      {/* 4TH ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={pct} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          PERSONAL CARE TECHNICIAN
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          As a Personal Care Technician, you will be taking care of homebound
          patients of all ages. PCT will assist in activities of daily living
          (ADL), communication, and basic caregiving skills needed to provide
          the best quality care for patients. In addition, you will be taught
          your role as a PCA, your responsibilities, as well as how to relate to
          other family members.
        </p>
      </div>

      {/* 5TH ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={billing} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          BILLING & CODING
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          If you are interested in medical insurance billing and coding and have
          the skills to work in bookkeeping, payroll, accounting clerks, or
          medical administrative assistant, then this is the title for you. You
          will need excellent computer and communication skills in order to
          assist with all the administrative tasks of your future place of
          employment. It can range from insurance claims to keeping medical
          records in accordance to the rules.
        </p>
      </div>

      {/* 6TH ICON! */}
      <div className="flex items-center flex-col border-dashed border-4 border-amber-300 p-6 rounded-lg bg-white bg-amber-100 drop-shadow-md">
        {/* CIRCLE */}
        <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-sky-200 text-indigo-500 mb-4 drop-shadow-md GalaxyFoldH:hidden">
          {/* ICON */}
          <img src={more} alt="CCMA Icon" className="w-24 h-24"></img>
        </div>
        {/* DETAILS */}
        <h2 className="text-2xl font-medium text-center pb-2 font-['Inter']">
          & MUCH MORE
        </h2>
        <p className="leading-relaxed text-center font-['Mingzat']">
          Come see other ways MedCare HealthCert can help you!
        </p>
      </div>
    </section>
  );
}

export default serviceGrid;
