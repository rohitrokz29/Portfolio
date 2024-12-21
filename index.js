const exp = require('constants');
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { SendMessage } = require('./mailer');
const { VisitorData } = require('./sheetDatabase');

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.post('/message/:name/:email/:message', SendMessage);

app.post('/visitor', VisitorData);


app.use(express.static(path.join(__dirname, 'public')));
const home = fs.readFileSync('public/Main.html');
app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.send(home)
});

app.listen(port, () => {
    fs.writeFile("google-sheets-key.json", JSON.stringify(require('./config')), (err) => {
        console.log(err);
    });
    console.log("running at", port)
});