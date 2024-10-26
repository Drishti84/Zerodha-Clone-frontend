import React from 'react' ;
import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Hero from '../landing_page/home/Hero';


describe('Hero Component', () => {
    test('render hero image',() =>{
        render(<Router>
            <Hero />
          </Router>);
        const heroImage = screen.getByAltText("hero img");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',"media/images/homeHero.png")

    });
});
