import React from 'react';
import Nav from '../components/Header/Nav';
import ErrorComp from '../components/Error (Error)/ErrorComp';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Error</title>
        </Helmet>
      </>
      <Nav />
      <ErrorComp />
    </div>
  );
};

export default Error;
