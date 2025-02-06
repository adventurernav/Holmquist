import React from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Sales from "./components/Sales";
// import Inventory from "./components/Inventory";
// import Accounts from "./components/Accounts";
import Cart from "./components/Cart";
import NoPage from "./components/NoPage";


export default function App() {


    const [cart, setCart] = useState({})
    const [json, setJson] = useState({})
  
    fetch("data.json", {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then(json=>{
            setJson(json)
        })
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sales" element={<Sales json={json} cart={cart} setCart={setCart} />} />
          {/* <Route path="inventory" element={<Inventory />} /> */}
          {/* <Route path="accounts" element={<Accounts />} /> */}
          <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}