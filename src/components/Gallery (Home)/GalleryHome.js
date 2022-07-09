import React from 'react';
import galleryPic from '../../assets/home-gallery.png';

// PATH TO GALLERY PAGE FROM BUTTON
import { useNavigate } from 'react-router-dom';

function GalleryHome() {
  let navigate = useNavigate();

  function galleryLink() {
    navigate('/gallery');
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-1">
      {/* GALLERY IMAGE SECTION */}
      {/* 36: 144px | 12: 48px | Original pl-24: 96px*/}
      <div
        className="gallery-image

        // BASE
        pl-32 py-12 pr-12

        // SMALL SCREEN
        sm:pl-12 sm:py-0

        "
      >
        <img
          src={galleryPic}
          alt="home-gallery"
          className="object-cover object-center"
        ></img>
      </div>

      {/* GALLERY LINK SECTION */}
      <div
        className="flex justify-center items-center flex-col
      
        // BASE
        pl-12 py-12 pr-12

        lg:pl-32

        sm:pr-32 sm:py-0

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
          BECOME APART OF OUR FAMILY
        </h1>
        <p>
          We offer studying material, exam prep as well as clinical training for
          all your medical procedures. National Certification testing is
          available at the location of your choice which are all nationally
          recognized.
        </p>
        <br></br>
        <p>
          The Bureau of Labor states, “Certification leads to a higher salary
          and more employment opportunity”. With a competitive medical
          professional field on the rise, let’s get the ball rolling!
        </p>
        <div className="p-5">
          <button
            onClick={galleryLink}
            className="inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-sm"
          >
            See Our Students at Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
