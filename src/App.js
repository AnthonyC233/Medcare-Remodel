import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
// import Gallery from '';
import Contact from './pages/Contact';
// import Credit from '';
// import WrongPage from '';
// import Footer from '';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} /> 

          {/* path for credits */}
          {/* <Route path="/credit" element={<Credit />} /> */}
          {/* path if URL is wrong */}
          {/* <Route path="*" element={<WrongPage />} /> */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
