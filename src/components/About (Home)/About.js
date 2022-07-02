import React from 'react';
import './about.css';
// Linking the progress bar js file
import Progress from './Progress';

function About() {
  return (
    <section className="about-section-container">
      <div className="grid grid-cols-2">
        <div className="about-details">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Progress bar can be customized by changing the "done=" */}
        <div className="progress-bars">
          <p>AVERAGE CLASS SIZE</p>
          <Progress done="30" />
          <p>AVERAGE GRADUATION RATE</p>
          <Progress done="75" />
          <p>AVERAGE JOB GET</p>
          <Progress done="90" />
        </div>
      </div>
    </section>
  );
}

export default About;
