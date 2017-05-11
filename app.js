var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var app = express();

app.use(bodyParser.json());
Match = require('./models/matches');
Delivery = require('./models/deliveries'); 
mongoose.connect("mongodb://localhost/ipldb");
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send("Please api/games");
});


// GET Matches
app.get('/api/matches',function(req,res){
	Match.getMatches(function(err, matches){
		if(err){
			throw err;
		}
		res.json(matches);
	});
});

// GET Deliveries
app.get('/api/deliveries',function(req,res){
	Delivery.getDeliveries(function(err, deliveries){
		if(err){
			throw err;
		}
		res.json(deliveries);
	});
});

// GET Delivery by match ID
app.get('/api/deliveries/:_id',function(req,res){
	Delivery.getDeliveriesById(req.params._id, function(err, deliveries){
		if(err){
			throw err;
		}
		res.json(deliveries);
	});
});



app.listen(3000);
console.log("Running on port 3000");



