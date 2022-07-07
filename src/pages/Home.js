import React from 'react';

import Nav from '../components/Header/Nav';
import About from '../components/About (Home)/About';
import Gallery from '../components/Gallery (Home)/GalleryHome';
import Testimonials from '../components/Testimonials (Home)/Testimonials';

const Home = () => {
  return (
    <div>
      <Nav />
      <About />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
