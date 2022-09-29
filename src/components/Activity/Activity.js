import React from 'react';
import './Activity.css';
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import '../Activity/Activity.css';

const Activity = ({AllsingleProduct}) => {
    console.log(AllsingleProduct);
    let totalTime = 0 ;
    for(const product of AllsingleProduct){
        totalTime = totalTime + product.time ;
    }

    // for toast part 
    // const successToast =()=>{
    //     toast('Success You Are Done', {
    //         className: 'custom-toast',
    //         draggable: true,
    //         position: toast.POSITION.TOP_CENTER
    //     })
    // }
    return (
        <div className='activities-container'>
            <div>
                <h1>Saimoom Kabir</h1>
                <p>Phone: +8801234567890</p>

                <p><small>Dhaka, Bangladesh</small></p>
            </div>
                <div className="info">
                    <div>
                        <h1>65(kg)</h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>20(yrs)</h1>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add a Break</h4>

                <div className="times-taken">
                    <ul>
                        <li>10s</li>
                        <li>20s</li>
                        <li>30s</li>
                        <li>40s</li>
                        <li>50s</li>
                    </ul>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time: {totalTime}s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break time: </h4>
                </div>
                <button  className='activity-button'>
                    Activity Completed
                </button>
        </div>
    );
};

export default Activity;