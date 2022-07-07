import React from 'react';

import Nav from '../components/Header (Contact)/Nav';
import ContactInfo from '../components/Info (Contact)/contactInfo';
import ContactForm from '../components/Contact (Contact)/ContactForm';

const Contact = () => {
    return (
        <div>
            <Nav />
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default Contact;