function applyFilters() {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const [minPrice, maxPrice] = price.split('-').map(Number);

        let isCategoryMatch = category === 'all' || category === productCategory;
        let isPriceMatch = price === 'all' || (productPrice >= minPrice && productPrice <= maxPrice);

        if (isCategoryMatch && isPriceMatch) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}
// Function to handle price negotiation
function negotiatePrice(originalPrice, productName) {
    // Get input value
    let offer = document.getElementById(`negotiatePrice${productName}`).value;
    
    // Validate input (basic validation, you might want to enhance this)
    if (!offer || isNaN(offer)) {
        alert("Please enter a valid number for your offer.");
        return;
    }
    
    // Convert to number
    offer = parseFloat(offer);
    
    // Display conversation
    let conversationDiv = document.getElementById(`conversation${productName}`);
    conversationDiv.innerHTML += `<p>You: ${offer}</p>`;
    
    // Example negotiation logic
    if (offer < originalPrice) {
        conversationDiv.innerHTML += `<p>Seller: I can't go that low.</p>`;
    } else if (offer >= originalPrice && offer <= originalPrice * 1.1) {
        conversationDiv.innerHTML += `<p>Seller: Let's meet in the middle.</p>`;
    } else {
        conversationDiv.innerHTML += `<p>Seller: Deal!</p>`;
    }
    
    // Clear input field after negotiation
    document.getElementById(`negotiatePrice${productName}`).value = '';
}

function buyNow() {
    // Redirect to the buy now page
    window.location.href = "buy now.html";
}