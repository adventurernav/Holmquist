const saleButtonWrapper = document.getElementById("sale-button-wrapper");
const cartElement = document.getElementById("cart");
let products = [];
let cart = [];

function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("modal-open");
}

// close currently open modal
function closeModal() {
  document.querySelector(".modal.open").classList.remove("open");
  document.body.classList.remove("modal-open");
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
  const thisItem = event.target.productInfo;
  let newCartItem = document.createElement("li")
  newCartItem.innerText=thisItem;
cartElement.appendChild(newCartItem)
}

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
