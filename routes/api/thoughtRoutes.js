const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReaction,

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getThoughtById).delete(deleteThoughtById).put(updateThoughtById)

router.route('/:thoughtId/reactions/').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)


module.exports = router;


