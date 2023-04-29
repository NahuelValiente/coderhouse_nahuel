
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import "../Styles/itemDetail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";


const ItemDetail = () => {
  const [product, setProducts] = useState([]);
    const productsCollection = collection(db, "products");
  // console.log("productsCollection", productsCollection);


  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection);
    // console.log("dataProducts", dataProducts);
    console.log("dataProducts.docs", dataProducts.docs);
    setProducts(
      dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  console.log("products", product);

  useEffect(() => {
    getProducts( )
  }, []);
    const { id } = useParams();
   
    const { productPurchase, setProductPurchase} = useContext(CartContext);
   

    const addProductToCart=(productX) =>{
    
     
      setProductPurchase([...productPurchase, productX]);

      toast("Product added succesfully!");
      
     
  }

    const newObj = product.filter(product => product.id == id);
   
  return (
    <>
    {newObj?.map((product, index) => {
      return(
   <div className="product-detail-container" key={index}>
      <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image}  />
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


