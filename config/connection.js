const mongoose = require('mongoose');
const thoughtController = require('../controllers/thought-controller');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_media_startup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

module.exports = mongoose.connection;