import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About (Home)/About';
import GalleryHome from './components/Gallery (Home)/GalleryHome';
import Home from './pages/Home';
// import Services from '';
// import Gallery from '';
// import Contact from '';
// import Credit from '';
// import WrongPage from '';
// import Footer from '';

function App() {
  return (
    <Router>
    <div>
      <Header />
      {/* FOR STYLING FOR NOW */}
      <About />
      <GalleryHome />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />  */}

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
