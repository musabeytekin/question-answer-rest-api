const express = require("express")
const question = require("./question.js");
const auth = require("./auth.js");

// /api
const router = express.Router();

router.use("/questions", question);
router.use("/auth", auth);

module.exports = router;