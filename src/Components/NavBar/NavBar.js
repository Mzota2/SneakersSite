import React from 'react'
import cartImage from '../../images/icon-cart.svg';
import profileImage from '../../images/image-avatar.png';

import './NavBar.css';
import Cart from '../Cart/Cart';
import Menu from '../MobileMenu/Menu';
import { useItemState } from '../../state/useAuth';
function NavBar() {

    const [active, setActive] = React.useState('Collection');
    const [showCart, setShowCart] = React.useState(false);
    const {item} = useItemState()
    const itemsCount = (item?.length?item[0].quantity:0)
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const cartRef = React.useRef(null);


    function handleToggleMobileMenu(){
        setShowMobileMenu(prev => !prev);
    }

    function handleActive(e){
        setActive(e.target.innerText);
    }

    function toggleCart(){
        setShowCart(prev => !prev)
    }

    function closeCart(e){
        if(!cartRef?.current?.contains(e.target)){
            setShowCart(false);
        }
    }

    React.useEffect(()=>{

    }, [item]);

    React.useEffect(()=>{

        document.addEventListener('mousedown', closeCart);

        return ()=> document.removeEventListener('mousedown', closeCart);
    }, [active])

  return (
    <header>

        {showCart?<Cart cartRef={cartRef}/>:<></>}

        {showMobileMenu? <Menu toggleMobileMenu={handleToggleMobileMenu}/>:<></>}

        <nav>

            <div className="nav-item-container nav-item-container-left">
                
                <div className='logo-container'>
                    <svg onClick={handleToggleMobileMenu} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path className='menu-icon' d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
                    <h1 className='logo-c'>sneakers</h1>
                   
                </div>
                

                <ul>
                    <a href="#Collection" onClick={handleActive} className={`nav-item ${active==='Collection'? 'active-menu':''}`}>Collection</a>
                    <a href="#Men" onClick={handleActive}  className={`nav-item ${active==='Men'? 'active-menu':''}`}>Men</a>
                    <a href="#Women" onClick={handleActive}  className={`nav-item ${active==='Women'? 'active-menu':''}`}>Women</a>
                    <a href="#About" onClick={handleActive}  className={`nav-item ${active==='About'? 'active-menu':''}`}>About</a>
                    <a href="#Contact" onClick={handleActive}  className={`nav-item ${active==='Contact'? 'active-menu':''}`}>Contact</a>
                </ul>

            </div>


            <div className="nav-item-container nav-item-container-right">
                <div onClick={toggleCart} className="cart-image-container">
                    <span className="cart-count">{itemsCount}</span>
                    <img src={cartImage} className='cart-icon' alt="cart" />
                </div>
               

                <div className="profile-container">
                    <img src={profileImage} alt="profile" />
                </div>
            </div>

        </nav>

        <hr className='nav-line' />

    </header>
    
  )
}

export default NavBar