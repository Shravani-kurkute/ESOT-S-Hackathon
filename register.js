const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Handle POST request to /register-user
app.post('/register-user', (req, res) => {
  const { name, email, password } = req.body;

  // Simulated success response for demonstration
  if (name && email && password) {
    // Replace with actual logic to save user data in database, etc.
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

document.addEventListener("DOMContentLoaded", function() {
  const contactUsButton = document.getElementById("contact-us-button");
  const contactSection = document.getElementById("contact");

  contactUsButton.addEventListener("click", function(event) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior:"smooth"});
  });
});