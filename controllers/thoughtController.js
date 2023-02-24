const { User , Thought } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thought) => res.json(thought))
        .catch((error) => res.status(500).json(error))
    },
    getThoughtById(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
            !(thought)
                ? res.status(404).json({message: 'Thought not found'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.status(200).json(thought))
        .catch((error) => {
            console.log(error)
           return res.status(500).json(error)
        })
    },
    updateThoughtById(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            // { runValidators: true, new: true }
          )
            .then((thought) =>
              !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThoughtById(req, res) {
        Thought.findOneAndDelete({id: req.params.thoughtId})
            .then((thought) =>
            !thought 
                ?res.status(404).json({message: 'Thought not found'})
                :res.json({thought, message: 'Thought Deleted'})
            )
            .catch((error) => res.status(500).json(error))
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}}

        )
        .then((thought) =>
            !thought
               ? res.status(404).json({message:' no thought found '})
               : res.status(200).json(thought)
        )
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: { reactionId: req.params.reactionId}}}

        )
        .then((thought) =>
            !thought
               ? res.status(404).json({message:' no reaction found '})
               : res.status(200).json(thought)
        )
    },
}