import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Header (Gallery)/Header";
import Page from "../components/Gallery(Gallery)/Gallery";
import { Helmet } from "react-helmet";
import Credits from "../components/Credits Link/Credits";

const Gallery = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Gallery</title>
        </Helmet>
      </>
      <Nav />
      <Header />
      <Page />
      <Credits />
    </div>
  );
};

export default Gallery;
