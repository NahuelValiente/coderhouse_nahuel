import React, { useContext, useState } from "react";
import Navbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import {  Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";
import NotFound from "./Components/NotFound";
import Living from "./Components/Living";
import Bedroom from "./Components/Bedroom";
import DiningRoom from "./Components/DiningRoom";
import Aboutme from "./Components/Aboutme";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./Components/Checkout";
import "./Styles/app.css"


const App = () => {



  return (
    <div className="App" id="app">
     <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={   <ItemListContainer/> }> </Route>
        <Route path="/products" element={   <ItemListContainer/> }> </Route>
        <Route path="/living" element={   <Living/> }> </Route>
        <Route path="/bedroom" element={   <Bedroom/> }> </Route>
        <Route path="/diningroom" element={   <DiningRoom/> }> </Route>
        <Route path="/aboutme" element={   <Aboutme/> }> </Route>
        <Route path="/checkout" element={   <Checkout/> }> </Route>
        <Route
          path="/:id"
          element={<ItemDetail  />}
        />
        <Route path="*" element={   <NotFound/> }> </Route>
      </Routes>
      </CartProvider>
 
    </div>
  );
};

export default App;
