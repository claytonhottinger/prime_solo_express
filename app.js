var ranNum = require('./modules/first.js');
var toUSD = require('./modules/second.js');
var third = require('./modules/third.js');
var express = require('express');
var app = express();

app.use('/static',express.static(__dirname + '/static'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/balance', function(req, res, next) {
  res.send(third.accountBalance() + third.randomNum());
});

app.listen(process.env.PORT || 3000);
