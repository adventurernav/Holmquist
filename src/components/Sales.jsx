import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";


export default function Sales(props) {
  
  const [jsonData, setJsonData] = useState({})

  useEffect(() => {
    let data = props;
    setJsonData(data)
    console.log(props);
    
  }, [])
  useEffect(() => {
    console.log(jsonData.json);
    
  }, [jsonData])
  
// console.log(props);
// let props.json = jsonData;
// let props.cart = cart;

// props.json.inventory.forEach((itemTypeObject) => {
//   itemTypeObject.variants.forEach((product) => {
//     // let newItemButton = document.createElement("button");
//     // newItemButton.textContent = `${itemTypeObject.productType}, ${product.size}`;
//     // newItemButton.addEventListener("click", addItemToOrder);
//   //   newItemButton.productInfo = {
//   //     id: product.id,
//   //     productType: itemTypeObject.productType,
//   //     size: product.size,
//   //     price: product.price,
//   //     quantity: 1
//   // };
//   // console.log(product);
  
    
//   });
// });

  return (
    <div>
      <h1>Let's sell some shit</h1>
      <Button
        size="medium"
        color="secondary"
        aria-label="Cart"
        href="/cart"
        variant="outlined"
      >
        <ShoppingBagOutlined />
      </Button>
    </div>
  );
}
