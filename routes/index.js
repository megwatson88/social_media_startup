const router = require('express').Router();
// adding the routes
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong Way!')
});

module.exports = router;