import React from 'react';
import OpenAccount from '../OpenAccount';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Awards from './Awards';
import Hero from './Hero';

function HomePage() {
    return (  
        <>
      
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        
        </>
    );
}

export default HomePage;