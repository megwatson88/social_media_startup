const router = require('express').Router();
// adding the routes
const apiRoutes = require('.api');

router.use('/api', apiRoutes);

module.exports = router;