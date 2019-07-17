const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mule = require('./mule.js')

//Start express server
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => { 
    Promise.resolve(mule.getProductsAsync).then(products => {
        res.render('pages/index', { products });
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
  })
  .get('/products', mule.getProducts)
  .get('/test', (req, res) => res.send('Your demo is going to be magic.'))

/* 
    Extended pass-through of what we're going to need to make the
    real magic happen.

    .get('/', (req, res) => res.render('pages/index', {
      menuItems: menuItems,
      paymentTypes: paymentTypes,
      orderItems: orderItems,
      userDetails: userDetails,
      offer: offer
      etc. 
    }))

*/ 

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))