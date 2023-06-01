const mongoose = require('mongoose');
const url = "mongodb://sourabhpote007:QuoraApp@ac-ktuvkmx-shard-00-00.s9nos7m.mongodb.net:27017,ac-ktuvkmx-shard-00-01.s9nos7m.mongodb.net:27017,ac-ktuvkmx-shard-00-02.s9nos7m.mongodb.net:27017/Quora-Clone-App?ssl=true&replicaSet=atlas-dfrh3j-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => console.log("Error: ", error))
};