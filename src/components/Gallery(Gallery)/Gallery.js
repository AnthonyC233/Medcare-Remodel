import React from "react";
import Gallery from "../../pages/Gallery";

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

function Gallery1() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="xl:text-3xl text-6xl font-medium title-font mb-4 text-blue-900">
            Check Our MedVamps At Work
          </h1>
        </div>
        <div class="flex flex-wrap m-20 place-content-center">
          <div class="p-5">
            <div class="max-w-sm rounded border-2 border-blue-500">
              <div class="flex relative p-5">
                <img alt="gallery1" class="apple" src={picture1}></img>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="max-w-sm rounded border-2 border-blue-500">
              <div class="flex relative p-5">
                <img alt="gallery2" class="apple" src={picture2}></img>
                <div class=""></div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="max-w-sm rounded overflow-hidden border-2 border-blue-500">
              <div class="flex relative p-5">
                <img alt="gallery3" class="apple" src={picture3}></img>
                <div class=""></div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="max-w-sm rounded overflow-hidden border-2 border-blue-500">
              <div class="flex relative p-5">
                <img alt="gallery4" class="apple" src={picture4}></img>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="max-w-sm rounded overflow-hidden border-2 border-blue-500">
              <div class="flex relative p-5">
                <img alt="gallery5" class="apple" src={picture5}></img>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="max-w-sm rounded overflow-hidden border-2 border-blue-500">
              <div class="flex realtive p-5">
                <img alt="gallery6" class="apple" src={picture6}></img>
              </div>
            </div>
            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="flex relative">
                <img alt="gallery7" class="" src={picture7}></img>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="flex relative">
                  <img alt="gallery8" class="" src={picture8}></img>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery1;
