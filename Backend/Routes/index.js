const express = require('express');
const router = express.Router();

const QuestionRouter = require('./Question');
const AnswerRouter = require('./Answer');

router.get("/",(req,res)=>{
    res.send("This api is reserved for quora clone");
});
router.use("/Question",QuestionRouter);
router.use("/Answer",AnswerRouter);

module.exports = router