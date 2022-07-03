import React, { useState } from 'react';
import './about.css';

// "done" is passed from parent - About.js
function Progress({ done }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <div className="pb-6">
      <div className="progress-container h-5 w-96 bg-white rounded-full">
        <div
          className="progress-done rounded-full text-white flex items-center justify-center flex-col text-center text-xs"
          style={style}
        >
          {done}%
        </div>
      </div>
    </div>
  );
}

export default Progress;
