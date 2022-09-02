import React from 'react';
import './contact.css';

function InputField() {
  return (
    <div
      className="
    
    // Base
      w-1/3 bg-white rounded-lg pl-8 pr-8 pt-8 pb-8 flex flex-col mt-10 relative z-10 shadow-md ml-auto mr-20 shadow-md shadow-black
    
    // 1023px | lg
      lg:w-2/3 lg:mt-10

    // 639px | sm
      sm:top-8 sm:pb-2 sm:pt-2

    // iPhoneSEH | Vertical
      iPhoneSEH:w-full iPhoneSEH:mr-0 iPhoneSEH:top-0 iPhoneSEH:mt-0 iPhoneSEH:mb-6

    // iPhoneXRH | Vertical
      iPhoneXRH:w-5/6 iPhoneXRH:mr-auto

    // iPhone12ProH | Vertical
      iPhone12ProH:w-5/6 iPhone12ProH:mr-auto iPhone12ProH:top-0 iPhone12ProH:mb-5

    // Pixel5H | Vertical
      Pixel5H:w-5/6 Pixel5H:mr-auto Pixel5H:top-0 Pixel5H:mb-5

    // SamsungS8H | Vertical
      SamsungS8H:w-5/6 SamsungS8H:mr-auto SamsungS8H:top-0 SamsungS8H:mb-5

    // SamsungS20UltraH | Vertical
      SamsungS20UltraH:w-5/6 SamsungS20UltraH:mr-auto SamsungS20UltraH:top-0

    
    "
    >
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>

      {/* Email Input Container */}
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></input>
      </div>

      {/* Message Input Container */}
      <div
        className="
        
        // Base
        relative mb-4

        // 639px | sm
        sm:p
        
        "
      >
        <label for="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
    </div>
  );
}

export default InputField;
