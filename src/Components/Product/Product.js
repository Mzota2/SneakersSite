import React, { useState } from 'react'
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';

import image1ThumbNail from '../../images/image-product-1-thumbnail.jpg';
import image2ThumbNail from '../../images/image-product-2-thumbnail.jpg';
import image3ThumbNail from '../../images/image-product-3-thumbnail.jpg';
import image4ThumbNail from '../../images/image-product-4-thumbnail.jpg';

import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';

import next from '../../images/icon-next.svg';
import prev from '../../images/icon-previous.svg';

import './Product.css';
import ViewProduct from '../ViewProduct/ViewProduct';

import {useItemState} from '../../state/useAuth'

function Product() {
    const [index, setIndex] = React.useState(0);
    let {item, setItem} = useItemState()
   
    
    const amount = item?.length?item[0]?.quantity:0;


    const [viewProduct, setViewProduct] = React.useState(false);
    
    const productData = [
        {image:image1, thumbnail:image1ThumbNail},
        {image:image2, thumbnail:image2ThumbNail},
        {image:image3, thumbnail:image3ThumbNail},
        {image:image4, thumbnail:image4ThumbNail},
    ]

    const [activeProduct, setActiveProduct] = useState(productData[index].image);

    function handleViewImage(){
        setViewProduct(prev => !prev);
    }
    function handleNext(){
        
        if(index < productData.length-1){
            setIndex(prev => {
                setActiveProduct(productData[prev+1].image);
                return prev = prev +1;
            });
            
        }

        else{
            setActiveProduct(productData[index].image)
        }
    }

    function handlePrev(){
        if(index > 0){
            setIndex(prev => {
                setActiveProduct(productData[prev-1].image);
                return prev = prev -1;
            });
            // this line will reverse 
            
        }

        else{ 
            setActiveProduct(productData[index].image)
        }
    }


    function incrementItem(){
        if(item?.length){
            
            setItem(prev =>{
                const result = prev[0];
                return[
                    {
                        ...result,
                        quantity:result.quantity+1
                    }
                ]}
            )

            const newAmount = item[0]?.quantity+1;
            console.log(newAmount)
            item = [{...item[0], quantity:newAmount}]
            localStorage.setItem('cartItems', JSON.stringify(item));

        }
        else{
            window.alert('Please add item first');
        }
    }

    function decrementItem(){
        if(item?.length && item[0]?.quantity > 0){
            if(item[0]?.quantity === 1){
                console.log('limit reached');
                localStorage.removeItem('cartItems');
                setItem([]);
            }

            else{
                setItem(prev =>{
                    const result = prev[0];
                    return[
                        {
                            ...result,
                            quantity:result.quantity-1
                        }
                    ]}
                )
                const newAmount = item[0]?.quantity-1;
                item = [{...item[0], quantity:newAmount}]
                localStorage.setItem('cartItems', JSON.stringify(item));
            }
           
        }
       
        else{
            window.alert('Please add item first');
        }
    }

    function addCart(){
        
        localStorage.setItem('cartItems', JSON.stringify([
            {
            item:'sneakers', 
            description:'Fall Limited Edition Sneakers',
            price:125,
            quantity:1
            }]));

 

        setItem(
            [
                {
                item:'sneakers', 
                description:'Fall Limited Edition Sneakers',
                price:125,
                quantity:1
                }
            ]
        );
    }

    React.useEffect(()=>{
        
    },[index, item]);

  return (
    <div className='container'>
        {viewProduct? <ViewProduct handleNext={handleNext} handleView={handleViewImage} handlePrev={handlePrev} activeProduct={activeProduct}/>:<></>}

        <div className='product-container'>

            <div className="product-active-image-container">

                <div onClick={handlePrev} className="product-nav-prev product-nav">
                    <img className='product-nav-icon' src={prev} alt="previous" />
                </div>

                <img className='active-product-image' src={activeProduct} alt="active product" />

                <img onClick={handleViewImage} className='active-product-image product-image-desktop' src={activeProduct} alt="active product" />
                
                <div onClick={handleNext} className="product-nav-next product-nav">
                    <img className='product-nav-icon' src={next} alt="next" />
                </div>

            </div>

            <div className="product-images-container">
                {productData.map((item, index)=>{
                    const {image, thumbnail} = item;
                    return(
                        <img onClick={()=>{
                            setActiveProduct(image)
                        }} className={`product-thumbnail ${activeProduct===image? 'active':''}`} key={index} src={thumbnail} alt="product" />
                    )
                })}
            </div>

        </div>
       

        <div className="product-details-container">
            <h4 className='logo-text'>SNEAKER COMPANY</h4>

            <h2 className='product-title'>Fall Limited Edition Sneakers</h2>

            <p className='product-description'>These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

            <div className="price-details-container">

                <h3 className='current-price'>$125.00 <span className='price-off'>50%</span></h3>

                <p className='actual-price'>$250.00</p>

            </div>

            <div className="product-buttons-container">
                <div className="counter-product-container">
                    <button onClick={decrementItem} className='product-decrement product-btn'><img src={minus} alt="minus" /></button>
                    <p className='product-count'>{amount}</p>
                    <button onClick={incrementItem} className='product-increment product-btn'><img src={plus} alt="plus" /></button>
                </div>

                <button disabled={item?.length?true:false} onClick={addCart} className='add-to-cart-button'>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path className='cart-icon' d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFF" fill-rule="nonzero"/></svg>
                    <p>Add to cart</p>
                </button>

            </div>


        </div>
        
    </div>
  )
}

export default Product