const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema ({
    title: String,
    body: String
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;