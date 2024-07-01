const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Successful</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <div id="success-message">
                    <h2>Login successful! Welcome, ${username}.</h2>
                    <p>Your password is: ${password}</p>
                </div>
                <footer>&copy; 2024 Our Website</footer>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});