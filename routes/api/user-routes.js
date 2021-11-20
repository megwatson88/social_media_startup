const router = require('express').Router();
const {

  createUser,
  updateUser,
  deleteUser,
  
  
} = require('../../controllers/user-controller');

// /api/users
router.route('/').post(createUser);

// /api/users/:userId
router.route('/:userId').put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
//router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;