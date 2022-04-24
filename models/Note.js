const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    content: String,
    created: Date
})

module.exports = mongoose.model('Note', noteSchema);
