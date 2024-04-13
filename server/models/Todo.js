const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        minlength: 1,
        required: true,

    },
    done: {
        type: Boolean,
        default: false
    }
})

const todoModel = mongoose.model('todo',todoSchema)
module.exports = todoModel;