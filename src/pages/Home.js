import React from 'react';

import Header from '../components/Header/Header';
import About from '../components/About (Home)/About';
import Gallery from '../components/Gallery (Home)/GalleryHome';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Gallery />
        </div>
    )
}

export default Home;