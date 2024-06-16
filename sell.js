document.getElementById('sellForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').files[0];

    // Create a FormData object to handle the image file and other inputs
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

    // Example of logging form data to the console
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Price:', price);
    console.log('Category:', category);
    console.log('Image:', image);

    // Here you would typically send the form data to the server using fetch or XMLHttpRequest
    // For example:
    // fetch('/your-api-endpoint', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });

    alert('Form submitted successfully!');
});
