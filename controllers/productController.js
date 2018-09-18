var sqlConn = require('./../config/sqlconfig')

sqlConn.connect(function(err){
  if(err) throw err;
  console.log('Successfully connected')
});


function getProductList(req, res){
  let productListQuery = "SELECT * FROM product"

  product_list = sqlConn.query(productListQuery, function(err, result){
    if(err) throw err;
    console.log(result);
  })

  res
    .status(200)
    .json({message: product_list});
}

function addProduct(req, res){
  let addProductQuery = `INSERT INTO product(id, product_name, sku, quantity) VALUES(UUID(), ${req.body.product_name}, ${req.body.sku}, ${req.body.quantity})`

  const product = {
    product_name: req.body.product_name,
    sku: req.body.sku,
    quantity: req.body.quantity
  };

  console.log(product)

  sqlConn.query(addProductQuery, function(err, result){
    if(err) throw err;
    console.log(result);
  })

  res
    .status(201)
    .json({
      message: 'Product has been created',
      createdProduct: product
    })
}

function updateProduct(req, res){
  res
    .status(201)
    .json({
      message: 'Product has been updated',
      updatedProduct: 'updated'
    })
}

function deleteProduct(req, res){

}

module.exports = {
  getProductList,
  addProduct,
  updateProduct,
  deleteProduct
}
