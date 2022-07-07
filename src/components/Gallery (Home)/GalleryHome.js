import React from 'react';
import './galleryHome.css';
import gallery from '../../assets/home-gallery.png';

function GalleryHome() {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="flex items-center justify-center">
          <div
            className="gallery-image
            xsm:hidden 
            // xl:p-24
            // lg:p-0
            // md:p-0

            // PHONES | LANDSCAPE
            SamsungS20Ultra:p-0
            SamsungS8:p-0
            Pixel5:p-0
            iPhone12Pro:p-0
            iPhoneXR:p-0
            iPhoneSE:p-0         
          "
          >
            <img
              src={gallery}
              alt="gallery-home-link"
              className="object-scale-down GalaxyFold:hidden GalaxyFoldH:hidden"
            ></img>
          </div>
        </div>

        {/* lg and smaller will apply:pl-24 */}
        <div className="flex items-center justify-center flex-col p-20 pl-36 sm:p-10">
          <h1 className="pb-5 text-3xl font-medium font-['Mingzat']">
            BECOME APART OF OUR FAMILY
          </h1>
          <p>
            We offer studying material, exam prep as well as clinical training
            for all your medical procedures. National Certification testing is
            available at the location of your choice which are all nationally
            recognized.
          </p>
          <br></br>
          <p className="pb-7">
            The Bureau of Labor states, “Certification leads to a higher salary
            and more employment opportunity”. With a competitive medical
            professional field on the rise, let’s get the ball rolling!
          </p>
          <button className="inline-flex text-white bg-galleryButton border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-sm">
            See Our Students at Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
