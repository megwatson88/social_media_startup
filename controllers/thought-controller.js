const { Thought, User } = require('../models');
const thoughtController = {
    //define the methods 
    getThoughts(req, res) {
        //this is the thoguth reference 
        Thought.find()
        .sort({ createdAt: -1 })
            .then(dbThoughtData => {
                res.json(dbThoughtData)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getSingleThought(req, res) {
        Thought.findOne( {_id: req.params.thoughtId })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id'})
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    postThoughts(req, res) {
        Thought.create(req.body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate() //look up what to include <- 
            })
            .then(dbUserData => {
                res.json({ message: 'Thought Created' })
            })
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId }, { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                )
            })

            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' })
                } 
                    res.json( { message: 'Thought Created' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getThought(req, res) {
        Thought.findById(req.params.id)
            .then(dbThoughtData => {
                res.json(dbThoughtData)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbThoughtData => {
                if (res.json(dbThoughtData)) {
                    return res.status(404).json({ message: 'No thought found with this id' })
                }
            })

            .catch((err) => {
                res.status(500).json(err)
            }
            )
    },

    //delete thought need to find with id and delete
    deleteThought(req, res) {
        Thought.findByIdAndRemove({ _id: req.params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                   return res.status(404).json({ message: 'No thought found with this id' })
                } 
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $pull: { thoughts: req.params.id } },
                    { new: true }
                );
            })
            .catch(err => {
                res.status(500).json(err)
            }
            )
    }
}
module.exports = thoughtController;