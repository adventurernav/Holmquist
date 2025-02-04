const saleButtonWrapper = document.getElementById("sale-button-wrapper");
const cartElement = document.getElementById("cart");
let products = [];
let cart = [];

let emptyCart = () => {
  cart = [];
  cartElement.replaceChildren();
};

function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("modal-open");
}

function cancelModal() {
  document.querySelector(".modal.open").classList.remove("open");
  document.body.classList.remove("modal-open");
  emptyCart();
}

window.addEventListener("load", function () {
  // close modals on background click
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  });
});

function addItemToOrder(event) {
  let newLi = document.createElement("li");
  let itemDeleteButton = document.createElement("button");
  const thisItem = event.target.productInfo;
  itemDeleteButton.textContent = "Delete";
  itemDeleteButton.productInfo = thisItem;
  itemDeleteButton.addEventListener("click", removeItemFromOrder);
  newLi.innerText = thisItem;
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
        let newItemButton = document.createElement("button");
        newItemButton.textContent = `${itemTypeObject.productType}, ${product.size}`;
        newItemButton.addEventListener("click", addItemToOrder);
        newItemButton.productInfo = [
          itemTypeObject.productType,
          product.size,
          product.price,
        ];
        saleButtonWrapper.appendChild(newItemButton);
      });
    });
  });
