import React from 'react'
import {itemState} from './useAuth'
function AuthProvider({children}) {
    const [cartItems, setCartItems] = React.useState()

    function handleSetItem(item){
        setCartItems(item);
    }

    React.useEffect(()=>{
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    }, [])
  return (
    <itemState.Provider value={{item:cartItems, setItem:handleSetItem}} >
        {
            children
        }

    </itemState.Provider>
  )
}

export default AuthProvider