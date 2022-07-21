import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './gallery.css';

import picture1 from '../../assets/gallery-1.jpeg';
import picture2 from '../../assets/gallery-2.jpeg';
import picture3 from '../../assets/gallery-3.jpeg';
import picture4 from '../../assets/gallery-4.jpeg';
import picture5 from '../../assets/gallery-5.jpeg';
import picture6 from '../../assets/gallery-6.jpeg';
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
      imgSrc: picture6,
    },
    {
      id: 7,
      imgSrc: picture15,
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
      imgSrc: picture16,
    },
    {
      id: 11,
      imgSrc: picture17,
    },
    {
      id: 12,
      imgSrc: picture3,
    },
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    // onClick will display something along the lines of: VM11615 react_devtools_backend.js:4026 /static/media/gallery-21.c11973aa3815ca6371ff.jpeg
    console.warn(imgSrc);

    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <section className='
    
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

    '>
      {/* onClick Overlay */}
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="Something something"></img>
        <img className='closeIconSvg' src={CloseIcon} onClick={() => setModel(false)}></img>
      </div>

      {/* Gallery Image Container */}
      <div className='gallery'>
        {data.map((item, index) => {
          return(
            <div className='gallery-images' key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt="MedCare school stuff" style={{width: '100%'}}></img>
            </div>
          )
        })}
      </div>
    </section>
    </>
  );
}

export default Gallery1;


// {/* <section className="text-gray-600 body-font gallery-section ">
//       <div
//         data-aos="zoom-in-left"
//         className="
    
//       container px-5 pb-24 pt-10 mx-auto
      
//       "
//       >
//         {/* Title Container */}
//         <div
//           className="flex flex-col text-center ml-16 mb-10 place-content-center

//         md:mt-10

//         sm:ml-0

//         iPhoneSE:mr-16

//         iPhoneXR:mr-16

//         iPhone12Pro:mr-16

//         Pixel5:mr-16

//         SamsungS8:mr-16

//         SamsungS20Ultra:mr-16

//         GalaxyFold:mr-16
        

//         "
//         >
//           <h1 class="text-5xl xl:text-3xl font-semibold title-font mb-4 font-['Inter'] text-black">
//             Check Our MedVamps At Work
//           </h1>
//         </div>

//         {/* Flex Wrap Parent Container */}
//         <div
//           className="
        
//         // Base
//         flex flex-wrap ml-16 place-content-center

//         sm:ml-0

//         iPhoneSE:mr-16

//         iPhoneXR:mr-16

//         iPhone12Pro:mr-16

//         Pixel5:mr-16

//         SamsungS8:mr-16

//         SamsungS20Ultra:mr-16

//         GalaxyFold:mr-16
        
//         "
//         >
//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture7}></img>

//                 {/* SHOW on HOVER */}
//                 <div 
                
//                 className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture21}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture3}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture22}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture20}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Img Container */}
//           <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture6}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//               {/* Img Container */}
//               <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture4}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//             {/* Img Container */}
//             <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture18}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//     {/* Img Container */}
//     <div className="p-4">
//             <div className="max-w-sm rounded overflow-hidden">
//               {/* Div for overlay container */}
//               <div
//                 className="
              
//               flex relative transition-transform hover:scale-125 border-4 border-gray-900

//               // For overlay
//               gallery-overlay-container
              
//               "
//               >
//                 <img alt="gallery1" className="apple" src={picture19}></img>
//                 <div className="gallery-icon-container">
//                   <img
//                     className="gallery-icon w-20"
//                     src={magnifyingGlass}
//                     alt="magnifying glass"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section> */}