const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/'));//app.use(express.static(__dirname + '/dist/angular.io-example'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
    '/dist/index.html'));});//'/dist/angular.io-example/index.html'));});
app.listen(process.env.PORT || 8080);
