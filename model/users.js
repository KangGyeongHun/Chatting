const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { response } = require('express');

const connect = mysql.createConnection({

});

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/register', function(request, reponse){
    response.sendFile(path.join(__dirname + '/register.html'));
})

app.post('/register', function(request, response){
    let name = request.body.name;
    let password = request.body.password;
    let email = request.body.email;
})

app.get('/login', function(request, reponse){
    response.sendFile(path.join(__dirname + '/login.html'));
})

app.post('/login', function(request, response){
    let password = request.body.password;
    let email = request.body.email;
})