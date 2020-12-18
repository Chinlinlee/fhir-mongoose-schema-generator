const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    preferred: {
        type: Boolean,
        default: void 0
    }
}, {
    _id: false
});