/* globals require, console */

var express = require('express');
var networkAdd = require('network-address');
var powerOff = require('power-off');

var app = express();

app.get('/sd', function(req, res) {
  powerOff(function(err, stderr, stdout) {
      if(!err && !stderr) console.log(stdout);
  });
  res.send('Your PC is just turning off :)');
});

console.log('Express is listening on ' + networkAdd());
console.log('Express is listening on localhost:3000');
app.listen(3000);