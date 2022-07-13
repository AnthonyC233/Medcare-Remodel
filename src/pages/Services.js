import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Grid (Services)/serviceHeader";
import Grid from "../components/Grid (Services)/serviceGrid";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Services</title>
        </Helmet>
      </>
      <Nav />
      <Header />
      <Grid />
    </div>
  );
};

export default Services;
