const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    
} = require('../../controllers/thought-controller');
// api routes 
router.route('/').get(getThoughts).post(createThought);

// api delete routes
router.route('/:thoughtId').get(getThoughts).put(updateThought).delete(deleteThought);

// api thought ID
//router.route('/:thoughtId/:thoughtTitle').get(getUserThoughtByID);


module.exports = router;
