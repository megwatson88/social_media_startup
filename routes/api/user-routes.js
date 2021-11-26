const router = require('express').Router();
const {
  getUsers, 
  createUser,
  updateUser,
  deleteUser,
  
  
} = require('../../controllers/user-controller');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
//router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;