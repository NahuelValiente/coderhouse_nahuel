import React from 'react';
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import ItemCard from './ItemCard';
import "../Styles/card.css"

const Living = () => {
    
    
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
    


    const newObj = product.filter(product => product.Tipo == "1");
    console.log(newObj)
  return (
    <div className="body-card">
    {newObj.map((product, index) => {
      return(
        <div key={index} >
        <ItemCard product={product}/>
      </div>
    )
})}
      </div>
        
      )
  
 
};

export default Living;

