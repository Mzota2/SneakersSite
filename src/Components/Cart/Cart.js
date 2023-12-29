import React from 'react'
import './Cart.css';
import cartImage from '../../images/image-product-1.jpg';
import deleteIcon from '../../images/icon-delete.svg';
import { useItemState } from '../../state/useAuth';
function Cart({cartRef}) {
    const {item, setItem} = useItemState();
   


    function deleteItem(){
        setItem([])
        localStorage.removeItem('cartItems');
    }

    React.useEffect(()=>{

    }, [item]);

    return (
        <div ref={cartRef} className='cart-container'>
            <div className="cart-header">
                <h3 className='cart-title'>Cart</h3>
            </div>

            <div className="cart-contents-container">
                {item?.length?

                <div className="contents">

                    <div className="cart-item-image-container">
                        <img src={cartImage} className='cart-item-image' alt="cart item" />
                    </div>
                    {
                        item?.map((item, index)=>{
                            return(
                            <div key={index} className="cart-item-description">

                                <p>{item?.description}
                                    ${item?.price} × {item?.quantity} <strong>${item?.price * item?.quantity}</strong>
                                </p>

                            </div>
                            )
                        })

                    }
                    

                    <div onClick={deleteItem} className="delete-icon-container">
                        <img src={deleteIcon} alt="delete" />
                    </div>
                
                    
                </div>:
                
                
                
                
                <p className='cart-message'>Your cart is empty</p>}

                {item?.length && <button onClick={deleteItem} className='cart-checkout-btn'> Checkout</button>}
            </div>

        </div>
    )
}

export default Cart