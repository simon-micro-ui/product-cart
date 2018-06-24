//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/product-cart'));

app.get('/index.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/dist/product-cart/index.html'));
});
app.get('/product-cart.js', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/dist/product-cart/main.js'));
});

console.log("Starting server on port 8083");
app.listen(process.env.PORT || 8083);