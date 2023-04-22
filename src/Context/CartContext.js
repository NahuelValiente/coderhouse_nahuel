import React, {createContext, useState} from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) =>{
    const [productPurchase, setProductPurchase] = useState([]);

    return(
        <CartContext.Provider value={{productPurchase, setProductPurchase}}>
            {children}
        </CartContext.Provider>
    )
}