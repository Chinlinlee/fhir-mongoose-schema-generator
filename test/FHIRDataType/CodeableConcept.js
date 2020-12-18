const mongoose = require('mongoose');
const Coding = require('./Coding');
module.exports = new mongoose.Schema({
    coding: {
        type: [Coding],
        default: void 0
    }
}, {
    _id: false
});