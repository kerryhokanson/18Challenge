const {Schema, model} = require('mongoose')
const userSchema = require('./User')

const thoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        username: {},
        reactions: [reactionSchema],

    }
)

const reactionSchema = new Schema(
    {
        reactionId: {},
        reactionBody: {},
        username: {},
        createdAt: {},

    }
)