//Require express
const express = require('express');

//Require function middleware verifyTime
var verify = require('./middleware');

//Get instance from express
const app = express();

//Set the port to 5006
const PORT = 5002;

app.use(express.json());
app.get('/error', function(req,res){
    res.render('error')
})
app.use(verify) ;

//CRUD
let users= [
    {
        name : 'aziz',
        lastname : 'aziz@gmail.com',
        id : 1 
    },
    {
        name : 'karim',
        lastname : 'karim@gmail.com',
        id : 2 
    },
    {
        name : 'mahdi',
        lastname : 'mahdi@gmail.com',
        id : 3 
    },
]

//Crud Operations

//Get all users

app.get('/all-users', (req , res) =>{
res.send(users)
})

//Add new user

app.post('/add-user', (req , res) =>{
    const newUser= req.body;
    users = [...users, newUser]
    res.send(users)
})

//Server PORT

app.listen(PORT, (err) => {
    err ? console.log(err)
    :
    console.log(` The server is running on Port ${PORT} `)
})


//PUG Template

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('home');
 });

 app.get('/services', function(req, res){
    res.render('services');
 });

 app.get('/contact', function(req, res){
    res.render('contact');
 });