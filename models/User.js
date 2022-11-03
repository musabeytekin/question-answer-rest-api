const mongoose = require("mongoose");

const Schema = mongoose.Schema;
console.log(Schema);

const UserSchema = new Schema({
    name : {
        type : String,
        required: [true, "Please enter a name"],
    },
    email : {
        type: String,
        required : [true, "please enter an email address"],
        unique : true,
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ]
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },
    password : {
        type : String,
        minlength: 6,
        required : [true, "Please enter a password"],
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    title : String,
    about : String,
    website : String,
    place : String,
    profil_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : String,
        default : false
    }
});

module.exports = mongoose.model("User", UserSchema);