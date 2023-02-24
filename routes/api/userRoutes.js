const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriendById,
    deleteFriendById

} = require('../../controllers/userControllers');

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getUserById).delete(deleteUserById).put(updateUserById)

router.route('/:userId/friends/:friendId').post(addFriendById).delete(deleteFriendById)




module.exports = router;
