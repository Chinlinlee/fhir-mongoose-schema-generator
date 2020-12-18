const mongoose = require('mongoose');
const Identifier = require('./Identifier');
module.exports = new mongoose.Schema({
    reference: {
        type: String,
        default: void 0
    },
    type: {
        type: String,
        default: void 0
    },
    identifier: {
        type: Identifier,
        default: void 0
    },
    display: {
        type: String,
        default: void 0
    }
}, {
    _id: false
});