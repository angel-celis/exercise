var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(port);
console.log(`Running on port ${port}`);
