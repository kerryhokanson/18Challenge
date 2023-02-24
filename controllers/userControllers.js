const { User , Thought } = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((error) => res.status(500).json(error))
    },
    getUserById(req, res) {
        User.findOne({_id: req.params.userId})
        .then((user) =>
            !(user)
                ? res.status(404).json({message: 'User not found'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser  (req, res) {
        User.create(req.body)
        .then((user) => res.status(200).json(user))
        .catch((error) => {
            console.log(error)
           return res.status(500).json(error)
        })
    },
    updateUserById(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            // { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUserById(req, res) {
        User.findOneAndDelete({id: req.params.userId})
            .then((user) =>
            !user 
                ?res.status(404).json({message: 'User not found'})
                :res.json({user, message: 'User Deleted'})
            )
            .catch((error) => res.status(500).json(error))
    },
    addFriendById(req, res) {
        
    },
    deleteFriendById(req, res) {

    },
}