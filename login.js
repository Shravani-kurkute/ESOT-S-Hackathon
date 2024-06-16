// script1.js - Contains fetch API call and response handling
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };
        
        fetch('/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('Login successful');
                window.location.href = '/dashboard.html'; // Redirect to dashboard page
            } else {
                alert('Login failed. Please try again.'); // Handle login failure
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Login failed. Please try again.'); // Handle fetch error
        });
    });
});
