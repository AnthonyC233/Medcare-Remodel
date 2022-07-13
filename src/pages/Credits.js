import React from 'react';
import Nav from '../components/Header/Nav';
import CreditsComp from '../components/Credits (Credits)/CreditsComp';
import {Helmet} from "react-helmet";


const Credits = () => {
  return (
    <div>
        <>
      <Helmet>
        <title>Credit</title>  
      </Helmet>
      </>
      <Nav />
      <CreditsComp />
    </div>
  );
};

export default Credits;
