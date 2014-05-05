var express = require('express');
var LISTEN_PORT = 7000;
var app = express();
app.use(express.bodyParser());
app.use(express.static(__dirname));

var allMessages = [];

app.post('/chat', function (req, res) {
    console.log("post query!");
    var msg = req.body.message;
    if (msg) {
        console.log("Message received: " + msg);
        allMessages.push(msg);
    }
    res.send(null);
});

app.get('/chat', function (req,res) {
//    console.log("get query!");
    res.json(allMessages);
});

app.listen(LISTEN_PORT,function () {
    console.log("working...");
});