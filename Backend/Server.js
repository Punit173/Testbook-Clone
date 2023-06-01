const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 80;
const DB = require('./DataBase');
const router = require('./Routes');

//Database Connection
DB.connect();

//Middleware
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}));

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

//routes
app.use('/api', router);
app.use('/uploads',express.static(path.join(__dirname,"/../uploads")));
app.use(express.static(path.join(__dirname,"/../Frontend/build")));

app.get("*",(req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../Frontend/build/index.html`));
    } catch (e) {
        res.send("Oops! unexpected error");
    }
});
app.use(cors());

//Server Listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
});
// app.use(express.static('build'));
// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
//   });