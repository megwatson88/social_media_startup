const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema ({
    title: String,
    body: String
})

const Thought = modle('Thought', thoughtSchema);

module.exports = Thought;