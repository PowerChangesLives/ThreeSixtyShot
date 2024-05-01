const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Route to login page
app.get('/login', (res) => {
    //This will send a request to the login html file
    res.sendFile(__dirname + 'login.html');
});

//POST requests
app.post('/login', (req, res) => {
    //insert login details
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});
