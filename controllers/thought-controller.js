const { Thought, User} = require('../models');
const thoughtController = { 
    //define the methods 
    getThoughts(req, res) {
        //this is the thoguth reference 
        Thought.find()
        .then(dbThoughtData => {
            res.json(dbThoughtData)
        })
        .catch(err => { 
            res.status(500).json(err) 
        })
    },
    postThoughts(req, res){
        Thought.create(req.body)
        .then(dbThoughtData => {
            return User.findOneAndUpdate() //look up what to include <- 
        } )
        .then(dbUserData => {
            res.json({ message: 'Thought Created' })
        })
    }
 };
module.exports = thoughtController;