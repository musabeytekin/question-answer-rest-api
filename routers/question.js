const express = require("express");
// api/question
const router = express.Router();
const {getAllQuestions} = require("../controllers/question");


router.get("/", getAllQuestions);


module.exports = router;