const MONGOOSE = require("mongoose");
const PROGRAM_SCHEMA = MONGOOSE.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    imageURL: {
        type: String,
        default: "",
    },

    summary: {
        type: String,
        maxlength: 300,
        required: true,
    },

    detail: {
        type: string,
        required: true
    },

    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
},
    {
        timestamp: true
    })

module.exports = MONGOOSE.model("Programs", PROGRAM_SCHEMA)


