import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import MeetOurVet from '../Component/MeetOurVet';
import Testimonials from '../Component/Testimonials';
import WinterCareTips from '../Component/WinterCareTips';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularSection></PopularSection>
           <MeetOurVet></MeetOurVet>
           <Testimonials></Testimonials>
           <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;