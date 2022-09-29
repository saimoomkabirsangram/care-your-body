import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Activity.css';

const Activity = ({AllsingleProduct}) => {
    const notify = () => toast("We Have Done.");
    const [timeSet, SettimeSet] = useState ()
    // console.log(AllsingleProduct);
    let totalTime = 0 ;
    for(const product of AllsingleProduct){
        totalTime = totalTime + parseInt(product.time) ;
    }
    const handelTimeSet =(e)=>{
        SettimeSet(e.target.innerText);
    }
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
                        <button onClick={handelTimeSet} >10s</button>
                        <button onClick={handelTimeSet} >25s</button>
                        <button onClick={handelTimeSet} >30s</button> 
                        <button onClick={handelTimeSet} >45s</button>
                        <button onClick={handelTimeSet} >50s</button>
                    </ul>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise time: {totalTime}s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break time: {timeSet} </h4>
                </div>
                <button onClick={notify} className='activity-button'>
                    Activity Completed
                </button>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default Activity;