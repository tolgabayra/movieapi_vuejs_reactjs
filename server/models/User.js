const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required : true,
        min:3,
        max:20,
        unique: true
    },
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type:String,
        required: true,
        min: 6
    },
    profilePic: {
        type: String,
        default: ""
    },
    favMovie: {
        type: Array,
        default : []
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
},
{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("User", UserSchema)
