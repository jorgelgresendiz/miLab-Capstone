const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema(
    {
        nameOfItem: {
            type: String
        },
        quantity: {
            type: Number
        },
        comments: {
            type: String
        },
        dateOfArrival: {
            type: Date
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);