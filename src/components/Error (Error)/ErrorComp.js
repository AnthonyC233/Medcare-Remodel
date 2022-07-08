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
    <section className="error-section-container">
      <div
        className="error-section flex justify-center items-center flex-col

        //TODO: this makes the button have a scroll bar
        h-screen w-screen

        // BASE
        pl-36 py-12 pr-12

        // SMALL SCREEN
        sm:pl-12

        // PHONES | LANDSCAPE
        SamsungS20Ultra:pl-12
        SamsungS20Ultra:pt-36
        SamsungS8:pl-12
        SamsungS8:pt-36
        Pixel5:pl-12
        Pixel5:pt-36
        iPhone12Pro:pl-12
        iPhone12Pro:pt-36
        iPhoneXR:pl-12
        iPhoneXR:pt-36
        iPhoneSE:pl-12 
        iPhoneSE:pt-36 
        GalaxyFold:pl-12
        GalaxyFold:pt-36
        "
      >
        <img src={errorImg} alt="404 error" className="pb-5"></img>

        <button
          onClick={homeLink}
          className="text-white bg-galleryButton border-0 py-3 px-4 focus:outline-none hover:bg-blue-400 rounded text-lg"
        >
          Let's go back home
        </button>
      </div>
    </section>
  );
}

export default ErrorComp;
