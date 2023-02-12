const {Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')
import {isEmail} from 'validator'

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
            //this probably isn't the proper way to validate is email
            // validate: match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/"),
        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    }
)

const User = model('user', userSchema)

module.exports = User