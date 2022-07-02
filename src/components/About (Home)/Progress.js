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
    <div className="progress-bars-container">
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
}

export default Progress;
