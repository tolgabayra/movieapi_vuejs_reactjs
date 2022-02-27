const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    movieName:{
        type: String,
        required : true,
        min:3,
        max:20,
        unique: true
    },
    movieDesc:{
        type:String,
        required: true,
        max: 50,
        unique: true,
    },
    movieYear: {
        type: Number,
        required: true,
    },
    movieCategory: {
        type: Array,
        required: true
    }
},
{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Movie", MovieSchema)
