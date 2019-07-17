const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mule = require('./mule.js')

//Start express server
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  /* Set up UI */ 
  .get('/', (req, res) => { 
    Promise.all([mule.getProductsAsync, mule.getStationsAsync])
    .then(results => {

      //Grab
      var stations = results[1];
      var products = results[0];

      //Return
      res.render('pages/index', { 
        products: products,
        stations: stations
      })
    })
  })

  /* Set up API pass-through endpoints */
  .get('/products', mule.getProducts)
  .get('/stations', mule.getStations)

  /* Listen */
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))