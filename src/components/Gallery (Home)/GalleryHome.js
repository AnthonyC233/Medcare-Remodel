import React from 'react';
import './galleryHome.css';
import gallery from '../../assets/home-gallery.png';

function GalleryHome() {
  return (
    <section className="gallery-link-section">
      <div className="grid grid-cols-2 gap-10">
        <div className="gallery-image">
          <img src={gallery} alt="gallery-home-link"></img>
        </div>

        <div className="gallery-details">
          <h1>GALLERY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryHome;
