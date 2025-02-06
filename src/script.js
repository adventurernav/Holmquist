const saleButtonWrapper = document.getElementById("sale-button-wrapper");
const cartElement = document.getElementById("cart");
let products = [];
let cart = [];


let emptyCart = () => {
  cart = [];
  cartElement.replaceChildren();
};

function addItemToOrder(event) {
  let newLi = document.createElement("li");
  let itemDeleteButton = document.createElement("button");
  const thisItem = event.target.productInfo;

  itemDeleteButton.textContent = "Delete";
  itemDeleteButton.productInfo = thisItem;
  itemDeleteButton.addEventListener("click", removeItemFromOrder);

  newLi.innerHTML = `<div>${thisItem.productType}, ${thisItem.size} ounces: $${thisItem.price} x ${thisItem.quantity}</div>`;
  newLi.appendChild(itemDeleteButton);
  cartElement.appendChild(newLi);
  cart.push(thisItem);
}

let removeItemFromOrder = (event) => {
  let productInfo = event.target.productInfo;
  let indexToRemove = -1;

  cart.forEach((cartItem) => {

    if (productInfo[0] === cartItem[0] && productInfo[1] === cartItem[1]) {
      indexToRemove = cart.indexOf(cartItem);
      if (indexToRemove>=0) {
        cart.splice(indexToRemove,1)
        const parent=event.target.parentElement
        parent.remove();
      }
    }

  });
console.log(cart);
};

let submitCart = () => {
  // Send the current cart info to the DB and complete the sale
  console.log(cart);
  emptyCart();
};

fetch("data.json", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    json.inventory.forEach((itemTypeObject) => {
      itemTypeObject.variants.forEach((product) => {
        // let newItemButton = document.createElement("button");
        // newItemButton.textContent = `${itemTypeObject.productType}, ${product.size}`;
        // newItemButton.addEventListener("click", addItemToOrder);
      //   newItemButton.productInfo = {
      //     id: product.id,
      //     productType: itemTypeObject.productType,
      //     size: product.size,
      //     price: product.price,
      //     quantity: 1
      // };
        
      });
    });
  });
