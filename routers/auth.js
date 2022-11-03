const express = require("express");
// api/auth
const router = express.Router();
const { register } = require("../controllers/auth")

router.post("/register", register)


module.exports = router;