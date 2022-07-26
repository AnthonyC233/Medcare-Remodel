import React from "react";

import Nav from "../components/Header/Nav";
import Header from "../components/Grid (Services)/serviceHeader";
import Grid from "../components/Grid (Services)/serviceGrid";
import Credits from "../components/Credits Link/Credits";
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
      <Credits />
    </div>
  );
};

export default Services;
