const saleButtonWrapper = document.getElementById("sale-button-wrapper");
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
  console.log(cart);
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
  let type = thisItem[0];
  let size = thisItem[1];
  let price = thisItem[2];
  cart.push(thisItem)
}

fetch("/data.json", {
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
