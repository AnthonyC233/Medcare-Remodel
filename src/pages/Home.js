import React from 'react';

import Header from '../components/Header/Header';
import About from '../components/About (Home)/About';
import Gallery from '../components/Gallery (Home)/GalleryHome';
import Testimonials from '../components/Testimonials (Home)/Testimonials';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
