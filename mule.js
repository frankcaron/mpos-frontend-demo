var requestor = require('request');
var requestlater = require('request-promise')
const MULE_PRODUCT_BASE_URL = 'http://product-catalogue-system-api.us-e2.cloudhub.io/api/Products'

const getProductsAsync =
    requestlater({
        uri: MULE_PRODUCT_BASE_URL,
        json: true
    }).then(function(body) {
        return body;
    });

/* Helper function to return all Sites */
const getProducts = (request, response) => {
    requestor.get(MULE_PRODUCT_BASE_URL, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); } 
      response.status(res.statusCode).json(body);
    })
  }

module.exports={
    getProducts,
    getProductsAsync
 };