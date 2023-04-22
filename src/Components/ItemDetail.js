
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import "../Styles/itemDetail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import json from "../muebles.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    const { productPurchase, setProductPurchase} = useContext(CartContext);
  

    const obtainObj = (id) =>{
      setProducts(json)
    }

    const addProductToCart=(productX) =>{
    
     
      setProductPurchase([...productPurchase, productX]);

      toast("Product added succesfully!");
      
     
  }


    useEffect(() => {
      obtainObj(id);

    }, [id]);

    const newObj = product.filter(product => product.id == id);

   
  return (
    <>
    {newObj?.map((product, index) => {
      return(
   <div className="product-detail-container" key={index}>
      <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.img}  />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
        <button className='button-detail' onClick={()=> addProductToCart(product)}>Add to Cart</button>
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
    </div>
    
      )
    
    })}
      </>
        
      )
  
 
};

export default ItemDetail;


