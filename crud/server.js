var express = require('express');
var mongoose = require('mongoose');
var routes = require('./movies/schema crud');
var bodyParser=require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use('/movie', routes)

var port = 4151;
app.listen(port, function(){
  console.log("server running on 4151");
});
