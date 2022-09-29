import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider-container'>
            <h1>Saimoom Kabir</h1>
            <div className='health-data'>
                <ul>
                    <li><strong>75</strong> <small>kg</small> <br /> Weight</li>
                    <li><strong>6.5</strong> <br />Height</li>
                    <li><strong>20</strong> <small>yrs</small> <br /> Age</li>
                </ul>
            </div>
                <h4>Add A Break</h4>
            <div className='break-part'>
                <ul>
                    <li><strong>10</strong> <small>s</small></li>
                    <li><strong>20</strong> <small>s</small></li>
                    <li><strong>30</strong> <small>s</small></li>
                    <li><strong>40</strong> <small>s</small></li>
                    <li><strong>50</strong> <small>s</small></li>
                </ul>
            </div>
            <h4>Exercise Details</h4>
            <div className='erercise-details'>
                <div className='exercise'>
                    <p>Exercise time</p>
                    <p>200 second</p>
                </div>
                <div className='break-time'>
                    <p>Break time</p>
                    <p>15 second</p>
                </div>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Slider;