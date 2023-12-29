import React from 'react'
import './ViewProduct.css';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';



function ViewProduct({handleNext, handlePrev, activeProduct, handleView}) {
    
  return (
    <div className='view-product-container'>

        <div className="overlay"></div>

        <div className="v-product-contents product-active-image-container">

            <div onClick={handleView} className="v-close-icon-container ">
                <svg className='v-close-icon' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFF" fill-rule="evenodd"/></svg>
            </div>

            <div onClick={handlePrev} className="product-nav-prev product-nav c-product-nav c-product-nav-prev">
                <img className='product-nav-icon' src={prev} alt="previous" />
            </div>

            <img className='active-product-image product-image-desktop' src={activeProduct} alt="active product" />

            <div onClick={handleNext} className="product-nav-next product-nav c-product-nav c-product-nav-next">
                <img className='product-nav-icon' src={next} alt="next" />
            </div>

        </div>

    </div>
  )
}

export default ViewProduct