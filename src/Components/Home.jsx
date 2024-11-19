import React from 'react';
import Banner from './Banner';
import Slider from './Slider';

const Home = () => {
    return (
        <div className='p-6'>
            <Slider></Slider>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;