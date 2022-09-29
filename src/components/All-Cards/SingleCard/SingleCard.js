import React from 'react';
import './SingleCard.css'
const SingleCard = (props) => {
    // console.log(props);
    const {AllhandelAddToCart} = props
    const {name,des, age, img , time} = props.product
    return (
        <div>
            <div className='card'>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className='card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-text'>{des}</p>
                    <p className='card-text'>Age: {age}</p>
                    <p className='card-text'>Time Require: {time}s</p>
                    <button onClick={()=>{AllhandelAddToCart(props.product)}} className='card-btn'>Add To Cart</button>
                </div>
                </div>
        </div>
    );
};

export default SingleCard;