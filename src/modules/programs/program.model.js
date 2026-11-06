const MONGOOSE = require("mongoose");
const PROGRAM_SCHEMA = new MONGOOSE.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    imageSlug: {
        type: String,
        default: "",
    },

    summary: {
        type: String,
        maxlength: 300,
        required: true,
    },

    detail: {
        type: String,
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

module.exports = MONGOOSE.model("Program", PROGRAM_SCHEMA)


