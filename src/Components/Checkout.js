import React, { useEffect, useState } from 'react';
import '../Styles/checkout.css';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Checkout = () => {
  
  const navigate=useNavigate();  
  const { productPurchase} = useContext(CartContext);
   console.log(productPurchase);
    const total = productPurchase.reduce((accumulator, product) => accumulator + product.price, 0);
    const TotalCart=() =>{
      productPurchase.splice(0, productPurchase.length);
      toast ("La compra fue realizada con Exito!");
      setTimeout(navigate("/"), 30000);
    }

   
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul className="items-list">
        {
          <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productPurchase.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </ul>
      <div className="total">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      
      <button className='checkout-btn' onClick={()=> TotalCart()}>Buy</button>
        <ToastContainer
           position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
};

export default Checkout;
