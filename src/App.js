import React, { useContext, useState } from "react";
import Navbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import {  Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";
import NotFound from "./Components/NotFound";
import Notebook from "./Components/Notebook";
import Procesador from "./Components/Procesador";
import Aboutme from "./Components/Aboutme";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./Components/Checkout";
import "./Styles/app.css"
import Placa from "./Components/Placa";


const App = () => {



  return (
    <div className="App" id="app">
     <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={   <ItemListContainer/> }> </Route>
        <Route path="/products" element={   <ItemListContainer/> }> </Route>
        <Route path="/notebook" element={   <Notebook/> }> </Route>
        <Route path="/placa" element={   <Placa/> }> </Route>
        <Route path="/procesador" element={   <Procesador/> }> </Route>
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
