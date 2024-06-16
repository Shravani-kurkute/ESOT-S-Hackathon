const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/login-user', (req, res) => {
    const { username, password } = req.body;
    
    // Perform login logic here (e.g., check username and password against the database)
    if (username === 'testuser' && password === 'testpassword') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
