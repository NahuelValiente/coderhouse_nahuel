import React, { useState, useEffect } from "react";
import json from "../muebles.json"
import ItemCard from "./ItemCard";

import "../Styles/card.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(json)
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
