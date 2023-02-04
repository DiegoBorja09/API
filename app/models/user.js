const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true,
        },

        apellidos: {
            type: String,
            required: true,
        },
        
        email: {
            type: String,
        },

        not1: {
            type: Number,
        },

        not2: {
            type: Number,
        },

        not3: {
            type: Number,
        }
    },
   {
        versionKey: false
   
   }
)

module.exports =mongoose.model('user', UserScheme)