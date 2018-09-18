var express = require('express');
var router = express.Router();

var productController = require('./../controllers/productController');

router.get('/product-list', productController.getProductList);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
