import React, {useEffect} from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "./configuration"; // Assuming the correct path to your configuration file
import Layout from "./components/Layout";
import Home from "./components/Home";
import Sales from "./components/Sales";
import Inventory from "./components/Inventory";
// import Accounts from "./components/Accounts";
import Cart from "./components/Cart";
import NoPage from "./components/NoPage";


export default function App() {

const [cart, setCart] = useState({})
const [data, setData] = useState([]);

  useEffect(() => {
    console.log(cong);
    
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(cong);
    console.log(database);
    
    // Reference to the specific collection in the database
    const collectionRef = ref(database, "holmquist");

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        // Check if dataItem exists
        if (dataItem) {
          
          // Convert the object values into an array
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };

    // Fetch data when the component mounts
    fetchData();
  }, []);
  
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sales" element={<Sales products={data[1]} cart={cart} setCart={setCart} />} />
          <Route path="inventory" element={<Inventory products={data} />} />
          {/* <Route path="accounts" element={<Accounts />} /> */}
          <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}