document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
    const cartSummary = document.getElementById('cartSummary');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    let totalPrice = 0;

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}">
            <div>
                <p>Category: ${item.category}</p>
                <p>Name: ${item.name}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
        totalItems++;
        totalPrice += item.price;
    });

    cartSummary.innerHTML = `Total Items: ${totalItems} <br> Total Price: $${totalPrice.toFixed(2)}`;

    // Save total amount to localStorage
    localStorage.setItem('totalAmount', totalPrice.toFixed(2));
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems();
    alert('Cart has been cleared!');
}

function buyNow() {
    // Redirect to the buy now page
    window.location.href = "buy now.html";
}




