import React from 'react';

function CreditsComp() {
  return (
    <section>
      <div
        className="p-20 flex justify-center items-center flex-col
        
        // SMALL SCREEN
        sm:pt-36
        "
      >
        <h1 className="py-3 text-4xl font-semibold font-['Mingzat']">
          CREDITS
        </h1>
        <br></br>

        <h3 className="py-3 text-2xl font-bold font-['Mingzat']">IMAGES</h3>
        {/* HOME PAGE MAIN HEADER */}
        <a href="https://www.freepik.com/photos/doctor-laptop">
          Home page main header by pressfoto - www.freepik.com
        </a>
        {/* SERVICES HEADER */}
        <a href="https://www.freepik.com/photos/healthcare">
          Services header created by freepik - www.freepik.com
        </a>
        {/* GALLERY HEADER */}
        <a href="https://www.freepik.com/photos/doctor-uniform">
          Gallery Header created by atlascompany - www.freepik.com
        </a>
        {/* CONTACT HEADER */}
        <a href="https://www.freepik.com/premium-vector/hand-holding-smartphone-with-bot-chat-screen_18733701.htm">
          Contact header created by pch.vector - www.freepik.com
        </a>
        {/* 404 PAGE */}
        <a href="https://www.freepik.com/vectors/computer-error">
          404 Page header created by storyset - www.freepik.com
        </a>
        <br></br>

        <h3 className="py-3 text-2xl font-bold font-['Mingzat']">ICONS</h3>
        {/* CCMA ICON */}
        <a
          href="https://www.flaticon.com/free-icons/hospital-bed"
          title="hospital bed icons"
        >
          CCMA Icon created by Freepik - Flaticon
        </a>
        {/* EKG TECH ICON */}
        <a
          href="https://www.flaticon.com/free-icons/medical"
          title="medical icons"
        >
          EKG Tech Icon created by Freepik - Flaticon
        </a>
        {/* PHLEBOTOMY ICON */}
        <a
          href="https://www.flaticon.com/free-icons/needle"
          title="needle icons"
        >
          Phlebotomy Icon created by AomAm - Flaticon
        </a>
        {/* PCT ICON */}
        <a
          href="https://www.flaticon.com/free-icons/stethoscope"
          title="stethoscope icons"
        >
          PCT Icon created by nawicon - Flaticon
        </a>
        {/* BILLING & CODING ICON */}
        <a
          href="https://www.flaticon.com/free-icons/doctor"
          title="doctor icons"
        >
          Billing & Coding Icon created by Freepik - Flaticon
        </a>
        {/* AND MORE ICON */}
        <a
          href="https://www.flaticon.com/free-icons/healthcare"
          title="healthcare icons"
        >
          & More Icon created by srip - Flaticon
        </a>
      </div>
    </section>
  );
}

export default CreditsComp;
