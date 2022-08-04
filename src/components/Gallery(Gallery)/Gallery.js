import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./gallery.css";

import Vid1 from "../../assets/medcare_4.mp4";
import Vid2 from "../../assets/medcare_5.mp4";
import Vid3 from "../../assets/medcare_6.mp4";
import Vid4 from "../../assets/medcare_7.mp4";

import picture1 from "../../assets/gallery-1.jpeg";
import picture2 from "../../assets/gallery-2.jpeg";
import picture3 from "../../assets/gallery-3.jpeg";
import picture4 from "../../assets/gallery-4.jpeg";
import picture5 from "../../assets/gallery-5.jpeg";
import picture6 from "../../assets/gallery-6.jpeg";
import picture7 from "../../assets/gallery-7.jpeg";
import picture8 from "../../assets/gallery-8.jpeg";
import picture9 from "../../assets/gallery-9.jpeg";
import picture10 from "../../assets/gallery-10.jpeg";
import picture11 from "../../assets/gallery-11.jpeg";
import picture12 from "../../assets/gallery-12.jpeg";
import picture13 from "../../assets/gallery-13.jpeg";
import picture14 from "../../assets/gallery-14.jpeg";
import picture15 from "../../assets/gallery-15.jpeg";
import picture16 from "../../assets/gallery-16.jpeg";
import picture17 from "../../assets/gallery-17.jpeg";
import picture18 from "../../assets/gallery-18.jpeg";
import picture19 from "../../assets/gallery-19.jpeg";
import picture20 from "../../assets/gallery-20.jpeg";
import picture21 from "../../assets/gallery-21.jpeg";
import picture22 from "../../assets/gallery-22.jpeg";
import picture23 from "../../assets/gallery-23.jpg";
import picture24 from "../../assets/gallery-24.jpg";

import CloseIcon from "../../assets/close-outline.svg";

function Gallery1() {
  let data = [
    {
      id: 1,
      imgSrc: picture7,
    },
    {
      id: 2,
      imgSrc: picture21,
    },
    {
      id: 3,
      imgSrc: picture3,
    },
    {
      id: 4,
      imgSrc: picture22,
    },
    {
      id: 5,
      imgSrc: picture20,
    },
    {
      id: 6,
      imgSrc: picture17,
    },
    {
      id: 7,
      imgSrc: picture24,
    },
    {
      id: 8,
      imgSrc: picture8,
    },
    {
      id: 9,
      imgSrc: picture9,
    },
    {
      id: 10,
      imgSrc: picture19,
    },
    {
      id: 11,
      imgSrc: picture6,
    },
    {
      id: 12,
      imgSrc: picture11,
    },
    {
      id: 13,
      imgSrc: picture18,
    },
    {
      id: 14,
      imgSrc: picture2,
    },
    {
      id: 15,
      imgSrc: picture4,
    },
    {
      id: 16,
      imgSrc: picture14,
    },
    {
      id: 17,
      imgSrc: picture23,
    },
    {
      id: 18,
      imgSrc: picture5,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    // onClick will display something along the lines of: VM11615 react_devtools_backend.js:4026 /static/media/gallery-21.c11973aa3815ca6371ff.jpeg
    console.warn(imgSrc);

    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <section
        className="
    
    // BASE
    ml-20 mt-10 sm:ml-0
    
    // iPhone SE (Horizontal)
    iPhoneSE:ml-0

    // iPhoneXR (Horizontal)
    iPhoneXR:ml-0

    // iPhone12Pro (Horizontal)
    iPhone12Pro:ml-0

    // Pixel5 (Horizontal)
    Pixel5:ml-0

    // SamsungS8 (Horizontal)
    SamsungS8:ml-0

    // SamsungS20Ultra (Horizontal)
    SamsungS20Ultra:ml-0

    // GalaxyFold (Horizontal)
    GalaxyFold:ml-0

    // iPhone8Plus (Horizontal)
    iPhone8Plus:ml-0

    "
      >
        {/* onClick Overlay */}
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="Something something"></img>
          <img
            className="closeIconSvg"
            src={CloseIcon}
            onClick={() => setModel(false)}
          ></img>
        </div>

        {/* Gallery Image Container */}
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="gallery-images"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  alt="MedCare school stuff"
                  style={{ width: "100%" }}
                ></img>
              </div>
            );
          })}

          <div className="App">
            <video width="750" height="500" controls>
              <source src={Vid1} type="video/mp4" />
            </video>
          </div>
          <div className="App">
            <video width="750" height="500" controls>
              <source src={Vid2} type="video/mp4" />
            </video>
          </div>
          <div className="App">
            <video width="750" height="500" controls>
              <source src={Vid3} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery1;
