function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.body.classList.remove('modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });
});

function addItemToOrder(itemName) {
    console.log(itemName);
}

fetch('/data.json', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
console.log(json.inventory)
});