const { Schema } = require('mongoose');

const stockSchema = new Schema ({
    stockId: {
        type: String,
        required: true
    },
    stockName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    shares: {
        type: Number,
        default: 0
    },
});


module.exports = stockSchema;
