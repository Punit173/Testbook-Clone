const express = require("express");
const router = express.Router();

const QuestionDB = require('../Models/Question');
router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        await QuestionDB.create({
            QuestionName: req.body.QuestionName,
            QuestionUrl: req.body.QuestionUrl,
        })
        .then(() => {
            res.status(201).send({
                status: true,
                message: "Question added Successfully"
            })
        })
        .catch((err) => {
            res.status(400).send({
                status: false,
                message: "Bad Format"
            })
        })
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })
    }
});

router.get('/', async (req, res)=>{
    try {
        await QuestionDB.aggregate([
            {
                $lookup: {
                    from: "Answer", //collection to join
                    localField: "_id", //field from the input document
                    foreignField: "QuestionId",
                    as:"AllAnswer" //output array field
                }
            }
        ]).exec().then((doc) => {
            res.status(200).send(doc)
        }).catch((error) => {
            res.status(500).send({
                status:false,
                message:"Unable to get the question details"
            })
        })
    } catch (e) {
        res.status(500).send({
            status:false,
            message: "Unexpected error"
        })
    }
})


module.exports = router