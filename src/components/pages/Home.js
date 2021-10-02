import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from './Cards';
import Footer from './Footer';
import Contact from './Contact';


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
            {/* <Contact /> */}
        </>
    );
}

export default Home;
