import { FaShoppingCart } from "react-icons/fa";
import "../Styles/cartWidget.css"
import { useEffect, useState } from "react";
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

const CartWighet = () => {

  const [count, setCount] = useState(0);

  const { productPurchase} = useContext(CartContext);

  const getCount=(productPurchase)=>{
    setCount(productPurchase.length);
  }
  useEffect(() => {
    getCount(productPurchase);

  }, [productPurchase]);


  return (
    <Link  to={`/checkout`}>
    <div className="cartContainer">
      
      <FaShoppingCart />
     
      <div>{count} products</div>
    </div>
    </Link>
  );
};

export default CartWighet;
