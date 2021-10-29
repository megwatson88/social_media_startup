const { User, Thought } = require('../models');

// GET /users
const userController = {
    getUser: (req, res) => {
        User.find()
            .select('-__v')
            .then(dbUserData => res.json(dbUserData));
    .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
}, 
getOneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
        .populate('thoughts')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}
}