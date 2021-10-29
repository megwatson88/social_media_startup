const { User, Thought } = require('../models');

// GET /users
const userController = {
    getUser: (req, res) => {
        User.find()
            .select('-__v')
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    //get just one user 
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
    },
    //create a new user
    createUser: (req, res) => {
        User.create(req.body)
            .then(dbUserData => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    //update a users info
    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //delete a user
    deleteUser: (req, res) => {
        User.findOneAndDelete({ _id: req.params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user found' });

                }
                //delete thoughts by user
                return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

}
module.exports = userController;