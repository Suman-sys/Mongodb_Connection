const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const darkarmySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, {timestamps: true})

const DarkArmy = mongoose.model("DarkArmy", darkarmySchema);

module.exports = DarkArmy;