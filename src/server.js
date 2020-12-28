const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors')
const path = require('path')
app.use(cors())
const { data } = require('./data')
const fs = require('fs')


app.get('/api/image', (req, res) => {
    let fileName = req.query.fileName;
    let secret = req.query.secret;
    let _path = path.join(__dirname, "public", "image", fileName);

    if (secret === "secret") {
        if (fs.existsSync(_path)) {

            res.sendFile(_path)
        }
        else {
            res.status(404)
        }
    }
})

app.get('/api/text', (req, res) => {
    let fileName = req.query.fileName;
    let secret = req.query.secret;
    // console.log(fileName, secret,_path)
    let _path = path.join(__dirname, "public", "text", fileName);
    console.log(fileName, secret, _path)
    if (secret === "secret") {
        if (fs.existsSync(_path)) {

            res.sendFile(_path)
        }
        else {
            res.status(404).send()
        }
    }
})


app.get('/api/video', (req, res) => {
    let fileName = req.query.fileName;
    let secret = req.query.secret;
    // console.log(fileName, secret,_path)
    let _path = path.join(__dirname, "public", "video", fileName);
    console.log(fileName, secret, _path)
    if (secret === "secret") {
        if (fs.existsSync(_path)) {

            res.sendFile(_path)
        }
        else {
            res.status(404).send()
        }
    }
})

app.get('/api/available', (req, res) => {
    console.log("ex")
    res.status(200).json(data)
})


app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;