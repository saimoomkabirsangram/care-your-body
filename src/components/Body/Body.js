import React from 'react';
import Product from '../Product/Product';
import Slider from '../Slider/Slider';
import './Body.css'

const Body = () => {
    return (
        <div className='body-container'>
            <Product></Product>
            <Slider></Slider>
        </div>
    );
};

export default Body;