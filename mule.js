var requestor = require('request');
var requestlater = require('request-promise')
const MULE_BASE_URL = 'https://anypoint.mulesoft.com/mocking/api/v1/links/3e041994-280f-4950-b7b1-9ad945bf6a65/'

const getProductsAsync =
    requestlater({
        uri: MULE_BASE_URL + 'Products',
        json: true
    }).then(function(body) {
        return body;
    });

/* Helper function to return all Sites */
const getProducts = (request, response) => {
    requestor.get(MULE_BASE_URL + 'Products', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); } 
      response.status(res.statusCode).json(body);
    })
  }

module.exports={
    getProducts,
    getProductsAsync
 };