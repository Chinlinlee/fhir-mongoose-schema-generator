const mongoose = require('mongoose');
const Period = require('./Period');
module.exports = new mongoose.Schema({
    system: {
        type: String,
        default: void 0
    },
    value: {
        type: String,
        default: void 0
    },
    use: {
        type: String,
        default: void 0
    },
    rank: {
        type: Number,
        default: void 0
    },
    period: {
        type: Period,
        default: void 0
    }
}, {
    _id: false
});