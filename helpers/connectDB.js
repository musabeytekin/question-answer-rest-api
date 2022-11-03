const mongoose = require("mongoose");

// const dotenv = require("dotenv");

// dotenv.config({
//     path: "../config/env/config.env"
// });

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("success");
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    connect
}

