const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    }, 
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },],
    friends: [{
        type: Schema.Types.ObjectId,
        reg: 'User',
    }]
}, 
{
    toJson: {
        virtuals: true,
    },
    id: false,
}
);



const User = model('User', UserSchema);

module.exports = User;