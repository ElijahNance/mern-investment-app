const router = require('express').Router();
const getData = require('../../utils/alpaca');

// get all posts for homepage
router.get('/stockprice', (req, res) => {
  console.log(req.query.stocksymbol);

      getData(req.query.stocksymbol)
        .then((dataset) => {
          res.set('Access-Control-Allow-Origin', '*');
          res.send(dataset);
        })
        .catch((error) => {console.log(error)})  

});

module.exports = router;
