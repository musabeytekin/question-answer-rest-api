const express = require("express");
const routers = require("./routers")
const {connect} = require("./helpers/connectDB");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config/env/config.env"
});

connect();

const app = express();
const PORT = process.env.PORT;

app.use("/api", routers)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
