const mongoose = require('mongoose');
const Reference = require('./Reference');
module.exports = new mongoose.Schema({
    other: {
        type: Reference,
        default: void 0
    },
    type: {
        type: String,
        default: void 0
    }
}, {
    _id: false
});