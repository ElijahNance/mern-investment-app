const router = require('express').Router();

const stockApi = require('./alpaca/api.js');

router.use('/api', stockApi);

module.exports = router;
