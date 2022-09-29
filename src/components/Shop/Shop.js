// import React from 'react';
import './Shop.css';
import React,{ useEffect, useState } from 'react';
import Activity from '../Activity/Activity'
import SingleCard from '../All-Cards/SingleCard/SingleCard';
// import { addToDb, getStoredCart } from '../../fakeData.json';


const Shop = () => {
    const [products , setProducts] = useState([]);
    const [AllsingleProduct, setAllsingleProduct] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
        // for localStorage 
    // useEffect(()=>{
    //     const storedCart = getStoredCart()
    //     // console.log(storedCart);
    //     for(const _id in storedCart){
    //         console.log(_id);
    //     }
    // },[])

    const AllhandelAddToCart=(product) =>{
        // console.log(product);
        const newAllsingleProduct = [...AllsingleProduct , product];
        setAllsingleProduct(newAllsingleProduct)

        // addToDb(product._id);
    }

    return (
        <div className='shop-containers'>
            <div className="product-container">
                <h1>Build Your Body: {products.length}</h1>
               <h2>SELECT TODAY'S EXERCISE</h2>
               <button className='interView-qs'>Ask Questions</button>
               {
                products.map(product => <SingleCard
                    key={product._id}
                    product = {product}
                    AllhandelAddToCart={AllhandelAddToCart}
                     ></SingleCard>)
               }

            </div>
            <div className="activities-container">
               <Activity AllsingleProduct={AllsingleProduct}></Activity>
            </div>        
        </div>
    );
};

export default Shop;