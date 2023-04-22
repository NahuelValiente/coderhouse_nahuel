import React, { useState } from 'react';
import '../Styles/checkout.css';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


const Checkout = () => {

    const { productPurchase} = useContext(CartContext);


    const total = productPurchase.reduce((accumulator, product) => accumulator + product.price, 0);

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
                <td>{product.name}</td>
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
      <button className="checkout-btn">Confirmar compra</button>
    </div>
  );
};

export default Checkout;
