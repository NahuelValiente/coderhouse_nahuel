import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  return (
    <div className="container-card">
      <div className="wrapper">
        <div className="banner-image">
          <img src={product.image} />{" "}
        </div>
        <h2 className="cardTitle"> {product.name}</h2>
      </div>
      <div className="button-wrapper">
      <Link to={`/${product.id}`}>
        <button >DETAILS</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
