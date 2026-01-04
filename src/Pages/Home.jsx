import React from 'react';
import Slider from '../Component/Slider';
import MostPopular from './MostPopular';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <MostPopular></MostPopular>
            <About></About>
            <Contact></Contact>
            <Privacy></Privacy>
        </div>
    );
};

export default Home;