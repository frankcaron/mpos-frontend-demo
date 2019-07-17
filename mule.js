var requestor = require('request');
var requestlater = require('request-promise')
const MULE_PRODUCT_BASE_URL = 'http://product-catalogue-system-api.us-e2.cloudhub.io/api/Products'
const MULE_PRICING_BASE_URL = 'http://pricing-calculator.us-e2.cloudhub.io/api/Price'
const MULE_ORDER_BASE_URL = 'http://purchase-order-process.us-e2.cloudhub.io/api/PurchaseOrder'
const MULE_STATION_BASE_URL = 'http://stations-systemapi.us-e2.cloudhub.io/api/station'

const getProductsAsync =
    requestlater({
        uri: MULE_PRODUCT_BASE_URL,
        json: true
    }).then(function(body) {
        return body;
    });

const getStationsAsync =
requestlater({
    uri: MULE_STATION_BASE_URL,
    json: true
}).then(function(body) {
    return body;
});

const getProducts = (request, response) => {
    requestor.get(MULE_PRODUCT_BASE_URL, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); } 
      response.status(res.statusCode).json(body);
    })
  }

const getStations = (request, response) => {
    requestor.get(MULE_STATION_BASE_URL, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); } 
      response.status(res.statusCode).json(body);
    })
  }

module.exports={
    getProducts,
    getProductsAsync,
    getStations,
    getStationsAsync
 };