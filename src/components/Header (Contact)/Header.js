import React from 'react';
import './header.css';

// Images for the header change per page
import header2 from '../../assets/header-2.png';

function Header() {

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

        {/* Img */}
        <img className="
        
        // Base
          w-5/6 mb-10 object-cover object-center rounded
        
        // 1535px | 2xl
          2xl:3/6

        // 1023px | lg
        lg

        
        " 
        alt="hero" 
        src={header2}>
        </img>

        {/* Text Div (Parent to Button Div) */}
        <div className="text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
          <p className="mb-8 leading-relaxed">War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor. . . .</p>

          {/* Button Div */}
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Header;