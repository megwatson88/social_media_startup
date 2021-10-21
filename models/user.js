const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {

    }, 
    thoughts: {

    }
})

const User = model('User', UserSchema);

module.exports = User;