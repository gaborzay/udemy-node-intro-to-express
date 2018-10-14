var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function(req, res) {
    var sounds = {
     pig: "Oink",
     cow: "Moo",
     dog: "Woof Woof!"
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound +"'");
});

app.get('/repeat/:str/:times', function(req, res) {
    var string = req.params.str+" ";
    var times = Number(req.params.times);
    res.send(string.repeat(times));
});

app.get('*', function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(PORT, process.env.IP, function() {
   console.log("Server has started."); 
});