var mysql = require('mysql');
//
var connectionAtributes = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'test6'
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // acquireTimeout: 1000000
}
var conDb = mysql.createConnection(connectionAtributes);


// conDb.connect(function (err){
//   if(err) throw err;
//   console.log('Successfully connected')
// });
//
// productQuery = 'SELECT * from product'
// conDb.query(productQuery, function(err, result){
//   if(err) throw err;
//   console.log(result);
// })

module.exports = conDb;
