import React from 'react';
import errorImg from '../../assets/404-page.png';

// PATH TO HOME PAGE FROM BUTTON
import { useNavigate } from 'react-router-dom';

function ErrorComp() {
  let navigate = useNavigate();

  function homeLink() {
    navigate('/');
  }

  return (
    <section>
      <div
        className="flex justify-center items-center flex-col
        
        // BASE
        w-2/6 ml-auto mr-auto mt-40

        // SMALL SCREEN
        sm:w-1/2
        sm:mt-80

        // MEDIUM SCREEN
        md:w-1/2
        md:mt-80

        // PHONES
        SamsungS20UltraH:w-5/6
        SamsungS8H:w-5/6
        SamsungS8H:mt-40
        Pixel5H:w-5/6
        iPhone12ProH:w-5/6
        iPhoneXRH:w-5/6
        iPhoneSEH:w-4/6
        iPhoneSEH:mt-40
        GalaxyFoldH:w-5/6
        GalaxyFoldH:mt-40
        iPadAirH:w-1/2
        iPadAirH:ml-56
        iPadMiniH:w-1/2
        iPadMiniH:ml-56

        SamsungS20Ultra:w-1/2
        SamsungS8:mt-28
        iPhoneSE:mt-28
        GalaxyFold:mt-28
        "
      >
        {/* IMAGE DIV */}
        <img src={errorImg} alt="404 error" className="pb-5"></img>

        {/* BUTTON DIV */}
        <div className="overflow-hidden">
          <button
            onClick={homeLink}
            className="text-white bg-galleryButton border-0 py-3 px-4 focus:outline-none hover:bg-blue-400 rounded text-lg  text-center"
          >
            Take Me Back Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorComp;
