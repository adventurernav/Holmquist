import React, { useEffect, useState } from "react";
import { Button, List, ListItem } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";

export default function Sales(props) {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});
  const [buttonUI, setButtonUI] = useState(null);

  useEffect(() => {
    let data = props;

    if (data.hasOwnProperty("products")) {
      setProducts(data.products);
    }

    // if (data.hasOwnProperty("cart")) {
    //   setCart(data.cart);
    // }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setButtonUI(productButtonsLoop(products));
    }

    // add cart to dependencies array
  }, [products]);

  let productButtonsLoop = (productArrayState) => {
    let newButtonArray = [];

    if (Array.isArray(productArrayState) && productArrayState.length > 0) {
      newButtonArray = productArrayState.map((product, index) => {
        if (Array.isArray(product.variants) && product.variants.length > 0) {
          const productVariants = product.variants.map((variant, i) => {
            return (
              <ListItem key={variant.id}>
                <Button >
                  {product.productType}, {variant.size} ounces, ${variant.price}
                </Button>
              </ListItem>
            );
          });
          return productVariants;
        }
      });
    }
    return newButtonArray;
  };

  return (
    <div>
      <h1>Let's sell some shit</h1>
      <Button
        size="medium"
        color="secondary"
        aria-label="Cart"
        href="/cart"
        variant="outlined"
        disabled
      >
        <ShoppingBagOutlined />
      </Button>
      <List>{buttonUI}</List>
    </div>
  );
}
