const mongoose = require('mongoose');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Reference = require('./Reference');
module.exports = new mongoose.Schema({
    use: {
        type: String,
        default: void 0
    },
    type: {
        type: CodeableConcept,
        default: void 0
    },
    system: {
        type: String,
        default: void 0
    },
    value: {
        type: String,
        default: void 0
    },
    period: {
        type: Period,
        default: void 0
    },
    assigner: {
        type: Reference,
        default: void 0
    }
}, {
    _id: false
});