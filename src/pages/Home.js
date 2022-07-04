import React from 'react';

import Nav from '../components/Header/Nav';
import About from '../components/About (Home)/About';
import Gallery from '../components/Gallery (Home)/GalleryHome';

const Home = () => {
    return (
        <div>
            <Nav />
            <About />
            <Gallery />
        </div>
    )
}

export default Home;