const router = require('express').Router();
const { getThoughts } = require('../../controllers/thought-controller');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(aThought).put(updateThought).delete(deleteThought);


module.exports = router;
