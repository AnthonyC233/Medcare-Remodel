import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Header/Header";
import About from "../components/About (Home)/About";
import Gallery from "../components/Gallery (Home)/GalleryHome";
import Award from "../components/Award (Home)/Award";
import Testimonials from "../components/Testimonials (Home)/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </>
      <Nav />
      <Header />
      <About />
      <Gallery />
      <Award />
      <Testimonials />
    </div>
  );
};

export default Home;
