const mongoose = require('mongoose');
const Period = require('./Period');
module.exports = new mongoose.Schema({
    use: {
        type: String,
        default: void 0
    },
    type: {
        type: String,
        default: void 0
    },
    line: {
        type: [String],
        default: void 0
    },
    city: {
        type: String,
        default: void 0
    },
    district: {
        type: String,
        default: void 0
    },
    state: {
        type: String,
        default: void 0
    },
    postalCode: {
        type: String,
        default: void 0
    },
    country: {
        type: String,
        default: void 0
    },
    period: {
        type: Period,
        default: void 0
    }
}, {
    _id: false
});