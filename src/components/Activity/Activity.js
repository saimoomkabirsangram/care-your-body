import React from 'react';
import './Activity.css';
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import '../Activity/Activity.css';

const Activity = ({singleProduct}) => {
    console.log(singleProduct);
    let totalTime = 0 ;
    for(const product of singleProduct){
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
        <div className='activity-container'>
            <div className=''>
                <h1>Delower Hossain </h1>
                <p>Email: hdelower68@gmial.com</p>

                <p><small>Jhenaidha, Dhaka, Bangladesh</small></p>
            </div>
                <div className="my-info">
                    <div>
                        <h1>65(kg)</h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>22(yrs)</h1>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add a Break</h4>

                <div className="take-time">
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
                <button  className='activity-btn'>
                    <h4 >Activity Completed</h4>
                </button>
        </div>
    );
};

export default Activity;