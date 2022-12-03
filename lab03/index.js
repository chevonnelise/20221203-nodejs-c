// include Express to this file so that we can use it
// the variable can be ANY name
// but the parameter must be 'express'
const express = require('express');

const hbs = require('hbs');

// 2. create an express application
const app = express(); // when we call the express() it will create a new Express app

app.set('view engine', 'hbs')

app.use(express.static('public'));

// 3. define routes
app.get("/", function(req,res){
    res.render("index");
})

app.get('/hello/:name', function(req,res){
    const name = req.params.name;
    res.render('hello', {
        "personName" : "Wednesday"
    })
})


app.get('/now', function(req,res){
    const date = new Date();
    res.render('now',{
        'datetime': date
    })
})
// 4. start server
// if we didn't start server, the Express application won't be able
// to recieve any requests
app.listen(3000,function(){
    console.log("Server started");
})