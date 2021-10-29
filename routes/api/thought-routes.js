const router = require('express').Router();
const { 
    getThoughts, 
    createThought,
    updateThought,
    deleteThought,
    postThoughts,
    

} = require('../../controllers/thought-controller');
// api routes 
router.route('/').get(getThoughts).post(createThought);

// api thought routes
router.route('/:thoughtId').get(aThought).put(updateThought).delete(deleteThought);

// api thought ID
router.route('/:thoughtId/:thoughtTitle').get(getUserThoughtByID);


module.exports = router;
