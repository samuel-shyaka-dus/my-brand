const mongoose = require('mongoose')


const QuerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    content: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Query', querySchema)