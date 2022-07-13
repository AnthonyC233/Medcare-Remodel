import React from 'react';

import Nav from '../components/Header/Nav';
import Header from '../components/Header (Contact)/Header';
import ContactInfo from '../components/Info (Contact)/contactInfo';
import ContactForm from '../components/Contact (Contact)/ContactForm';
import {Helmet} from "react-helmet";



const Contact = () => {
  return (
    <div>
      <>
      <Helmet>
        <title>Contact</title>  
      </Helmet>
      </>
      <Nav />
      <Header />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
