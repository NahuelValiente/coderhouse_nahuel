import React from 'react';
import { useEffect, useState } from "react";
import json from "../Productos.json"
import ItemCard from './ItemCard';
import "../Styles/card.css"

const Living = () => {
    
    const [product, setProducts] = useState([]);

    const obtainObj = () =>{
      setProducts(json)
    }

    useEffect(() => {
      obtainObj()
       
    }, []);


    const newObj = product.filter(product => product.search == "n");
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

