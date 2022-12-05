const express = require("express")
const waxon = require("wax-on");
const hbs = require("hbs");
waxon.on(hbs.handlebars);

// tell waxOn where to find the layout files
waxon.setLayoutPath('./views/layouts');

const app = express();
app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.send("hello world");
})

