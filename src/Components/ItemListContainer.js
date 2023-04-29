import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "../Styles/card.css"


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

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


  console.log("products", products);

  useEffect(() => {
    getProducts( )
  }, []);


  return (
    <div className="body-card">
      {products?.map((product, index) => (
        <div key={index} >
          <ItemCard product={product}/>
        </div>
      ))}
    </div>
  );
  
};


export default ItemListContainer;
