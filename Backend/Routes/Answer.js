const express = require("express");
const router = express.Router();

const AnswerDB = require('../Models/Answer')

router.post('/', async (req, res) => {
    try {
        await AnswerDB.create({
            Answer: req.body.Answer,
            QuestionId: req.body.QuestionId
        })
        .then(() => {
            res.status(201).send({
                status : true,
                message: "Answer Added Successfully"
            });
        })
        .catch((e) => {
            res.status(400).send({
                status:false,
                message: "Bad Request"
            })
        });
    } catch (e) {
        res.status(500).send({
            status:false,
            message: "Error While Adding Answers"
        });
    }
})
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
        ])
        .exec()
        .then((doc) => {
            res.status(200).send(doc)
        })
        .catch((error) => {
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