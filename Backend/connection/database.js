const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/exam', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log(err)
})


const examSchema = new mongoose.Schema({
    name : String,
    imgURL : String
})

const courseSchema = new mongoose.Schema({
    name: String,
    lang: String,
    img: String,
    
})

const Exam = mongoose.model("Exam Schema",examSchema)

module.exports=Exam

